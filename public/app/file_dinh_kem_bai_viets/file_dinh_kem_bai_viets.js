(function() {
    'use strict';

    angular
        .module('app.fileDinhKemBaiViets')
        .controller('FileDinhKemBaiViets', FileDinhKemBaiViets);

    FileDinhKemBaiViets.$inject = ['$scope', 'crud', 'logger', 'fileDinhKemBaiVietModel', '$modal', 'utils'];
    /* @ngInject */
    function FileDinhKemBaiViets($scope, crud, logger, fileDinhKemBaiVietModel, $modal, utils) {
        /*jshint validthis: true */
        $scope.errMsg = "";
        $scope.fileDinhKemBaiVietModel = fileDinhKemBaiVietModel.init($scope);
        $scope.fileDinhKemBaiVietCrud = crud.make($scope.fileDinhKemBaiVietModel);
        $scope.fileDinhKemBaiVietCrud.getList("?" + $.param($scope.fileDinhKemBaiVietModel.getList.param));
        $scope.filefileDinhKemBaiViet = {};
        $scope.openUpdateForm = openUpdateForm;
        $scope.submitCreateForm = submitCreateForm;
        $scope.submitUpdateForm = submitUpdateForm;

        function openUpdateForm(fileDinhKemBaiVietId) {
          $scope.errMsg = "";
          $scope.fileDinhKemBaiVietCrud.openUpdateForm(fileDinhKemBaiVietId, function(data) {$scope.oldfileDinhKemBaiViet = data}, 'lg');
        }

        function submitCreateForm(newfileDinhKemBaiViet, pdfFile) {
          if (!pdfFile) {
            $scope.errMsg = "File văn bản là trường bắt buộc."
          } else {
            utils.uploadFile(pdfFile, function(successResponse) {
              newfileDinhKemBaiViet.file_uri = successResponse.data.file.file_uri;
              newfileDinhKemBaiViet.file_id =  successResponse.data.file.file_id;
              $scope.fileDinhKemBaiVietCrud.submitCreateForm(newfileDinhKemBaiViet, '');
            });
          }
        }

        function submitUpdateForm(fileDinhKemBaiVietId, oldfileDinhKemBaiViet) {
          $scope.fileDinhKemBaiVietCrud.updateModel(oldfileDinhKemBaiViet.id, oldfileDinhKemBaiViet, submitUpdateFormComplete);
          function submitUpdateFormComplete() {
            $scope.fileDinhKemBaiVietCrud.getList(""); $scope.fileDinhKemBaiVietCrud.dismissCreateForm()
          }
        }
    }
})();
