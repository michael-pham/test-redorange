(function() {
    'use strict';

    angular
        .module('app.binhLuans')
        .controller('BinhLuans', BinhLuans);

    binhLuans.$inject = ['$scope', 'crud', 'logger', 'binhLuanModel', '$modal', 'utils'];
    /* @ngInject */
    function binhLuans($scope, crud, logger, binhLuanModel, $modal, utils) {
        /*jshint validthis: true */
        $scope.errMsg = "";
        $scope.binhLuanModel = binhLuanModel.init($scope);
        $scope.binhLuanCrud = crud.make($scope.binhLuanModel);
        $scope.binhLuanCrud.getList("?" + $.param($scope.binhLuanModel.getList.param));
        $scope.filebinhLuan = {};
        $scope.openUpdateForm = openUpdateForm;
        $scope.submitCreateForm = submitCreateForm;
        $scope.submitUpdateForm = submitUpdateForm;

        function openUpdateForm(binhLuanId) {
          $scope.errMsg = "";
          $scope.binhLuanCrud.openUpdateForm(binhLuanId, function(data) {$scope.oldbinhLuan = data}, 'lg');
        }

        function submitCreateForm(newbinhLuan, pdfFile) {
          if (!pdfFile) {
            $scope.errMsg = "File văn bản là trường bắt buộc."
          } else {
            utils.uploadFile(pdfFile, function(successResponse) {
              newbinhLuan.file_uri = successResponse.data.file.file_uri;
              newbinhLuan.file_id =  successResponse.data.file.file_id;
              $scope.binhLuanCrud.submitCreateForm(newbinhLuan, '');
            });
          }
        }

        function submitUpdateForm(binhLuanId, oldbinhLuan) {
          $scope.binhLuanCrud.updateModel(oldbinhLuan.id, oldbinhLuan, submitUpdateFormComplete);
          function submitUpdateFormComplete() {
            $scope.binhLuanCrud.getList(""); $scope.binhLuanCrud.dismissCreateForm()
          }
        }
    }
})();
