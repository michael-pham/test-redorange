'use strict';

angular.module('blocks.utils', ['ui.bootstrap'])
.factory('utils', function(Upload, $modal, SweetAlert) {
  return {
    makeParams: {
      pagination: function(pagination) {
        return "&limit=" + pagination.limit + "&page=" + pagination.page
      },
      // [[keyName, value, operator]]
      filters: function(metaParams) {
        var filters = [];
        for (var i = 0; i < metaParams.length; ++i) {
          filters.push({
            key: metaParams[i][0],
            value: metaParams[i][1],
            operator: metaParams[i][2],
          });
        }
        var params = {
          "filter_groups": [
            {
              "filters": filters
            }
          ]
        };
        params = $.param(params);
        return "&" + params;
      }
    },
    removeItemFromList: function(item, list, condition) {
      var retList = [];
      for (var i = 0; i < list.length; i++) {
        if (!condition(item, list[i])) {
          retList.push(list[i]);
        }
      }
      return retList;
    },
    camelToSnakeCase: function(str) {
      return str.split(/(?=[A-Z])/).join('_').toLowerCase();
    },
    openModal: function(modalUrl, scope, size, windowClass) {
      if (!size) size = 'lg';
      return $modal.open({
        animation: true,
        size: size,
        templateUrl: modalUrl,
        windowClass: windowClass,
        scope: scope,
        resolve: {
        }
      });
    },
    cloneObj: function(obj) {
      return JSON.parse(JSON.stringify(obj));
    },
    findAttrByAttr: function(attr1_name, attr2_name, attr2_value, list) {
      for(var i = 0; i < list.length; ++i) {
        var item = list[i];
        if (item[attr2_name] == attr2_value) {
          return item[attr1_name];
        }
      }
      return "";
    },
    renameObjectKey(object, oldKey, newKey) {
      object[newKey] = object[oldKey];
      delete object[oldKey]
    },
    uploadFile(file, callback) {
       file.upload = Upload.upload({
         url: 'http://localhost:8000/file_upload',
         data: {file: file},
       });

       file.upload.then(function (successResponse) {
         callback(successResponse);
       }, function (errorResponse) {
         SweetAlert.swal("Error", successResponse.data.file.message, "error");
       }, function (evt) {
       });
    },
    uploadImage(file, callback) {
       file.upload = Upload.upload({
         url: 'http://localhost:8000/image_upload',
         data: {file: file},
       });

       file.upload.then(function (successResponse) {
         callback(successResponse);
       }, function (errorResponse) {
         SweetAlert.swal("Error", successResp.data.file.message, "error");
       }, function (evt) {
       });
    },
    initCreateViewAux: function(toolKit, ctrl, rootVar, parentName,
      subjectName, childName, addMode) {
      var _this = this;
      if (!toolKit.reset) toolKit.reset = {};
      toolKit.reset[subjectName] = function() {
        if (childName) {
          var tmpName = childName + "s";
          rootVar[subjectName] = {};
          rootVar[subjectName][tmpName] = [];
          toolKit.reset[childName]();
        } else {
          rootVar[subjectName] = {};
        }
        ctrl[subjectName].addMode = true;
      }

      if (!toolKit.add) toolKit.add = {};
      toolKit.add[subjectName] = function() {
        var tmp = _this.cloneObj(rootVar[subjectName]);
        rootVar[parentName][subjectName + "s"].push(tmp);
        toolKit.reset[subjectName]();
      }

      if (!toolKit.remove) toolKit.remove = {};
      toolKit.remove[subjectName] = function(key) {
        rootVar[parentName][subjectName + "s"].splice(key, 1);
        toolKit.reset[subjectName]();
      }

      if (!toolKit.edit) toolKit.edit = {};
      toolKit.edit[subjectName] = function(key) {
        rootVar[subjectName] =
          _this.cloneObj(rootVar[parentName][subjectName + "s"][key]);
        rootVar[subjectName].idx = key;
        ctrl[subjectName].addMode = false;
      }

      if (!toolKit.save) toolKit.save = {};
      toolKit.save[subjectName] = function() {
        rootVar[parentName][subjectName + "s"][rootVar[subjectName].idx] =
          _this.cloneObj(rootVar[subjectName]);
        toolKit.reset[subjectName]();
      }
    },
    initUpdateViewAux: function(parentCrud, subjectCrud, toolKit, ctrl, rootVar,
      parentName, subjectName, childName, addMode) {
      var _this = this;

      if (!toolKit.updateThrough) toolKit.updateThrough = {};
      toolKit.updateThrough[subjectName] = function() {
        parentCrud.getSingle(rootVar[parentName].id, function(retItem) {
          rootVar[parentName][subjectName + "s"] = retItem[subjectName + "s"];
          if (toolKit.updateThrough[parentName]) {
            toolKit.updateThrough[parentName]();
          }
        });
      }

      if (!toolKit.reset) toolKit.reset = {};
      toolKit.reset[subjectName] = function() {
        rootVar[subjectName] = {};
        rootVar[subjectName][childName + "s"] = [];
        ctrl[subjectName].addMode = true;
      }

      if (!toolKit.edit) toolKit.edit = {};
      toolKit.edit[subjectName] = function(item) {
        rootVar[subjectName] = _this.cloneObj(item);
        ctrl[subjectName].addMode = false;
      }

      if (!toolKit.save) toolKit.save = {};
      toolKit.save[subjectName] = function() {
        if (rootVar[subjectName].id) {
          subjectCrud.updateModel(rootVar[subjectName].id, rootVar[subjectName],
            function() {
            toolKit.updateThrough[subjectName]();
          });
        } else {
          rootVar[parentName][subjectName + "s"].push(_this.cloneObj(rootVar[subjectName]));
          toolKit.reset[subjectName]();
        }
      }

      if (!toolKit.open) toolKit.open = {};
      toolKit.open[subjectName] = function() {
        rootVar[subjectName] = {};
        rootVar[subjectName][childName + "s"] = [];
        ctrl[subjectName].addMode = true;
      }

      if (!toolKit.add) toolKit.add = {};
      toolKit.add[subjectName] = function() {
        var tmpData = _this.cloneObj(rootVar[subjectName]);

        if (rootVar[parentName].id > 0) {
          tmpData[_this.camelToSnakeCase(parentName) + "_id"] = rootVar[parentName].id;
          subjectCrud.submitCreateForm(tmpData, function(isSuccessful, response) {
            if (isSuccessful) {
              toolKit.updateThrough[subjectName]();
            }
          });
        } else {
          rootVar[parentName][subjectName + "s"].push(tmpData);
        }
      }

      if (!toolKit.delete) toolKit.delete = {};
      toolKit.delete[subjectName] = function(key) {
        if (rootVar[parentName][subjectName + "s"][key].id) {
          subjectCrud.deleteModel(rootVar[parentName][subjectName + "s"][key].id, function () {
            toolKit.updateThrough[subjectName]();
          });
        } else {
          rootVar[parentName][subjectName + "s"].splice(key, 1);
        }
      }
    }
  }
});
