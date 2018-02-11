(function() {
    'use strict';

    angular
        .module('app.tinhTrangBaiViets')
        .controller('TinhTrangBaiViets', TinhTrangBaiViets);

    tinhTrangBaiViets.$inject = ['$scope', 'crud', 'logger', 'tinhTrangBaiVietModel', '$modal', 'utils'];
    /* @ngInject */
    function tinhTrangBaiViets($scope, crud, logger, tinhTrangBaiVietModel, $modal, utils) {
        /*jshint validthis: true */
        $scope.errMsg = "";
        $scope.tinhTrangBaiVietModel = tinhTrangBaiVietModel.init($scope);
        $scope.tinhTrangBaiVietCrud = crud.make($scope.tinhTrangBaiVietModel);
        $scope.tinhTrangBaiVietCrud.getList("?" + $.param($scope.tinhTrangBaiVietModel.getList.param));
        $scope.filetinhTrangBaiViet = {};
        $scope.openUpdateForm = openUpdateForm;
        $scope.submitCreateForm = submitCreateForm;
        $scope.submitUpdateForm = submitUpdateForm;

        function openUpdateForm(tinhTrangBaiVietId) {
          $scope.errMsg = "";
          $scope.tinhTrangBaiVietCrud.openUpdateForm(tinhTrangBaiVietId, function(data) {$scope.oldtinhTrangBaiViet = data}, 'lg');
        }

        function submitCreateForm(newtinhTrangBaiViet, pdfFile) {
          if (!pdfFile) {
            $scope.errMsg = "File văn bản là trường bắt buộc."
          } else {
            utils.uploadFile(pdfFile, function(successResponse) {
              newtinhTrangBaiViet.file_uri = successResponse.data.file.file_uri;
              newtinhTrangBaiViet.file_id =  successResponse.data.file.file_id;
              $scope.tinhTrangBaiVietCrud.submitCreateForm(newtinhTrangBaiViet, '');
            });
          }
        }

        function submitUpdateForm(tinhTrangBaiVietId, oldtinhTrangBaiViet) {
          $scope.tinhTrangBaiVietCrud.updateModel(oldtinhTrangBaiViet.id, oldtinhTrangBaiViet, submitUpdateFormComplete);
          function submitUpdateFormComplete() {
            $scope.tinhTrangBaiVietCrud.getList(""); $scope.tinhTrangBaiVietCrud.dismissCreateForm()
          }
        }
    }
})();
