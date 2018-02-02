(function() {
    'use strict';

    angular
        .module('app.vanBans')
        .controller('VanBans', VanBans);

    VanBans.$inject = ['$scope', 'crud', 'logger', 'vanBanModel', '$modal', 'utils'];
    /* @ngInject */
    function VanBans($scope, crud, logger, vanBanModel, $modal, utils) {
        /*jshint validthis: true */
        $scope.errMsg = "";
        $scope.vanBanModel = vanBanModel.init($scope);
        $scope.vanBanCrud = crud.make($scope.vanBanModel);
        $scope.vanBanCrud.getList("?" + $.param($scope.vanBanModel.getList.param));
        $scope.fileVanBan = {};
        $scope.openUpdateForm = openUpdateForm;
        $scope.submitCreateForm = submitCreateForm;
        $scope.submitUpdateForm = submitUpdateForm;

        function openUpdateForm(vanBanId) {
          $scope.errMsg = "";
          $scope.vanBanCrud.openUpdateForm(vanBanId, function(data) {$scope.oldVanBan = data}, 'lg');
        }

        function submitCreateForm(newVanBan, pdfFile) {
          if (!pdfFile) {
            $scope.errMsg = "File văn bản là trường bắt buộc."
          } else {
            utils.uploadFile(pdfFile, function(successResponse) {
              newVanBan.file_uri = successResponse.data.file.file_uri;
              newVanBan.file_id =  successResponse.data.file.file_id;
              $scope.vanBanCrud.submitCreateForm(newVanBan, '');
            });
          }
        }

        function submitUpdateForm(vanBanId, oldVanBan) {
          $scope.vanBanCrud.updateModel(oldVanBan.id, oldVanBan, submitUpdateFormComplete);
          function submitUpdateFormComplete() {
            $scope.vanBanCrud.getList(""); $scope.vanBanCrud.dismissCreateForm()
          }
        }
    }
})();
