(function() {
  'use strict';

  angular
      .module('blocks.crud')
      .factory('crud', crud);

  // crud.$inject = ['$http', 'SweetAlert', '$uibModal', '$q', 'utils'];

  function crud ($http, SweetAlert, $q, utils) {
    var prepareCreateData = function(modelMeta, modelData) {
      var ret = {name: modelMeta.name};
      var data = {};
      ret.url = modelMeta.url;

      for (var i = 0; i < modelMeta.domestic.length; ++i)
      {
        var tmpName = modelMeta.domestic[i];
        data[tmpName] = modelData[tmpName];
      }

      var dataName = modelMeta.name;
      ret.data  = {};
      ret.data[dataName] = data;

      ret.children = [];
      for (var i = 0; i < modelMeta.one_to_many.length; ++i)
      {
        var tmpName = modelMeta.one_to_many[i].name;
        var tmpData = modelData[tmpName + "s"];
        for (var j = 0; j < tmpData.length; ++j)
        {
          ret.children.push(prepareCreateData(modelMeta.one_to_many[i],
            tmpData[j]));
        }
      }

      return ret;
    }

    var submitCreateData = function(A, resultant) {
      return $http.post(A.url, A.data).then(function(successResp) {
        if (resultant) {
          resultant.data = successResp.data;
        }

        if (successResp.data.errors) {
          return $q.reject(successResp.data.errors);
        }

        var promises = [];
        for (var i = 0; i < A.children.length; ++i)
        {
          var child = A.children[i];
          child.data[child.name][utils.camelToSnakeCase(A.name) + "_id"] =
            successResp.data.id;
          promises.push(submitCreateData(child));
        }

        if (promises.length > 0)
        {
          return $q.all(promises);
        }
      }, function(errorResp) {
        return $q.reject(errorResp);
      });
    }

    var getSingle = function(getMeta, itemId, result) {
      var includes = getMeta.many_to_one;
      angular.forEach(getMeta.one_to_many, function(item, key) {
        includes.push(item.name + "s");
      });

      var param = $.param({includes: includes});
      return $http.get(getMeta.url + "/" + itemId + "?" + param).then(function(successResp) {
        if (successResp.data.errors) {
          return $q.reject(successResp.data.errors);
        }

        result = Object.assign(result, successResp.data[getMeta.name]);
        var promises = [];
        angular.forEach(getMeta.one_to_many, function(metaItem, key1) {
          utils.renameObjectKey(result, utils.camelToSnakeCase(metaItem.name)
            + "s", metaItem.name + "s");
          angular.forEach(result[metaItem.name + "s"],
            function(dataItem, key2) {
            promises.push(getSingle(metaItem, dataItem.id, dataItem));
          });
        });

        return $q.all(promises);
      }, function(errorResp) {
        return $q.reject(errorResp);
      });
    }

    return {
      httpCombo: function(requests, callback) {
        var promises = [];
        angular.forEach(requests, function(request, key)
        {
          promises.push(
            $http({
              method: request.method,
              url: request.url,
              hideOverlay :true,
              data: request.data
            }).then(function(successResp) {
              var isSuccessful = false;
              if (!successResp.data.errors) {
                isSuccessful = true;
              }
              request.callback(isSuccessful, successResp);
            })
          );
        });

        $q.all(promises).then(function() {
          callback(true);
        }).catch(function() {
          callback(false);
        });
      },
      make: function(model) {
        var _this = this;
        return {
          getSingle: function(itemId, callback) {
            var result = {};
            getSingle(model.getSingle, itemId, result).then(function(data) {
              if (callback) callback(result);
            }, function(error) {
              console.log(error);
            });
          },
          getList: function(params, callback) {
            $http.get(model.getList.url + params).then(function(successResponse) {
              model.ctrlScope[model.getList.name] =
                successResponse.data[model.getList.name];
              if (callback) {
                callback(successResponse);
              }
            }, function(errorResponse) {
              console.log(errorResponse);
            });
          },
          openCreateForm: function(size, windowClass) {
            var foreigns =  model.create.meta.many_to_one;
            if (foreigns.length > 0) {
              var requests = [];
              angular.forEach(foreigns, function(foreign, key) {
                requests.push({
                  url: foreign.url,
                  method: "get",
                  data: {},
                  callback: function(status, response) {
                    if (status) {
                      model.ctrlScope[foreign.name] = response.data[foreign.name];
                    } else {
                      console.log(response);
                    }
                  },
                });
              });

              _this.httpCombo(requests, function(result) {
                if (result) {
                  model.create.activeModalInstance =
                  utils.openModal(model.create.modalUrl, model.ctrlScope, size, windowClass);
                }
              });
            } else {
              model.create.activeModalInstance =
              utils.openModal(model.create.modalUrl, model.ctrlScope, size, windowClass);
            }
          },
          dismissCreateForm: function() {
            model.create.activeModalInstance.close();
          },
          submitCreateForm: function(data, callback) {
            var thisObj = this;
            var createData = prepareCreateData(model.create.meta, data);

            var resultant = {
              data: {}
            }

            submitCreateData(createData, resultant).then(function(success) {
              if (callback) callback(true, resultant);
              SweetAlert.swal("Success", model.create.successMessage, "success");
              thisObj.getList("?" + $.param(model.getList.param), function(data) {});
              // model.create.activeModalInstance.close();
            }, function(error) {
              SweetAlert.swal("Error", model.create.errorMessage, "error");
              if (callback) callback(false, error);
            });
          },
          submitCreateFormV2: function(data, callback) {
            var thisObj = this;
            var createData = prepareCreateData(model.create.meta, data);
            var resultant = {
              data: {}
            }
            submitCreateData(createData, resultant).then(function(success) {
              if (callback) callback(true, resultant);
              SweetAlert.swal("Success", model.create.successMessage, "success");
              // model.create.activeModalInstance.close();
            }, function(error) {
              SweetAlert.swal("Error", model.create.errorMessage, "error");
              callback(false, error);
            });
          },
          openUpdateForm: function(itemId, callback, size, windowClass) {
            var thisObj = this;
            var foreigns =  model.create.meta.many_to_one;
            if (foreigns.length > 0) {
              var requests = [];
              angular.forEach(foreigns, function(foreign, key) {
                requests.push({
                  url: foreign.url,
                  method: "get",
                  data: {},
                  callback: function(status, response) {
                    if (status) {
                      model.ctrlScope[foreign.name] = response.data[foreign.name];
                    } else {
                      console.log(response);
                    }
                  },
                });
              });

              _this.httpCombo(requests, function(result) {
                if (result) {
                  thisObj.getSingle(itemId, function(singleItem) {
                    callback(singleItem);
                    model.create.activeModalInstance =
                      utils.openModal(model.update.modalUrl, model.ctrlScope, size, windowClass);
                  });
                }
              });
            } else {
              thisObj.getSingle(itemId, function(singleItem) {
                if (callback) callback(singleItem);
                model.create.activeModalInstance =
                  utils.openModal(model.update.modalUrl, model.ctrlScope, size, windowClass);
              });
            }
          },
          updateModel: function(modelId, data, callback) {
            var tmpData = {};
            tmpData[model.update.name] = data;

            $http.put(model.update.url + '/' + modelId, tmpData).then(
              function(successResponse) {
                if (successResponse.data.errors)   {
                  SweetAlert.swal("Error",
                    successResponse.data.errors[0].detail,"error");
                } else {
                  if (callback) callback();
                  SweetAlert.swal("Success",
                    model.update.successMessage, "success");
                }
              }, function (error) {
                SweetAlert.swal("Error", model.update.errorMessage, "error");
              }
            )
          },
          updateModelV2: function(modelId, data, callback) {
            var tmpData = {};
            tmpData[model.update.name] = data;

            $http.put(model.update.url + '/' + modelId, tmpData).then(
              function(successResponse) {
                if (successResponse.data.errors)   {
                  SweetAlert.swal("Error",
                    successResponse.data.errors[0].detail,"error");
                } else {
                  if (callback) callback();
                }
              }, function (error) {
                SweetAlert.swal("Error", model.update.errorMessage, "error");
              }
            )
          },
          deleteModel: function(modelId, callback) {
            var thisObj = this;
            SweetAlert.swal({
              title: model.delete.titleSweetAlert,
              text: model.delete.textSweetAlert,
              type: "warning",
              showCancelButton: true,
              confirmButtonColor: "#DD6B55",
              confirmButtonText: "Xoá",
              cancelButtonText: "Trở lại",
              closeOnConfirm: true,
              closeOnCancel: true
            },
            function(isConfirm) {
              if (isConfirm) {
                $http.delete(model.delete.url + "/" + modelId).then(function(successResponse) {
                  if (!successResponse.data.errors) {
                    thisObj.getList("?" + $.param(model.getList.param), function(data) {});
                    if (callback) callback();
                  } else {
                    SweetAlert.swal("Error", successResponse.data.errors[0].detail, "error");
                  }
                }, function(errorResponse) {
                  alert("Lỗi xảy ra trong quá trình xóa hợp đồng!");
                })
              };
            });
          },
          deleteModelV2: function(modelId, callback) {
            var thisObj = this;
            SweetAlert.swal({
              title: model.delete.titleSweetAlert,
              text: model.delete.textSweetAlert,
              type: "warning",
              showCancelButton: true,
              confirmButtonColor: "#DD6B55",
              confirmButtonText: "Xoá",
              cancelButtonText: "Trở lại",
              closeOnConfirm: true,
              closeOnCancel: true
            },
            function(isConfirm) {
              if (isConfirm) {
                $http.delete(model.delete.url + "/" + modelId).then(function(successResponse) {
                  if (!successResponse.data.errors) {
                    callback();
                  } else {
                    SweetAlert.swal("Error", successResponse.data.errors[0].detail, "error");
                  }
                }, function(errorResponse) {
                  alert("Lỗi xảy ra trong quá trình xóa hợp đồng!");
                })
              };
            });
          }
        }
      }
    }
}

})();
