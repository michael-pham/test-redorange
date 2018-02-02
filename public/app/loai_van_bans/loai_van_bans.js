(function() {
    'use strict';

    angular
        .module('app.loaiVanBans')
        .controller('LoaiVanBans', LoaiVanBans);

    LoaiVanBans.$inject = ['$scope', 'crud', 'logger', 'loaiVanBanModel', '$modal'];
    /* @ngInject */
    function LoaiVanBans($scope, crud, logger, loaiVanBanModel, $modal) {
        /*jshint validthis: true */
        $scope.loaiVanBanModel = loaiVanBanModel.init($scope);
        $scope.loaiVanBanCrud = crud.make($scope.loaiVanBanModel);
        $scope.loaiVanBanCrud.getList("");
        $scope.openUpdateForm = openUpdateForm;
        $scope.submitUpdateForm = submitUpdateForm;

        function openUpdateForm(loaiVanBanId) {
          $scope.loaiVanBanCrud.openUpdateForm(loaiVanBanId, function(data) {$scope.oldLoaiVanBan = data}, 'md');
        }

        function submitUpdateForm(loaiVanBanId, oldLoaiVanBan) {
          $scope.loaiVanBanCrud.updateModel(oldLoaiVanBan.id, oldLoaiVanBan, submitUpdateFormComplete);
          function submitUpdateFormComplete() {
            $scope.loaiVanBanCrud.getList(""); $scope.loaiVanBanCrud.dismissCreateForm()
          }
        }
    }
})();
