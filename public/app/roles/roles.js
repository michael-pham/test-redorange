(function() {
    'use strict';

    angular
        .module('app.roles')
        .controller('Roles', Roles);

    Roles.$inject = ['$scope', 'crud', 'logger', 'roleModel', '$modal',
      'permissionModel', 'utils', '$http'];
    /* @ngInject */
    function Roles($scope, crud, logger, roleModel, $modal, permissionModel,
      utils, $http) {
        /*jshint validthis: true */
        $scope.roleModel = roleModel.init($scope);
        $scope.roleCrud = crud.make($scope.roleModel);
        $scope.roleCrud.getList("?" + $.param($scope.roleModel.getList.param));
        $scope.openUpdateForm = openUpdateForm;
        $scope.submitUpdateForm = submitUpdateForm;

        $scope.openPermissionAssignmentModal = openPermissionAssignmentModal;
        $scope.dismissPermissionAssignmentModal = dismissPermissionAssignmentModal;
        $scope.submitPermissionAssignments = submitPermissionAssignments;

        function getPermission(permissionId) {
          var ret = {}
          angular.forEach($scope.permissions, function(permission) {
            if (permissionId == permission.id) {
              ret = permission;
            }
          });
          return ret;
        }

        function openUpdateForm(roleId) {
          $scope.roleCrud.openUpdateForm(roleId,
            function(data) {$scope.oldRole = data}, 'md');
        }

        function submitUpdateForm(roleId, oldRole) {
          $scope.roleCrud.updateModel(oldRole.id, oldRole, submitUpdateFormComplete);
          function submitUpdateFormComplete() {
            $scope.roleCrud.getList(""); $scope.roleCrud.dismissCreateForm()
          }
        }

        function openPermissionAssignmentModal(role) {
          $scope.selectedRole = role;
          $scope.permissionModel = permissionModel.init($scope);
          $scope.permissionCrud = crud.make($scope.permissionModel);

          $scope.permissionCrud.getList("", function() {
            angular.forEach($scope.selectedRole.permissions, function(permission) {
              var tmpPermission = getPermission(permission.id);
              if (tmpPermission) tmpPermission.isSelected = true;
            });

            $scope.permissionAssignmentModal =
              utils.openModal('app/roles/_gan_permissions.html', $scope, 'md');
          });
        }

        function dismissPermissionAssignmentModal() {
          $scope.permissionAssignmentModal.close();
        }

        function submitPermissionAssignments() {
          var roleId = $scope.selectedRole.id;
          var permissionIds = [];
          angular.forEach($scope.permissions, function(permission) {
            if (permission.isSelected) {
              permissionIds.push(permission.id);
            }
          });

          $http.post('/roles/' + roleId + "/permissions",
            {role_id: roleId, permission_ids: permissionIds}).then(
              function(successResponse) {
                
            $scope.dismissPermissionAssignmentModal();
            $scope.roleCrud.getList("?" + $.param($scope.roleModel.getList.param));
          }, function(error) {
            console.log(error);
          })
        }
    }
})();
