(function() {
    'use strict';

    angular
        .module('app.users')
        .controller('Users', Users);

    Users.$inject = ['$scope', 'crud', 'logger', 'userModel', '$modal', 'roleModel', 'utils', '$http'];
    /* @ngInject */
    function Users($scope, crud, logger, userModel, $modal, roleModel, utils, $http) {
      /*jshint validthis: true */
      $scope.userModel = userModel.init($scope);
      $scope.userCrud = crud.make($scope.userModel);
      $scope.userCrud.getList("?" + $.param($scope.userModel.getList.param));
      $scope.openUpdateForm = openUpdateForm;
      $scope.submitUpdateForm = submitUpdateForm;
      
      $scope.openRoleAssignmentModal = openRoleAssignmentModal;
      $scope.dismissRoleAssignmentModal = dismissRoleAssignmentModal;
      $scope.submitRoleAssignments = submitRoleAssignments;

      function getRole(roleId) {
        var ret = {}
        angular.forEach($scope.roles, function(role) {
          if (roleId == role.id) {
            ret = role;
          }
        });

        return ret;
      }

      function openUpdateForm(userId) {
        $scope.userCrud.openUpdateForm(userId,
          function(data) {$scope.oldUser = data}, 'md');
      }

      function submitUpdateForm(userId, oldUser) {
        $scope.userCrud.updateModel(oldUser.id, oldUser, submitUpdateFormComplete);
        function submitUpdateFormComplete() {
          $scope.userCrud.getList(""); $scope.userCrud.dismissCreateForm()
        }
      }

      function openRoleAssignmentModal(user) {
        $scope.selectedUser = user;
        $scope.roleModel = roleModel.init($scope);
        $scope.roleCrud = crud.make($scope.roleModel);

        $scope.roleCrud.getList("", function() {
          angular.forEach($scope.selectedUser.roles, function(role) {
            var tmpRole = getRole(role.id);
            if (tmpRole) tmpRole.isSelected = true;
          });

          $scope.roleAssignmentModal =
            utils.openModal('app/users/_gan_roles.html', $scope, 'md');
        });
      }

      function dismissRoleAssignmentModal() {
        $scope.roleAssignmentModal.close();
      }

      function submitRoleAssignments() {
        var userId = $scope.selectedUser.id;
        var roleIds = [];
        angular.forEach($scope.roles, function(role) {
          if (role.isSelected) {
            roleIds.push(role.id);
          }
        });

        $http.post('/users/' + userId + "/roles",
          {user_id: userId, role_ids: roleIds}).then(function(successResponse) {
          $scope.dismissRoleAssignmentModal();
          $scope.userCrud.getList("?" + $.param($scope.userModel.getList.param));
        }, function(error) {
          console.log(error);
        })
      }
    }
})();
