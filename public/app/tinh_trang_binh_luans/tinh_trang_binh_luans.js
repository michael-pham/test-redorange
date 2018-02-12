(function() {
    'use strict';

    angular
        .module('app.tinhTrangBinhLuans')
        .controller('TinhTrangBinhLuans', TinhTrangBinhLuans);

    TinhTrangBinhLuans.$inject = ['$scope', 'crud', 'logger', 'tinhTrangBinhLuanModel', '$modal', 'utils'];
    /* @ngInject */
    function TinhTrangBinhLuans($scope, crud, logger, tinhTrangBinhLuanModel, $modal, utils) {
        /*jshint validthis: true */
        $scope.errMsg = "";
        $scope.tinhTrangBinhLuanModel = tinhTrangBinhLuanModel.init($scope);
        $scope.tinhTrangBinhLuanCrud = crud.make($scope.tinhTrangBinhLuanModel);
        $scope.tinhTrangBinhLuanCrud.getList("?" + $.param($scope.tinhTrangBinhLuanModel.getList.param));
        $scope.filetinhTrangBinhLuan = {};
        $scope.openUpdateForm = openUpdateForm;
        $scope.submitCreateForm = submitCreateForm;
        $scope.submitUpdateForm = submitUpdateForm;

        function openUpdateForm(tinhTrangBinhLuanId) {
          $scope.errMsg = "";
          $scope.tinhTrangBinhLuanCrud.openUpdateForm(tinhTrangBinhLuanId, function(data) {$scope.oldtinhTrangBinhLuan = data}, 'lg');
        }

        function submitCreateForm(newtinhTrangBinhLuan, pdfFile) {
          if (!pdfFile) {
            $scope.errMsg = "File văn bản là trường bắt buộc."
          } else {
            utils.uploadFile(pdfFile, function(successResponse) {
              newtinhTrangBinhLuan.file_uri = successResponse.data.file.file_uri;
              newtinhTrangBinhLuan.file_id =  successResponse.data.file.file_id;
              $scope.tinhTrangBinhLuanCrud.submitCreateForm(newtinhTrangBinhLuan, '');
            });
          }
        }

        function submitUpdateForm(tinhTrangBinhLuanId, oldtinhTrangBinhLuan) {
          $scope.tinhTrangBinhLuanCrud.updateModel(oldtinhTrangBinhLuan.id, oldtinhTrangBinhLuan, submitUpdateFormComplete);
          function submitUpdateFormComplete() {
            $scope.tinhTrangBinhLuanCrud.getList(""); $scope.tinhTrangBinhLuanCrud.dismissCreateForm()
          }
        }
    }
})();
