(function() {
    'use strict';

    angular
        .module('app.fileManager')
        .controller('FileManager', FileManager);

    FileManager.$inject = ['$scope', 'logger', 'fileManagerService', '$http'];
    /* @ngInject */
    function FileManager($scope, logger, fileManagerService, $http) {
        /*jshint validthis: true */
      fileManagerService.getAllItems().then(function(items) {
        $scope.items = items;
      });
    }
})();
