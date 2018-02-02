(function() {
    'use strict';

    angular
        .module('app.permissions')
        .controller('Permissions', Permissions);

    Permissions.$inject = ['$scope', 'crud', 'logger', 'permissionModel', '$modal'];
    /* @ngInject */
    function Permissions($scope, crud, logger, permissionModel, $modal) {
        /*jshint validthis: true */
        $scope.permissionModel = permissionModel.init($scope);
        $scope.permissionCrud = crud.make($scope.permissionModel);
        $scope.permissionCrud.getList("");
        $scope.openUpdateForm = openUpdateForm;
        $scope.submitUpdateForm = submitUpdateForm;

        function openUpdateForm(permissionId) {
          $scope.permissionCrud.openUpdateForm(permissionId, function(data) {$scope.oldPermission = data}, 'md');
        }

        function submitUpdateForm(permissionId, oldPermission) {
          $scope.permissionCrud.updateModel(oldPermission.id, oldPermission, submitUpdateFormComplete);
          function submitUpdateFormComplete() {
            $scope.permissionCrud.getList(""); $scope.permissionCrud.dismissCreateForm()
          }
        }
    }
})();
