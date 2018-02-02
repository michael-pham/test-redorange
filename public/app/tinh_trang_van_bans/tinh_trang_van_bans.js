(function() {
    'use strict';

    angular
        .module('app.tinhTrangVanBans')
        .controller('TinhTrangVanBans', TinhTrangVanBans);

    TinhTrangVanBans.$inject = ['$scope', 'crud', 'logger', 'tinhTrangVanBanModel', '$modal'];
    /* @ngInject */
    function TinhTrangVanBans($scope, crud, logger, tinhTrangVanBanModel, $modal) {
        /*jshint validthis: true */
        $scope.tinhTrangVanBanModel = tinhTrangVanBanModel.init($scope);
        $scope.tinhTrangVanBanCrud = crud.make($scope.tinhTrangVanBanModel);
        $scope.tinhTrangVanBanCrud.getList("");
        $scope.openUpdateForm = openUpdateForm;
        $scope.submitUpdateForm = submitUpdateForm;

        function openUpdateForm(tinhTrangVanBanId) {
          $scope.tinhTrangVanBanCrud.openUpdateForm(tinhTrangVanBanId, function(data) {$scope.oldTinhTrangVanBan = data}, 'md');
        }

        function submitUpdateForm(tinhTrangVanBanId, oldTinhTrangVanBan) {
          $scope.tinhTrangVanBanCrud.updateModel(oldTinhTrangVanBan.id, oldTinhTrangVanBan, submitUpdateFormComplete);
          function submitUpdateFormComplete() {
            $scope.tinhTrangVanBanCrud.getList(""); $scope.tinhTrangVanBanCrud.dismissCreateForm()
          }
        }
    }
})();
