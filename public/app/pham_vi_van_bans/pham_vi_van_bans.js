(function() {
    'use strict';

    angular
        .module('app.phamViVanBans')
        .controller('PhamViVanBans', PhamViVanBans);

    PhamViVanBans.$inject = ['$scope', 'crud', 'logger', 'phamViVanBanModel', '$modal'];
    /* @ngInject */
    function PhamViVanBans($scope, crud, logger, phamViVanBanModel, $modal) {
        /*jshint validthis: true */
        $scope.phamViVanBanModel = phamViVanBanModel.init($scope);
        $scope.phamViVanBanCrud = crud.make($scope.phamViVanBanModel);
        $scope.phamViVanBanCrud.getList("");
        $scope.openUpdateForm = openUpdateForm;
        $scope.submitUpdateForm = submitUpdateForm;

        function openUpdateForm(phamViVanBanId) {
          $scope.phamViVanBanCrud.openUpdateForm(phamViVanBanId, function(data) {$scope.oldPhamViVanBan = data}, 'md');
        }

        function submitUpdateForm(phamViVanBanId, oldPhamViVanBan) {
          $scope.phamViVanBanCrud.updateModel(oldPhamViVanBan.id, oldPhamViVanBan, submitUpdateFormComplete);
          function submitUpdateFormComplete() {
            $scope.phamViVanBanCrud.getList(""); $scope.phamViVanBanCrud.dismissCreateForm()
          }
        }
    }
})();
