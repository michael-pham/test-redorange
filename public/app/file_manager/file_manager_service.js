(function() {
    'use strict';

    angular
        .module('app.fileManager')
        .factory('fileManagerService', fileManagerService);

    /* @ngInject */
    function fileManagerService($http, $location, $q, exception, logger) {
        var service = {
          getAllItems: getAllItems,
          uploadFile: uploadFile,
          createFolder: createFolder,
          renameItem: renameItem,
          deleteItem:deleteItem
        };

        return service;

        function getAllItems() {
          return $http.get('/file_manager/jsonitems').then(function(succesResponse) {
            return succesResponse.data.items;
          }).catch(exception.catcher('Lỗi tải danh sách files.'));
        }

        function uploadFile() {
          return $http.get('/file_manager/jsonitems').then(function(succesResponse) {
            return succesResponse.data.items;
          }).catch(exception.catcher('Lỗi tải danh sách files.'));
        }

        function createFolder() {
          return $http.get('/file_manager/jsonitems').then(function(succesResponse) {
            return succesResponse.data.items;
          }).catch(exception.catcher('Lỗi tải danh sách files.'));
        }

        function renameItem() {
          return $http.get('/file_manager/jsonitems').then(function(succesResponse) {
            return succesResponse.data.items;
          }).catch(exception.catcher('Lỗi tải danh sách files.'));
        }

        function deleteItem() {
          return $http.get('/file_manager/delete', {items: []}).then(function(succesResponse) {
            return succesResponse.data.items;
          }).catch(exception.catcher('Lỗi tải danh sách files.'));
        }
    }
})();
