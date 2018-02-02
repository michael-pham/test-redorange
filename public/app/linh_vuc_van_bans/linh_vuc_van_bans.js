(function() {
    'use strict';

    angular
        .module('app.linhVucVanBans')
        .controller('LinhVucVanBans', LinhVucVanBans);

    LinhVucVanBans.$inject = ['$scope', 'crud', 'logger', 'linhVucVanBanModel', '$modal'];
    /* @ngInject */
    function LinhVucVanBans($scope, crud, logger, linhVucVanBanModel, $modal) {
        /*jshint validthis: true */
        $scope.linhVucVanBanModel = linhVucVanBanModel.init($scope);
        $scope.linhVucVanBanCrud = crud.make($scope.linhVucVanBanModel);
        $scope.linhVucVanBanCrud.getList("");
        $scope.openUpdateForm = openUpdateForm;
        $scope.submitUpdateForm = submitUpdateForm;

        function openUpdateForm(linhVucVanBanId) {
          $scope.linhVucVanBanCrud.openUpdateForm(linhVucVanBanId, function(data) {$scope.oldLinhVucVanBan = data}, 'md');
        }

        function submitUpdateForm(linhVucVanBanId, oldLinhVucVanBan) {
          $scope.linhVucVanBanCrud.updateModel(oldLinhVucVanBan.id, oldLinhVucVanBan, submitUpdateFormComplete);
          function submitUpdateFormComplete() {
            $scope.linhVucVanBanCrud.getList(""); $scope.linhVucVanBanCrud.dismissCreateForm()
          }
        }
    }
})();
