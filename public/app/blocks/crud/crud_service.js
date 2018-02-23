(function() {
  'use strict';

  angular
    .module('blocks.crud')
    .factory('crudService', crudService);

  /* @ngInject */
  function crudService($http, $q, logger, SweetAlert, utils) {
    var prepareCreateData = prepareCreateData;
    var submitCreateData = submitCreateData;
    var getSingle = getSingle;

    var service = {
      getItems: getItems,
      getItem: getItem,
      openItemCreateModal: openItemCreateModal,
      createItem: createItem,
      openItemUpdateModal: openItemUpdateModal,
      updateItem: updateItem,
      deleteItem: deleteItem,
    };

    return service;

    function prepareCreateData(modelMeta, modelData) {
      var modelName = modelMeta.name;
      var retVal = {name: modelName, url: modelMeta.url,
        data: {}};
      retVal.data[modelName] = {};

      angular.forEach(modelMeta.domestic, function(attribute) {
        retVal.data[modelName][attribute] = modelData[attribute];
      });

      retVal.children = [];
      angular.forEach(modelMeta.one_to_many, function(childModelMeta) {
        childModelData = modelData[childModelMeta.name + "s"];
        angular.forEach(childModelData, function(dataItem) {
          retVal.children.push(prepareCreateData(childModelMeta, dataItem));
        });
      });

      return retVal;
    }

    function submitCreateData(M, resultant) {
      return $http.post(M.url, M.data)
        .then(function(response) {
          if (response.data.errors) {
            return $q.reject(response);
          }

          if (resultant) resultant.data = response.data;

          var promises = [];
          angular.forEach(M.children, function(child) {
            child.data[child.name][utils.camelToSnakeCase(M.name) + "_id"] =
              response.data.id;
            promises.push(submitCreateData(child));
          });

          return $q.all(promises);
        })
        .catch(function(response) {
          var errorMessages = [];
          if (response.data.message) {
            errorMessages.push(response.data.message);
          }

          if (response.data.errors) {
            angular.forEach(response.data.errors, function(error) {
              errorMessages.push(error.detail);
            });
          }

          angular.forEach(errorMessages, function(errorMessage) {
            logger.error(errorMessage);
          });

          return $q.reject(errorMessages);
        });
    }

    function getSingle(itemMeta, itemId, result) {
      var includes = itemMeta.many_to_one;
      angular.forEach(itemMeta.one_to_many, function(item, key) {
        includes.push(item.name + "s");
      });

      var param = $.param({includes: includes});
      return $http.get(itemMeta.url + "/" + itemId + "?" + param)
        .then(function(response) {

          if (response.data.errors) {
            return $q.reject(response);
          }

          result = Object.assign(result, response.data[itemMeta.name]);
          var promises = [];
          angular.forEach(itemMeta.one_to_many, function(metaItem) {
            utils.renameObjectKey(result, utils.camelToSnakeCase(metaItem.name)
              + "s", metaItem.name + "s");

            angular.forEach(result[metaItem.name + "s"],
              function(dataItem) {
                promises.push(getSingle(metaItem, dataItem.id, dataItem));
              });
          });

          return $q.all(promises);
      })
      .catch(function(response) {
        var errorMessages = [];

        if (response.data.message) {
          errorMessages.push(response.data.message);
        }

        if (response.data.errors) {
          angular.forEach(response.data.errors, function(error) {
            errorMessages.push(error.detail);
          })
        }

        angular.forEach(errorMessages, function(errorMessage) {
          logger.error(errorMessage);
        })

        return $q.reject(errorMessages);
      });
    }

    function createItem(modelMeta, modelData) {
      var createData = prepareCreateData(modelMeta, modelData);
      var response = {data: {}};
      return submitCreateData(createData, response).then(function() {
        return response;
      });
    }

    function getItems(url) {
      return $http.get(url)
        .then(function(response) {
          if (!response.data.errors) {
            return response;
          } else {
            return $q.reject(response);
          }
        })
        .catch(function(response) {
          var errorMessages = [];

          if (response.data.message) {
            errorMessages.push(response.data.message);
          }

          if (response.data.errors) {
            angular.forEach(response.data.errors, function(error) {
              errorMessages.push(error.detail);
            })
          }

          angular.forEach(errorMessages, function(errorMessage) {
            logger.error(errorMessage);
          })

          return $q.reject(errorMessages);
        });
    }

    function getItem(itemMeta, itemId) {
      var result = {};
      return getSingle(itemMeta, itemId, result).then(function() {
        return result;
      });
    }

    function openItemCreateModal(parameters) {
      var openModalErrorMessage = parameters.openModalErrorMessage;
      var modalUrl = parameters.modalUrl;
      var createModalName = parameters.createModalName;
      var size = parameters.size;
      var scope = parameters.scope;
      var windowClass = parameters.windowClass;
      var dependencies = parameters.dependencies;

      var promises = [];
      angular.forEach(dependencies, function(dependency) {
        promises.push(
          $http.get(dependency.url)
          .then(function(response) {
            if (!response.data.errors) {
              scope[dependency.name] = response.data[dependency.name];
            } else {
              return $q.reject(response);
            }
          })
          .catch(function(response) {
            var errorMessages = [dependency.errorMessage];

            if (response.data.message) {
              errorMessages.push(response.data.message);
            }

            if (response.data.errors) {
              angular.forEach(response.data.errors, function(error) {
                errorMessages.push(error.detail);
              });
            }

            angular.forEach(errorMessages, function(errorMessage) {
              logger.error(errorMessage);
            });

            return $q.reject(errorMessages);
          })
        );
      });

      $q.all(promises).then(function() {
        scope[createModalName] =
          utils.openModal(modalUrl, scope, size, windowClass);
      }).catch(function()  {
        logger.error(openModalErrorMessage);
      });
    }

    function openItemUpdateModal(parameters) {
      var itemMeta = parameters.itemMeta;
      var itemId = parameters.itemId;
      var itemName = parameters.itemName;
      var openModalErrorMessage = parameters.openModalErrorMessage;
      var modalUrl = parameters.modalUrl;
      var updateModalName = parameters.updateModalName;
      var size = parameters.size;
      var scope = parameters.scope;
      var windowClass = parameters.windowClass;
      var dependencies = parameters.dependencies;

      var promises = [];
      angular.forEach(dependencies, function(dependency) {
        promises.push(
          $http.get(dependency.url)
          .then(function(response) {
            if (!response.data.errors) {
              scope[dependency.name] = response.data[dependency.name];
            } else {
              return $q.reject(response);
            }
          })
          .catch(function(response) {
            var errorMessages = [dependency.errorMessage];

            if (response.data.message) {
              errorMessages.push(response.data.message);
            }

            if (response.data.errors) {
              angular.forEach(response.data.errors, function(error) {
                errorMessages.push(error.detail);
              });
            }

            angular.forEach(errorMessages, function(errorMessage) {
              logger.error(errorMessage);
            });

            return $q.reject(errorMessages);
          })
        );
      });

      $q.all(promises).then(function() {
        getItem(itemMeta, itemId).then(function(item) {
          scope[itemName] = item; 
          scope[updateModalName] =
            utils.openModal(modalUrl, scope, size, windowClass);
        }).catch(function(response) {
          logger.error(openModalErrorMessage);
        });
      }).catch(function()  {
        logger.error(openModalErrorMessage);
      });
    }

    function updateItem(url, data) {
      return $http.put(url, data)
        .then(function(response) {
          if (!response.data.errors) {
            return response;
          } else {
            return $q.reject(response);
          }
        })
        .catch(function(response) {
          var errorMessages = [];

          if (response.data.message) {
            errorMessages.push(response.data.message);
          }

          if (response.data.errors) {
            angular.forEach(response.data.errors, function(error) {
              errorMessages.push(error.detail);
            });
          }

          angular.forEach(errorMessages, function(errorMessage) {
            logger.error(errorMessage);
          });

          return $q.reject(errorMessages);
        });
    }

    function deleteItem(parameters, callback) {
      var url = parameters.url;
      var sweetAlertTitle = parameters.sweetAlertTitle;
      var sweetAlertText = parameters.sweetAlertText;
      var successMessage = parameters.successMessage
      var errorMessage = parameters.errorMessages;

      SweetAlert.swal({
        title: sweetAlertTitle,
        text: sweetAlertText,
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
          $http.delete(url)
          .then(function(response) {
            if (!response.data.errors) {
              logger.success(successMessage);
            } else {
              return $q.reject(response);
            }

            if (callback) callback(true);
          })
          .catch(function(response) {
            var errorMessages = [errorMessage];

            if (response.data.message) {
              errorMessages.push(response.data.message);
            }

            if (response.data.errors) {
              angular.forEach(response.data.errors, function(error) {
                errorMessages.push(error.detail);
              });
            }

            angular.forEach(errorMessages, function(errorMessage) {
              logger.error(errorMessage);
            });

            if (callback) callback(false);
          });
        };
      });
    }
  }
})();
