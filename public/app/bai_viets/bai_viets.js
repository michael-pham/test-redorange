(function() {
    'use strict';

    angular
        .module('app.baiViets')
        .controller('BaiViets', BaiViets);

    BaiViets.$inject = ['$scope', 'crud', 'logger', 'baiVietModel', '$modal', 'utils'];
    /* @ngInject */
    function BaiViets($scope, crud, logger, baiVietModel, $modal, utils) {
        /*jshint validthis: true */
        $scope.errMsg = "";
        $scope.baiVietModel = baiVietModel.init($scope);
        $scope.baiVietCrud = crud.make($scope.baiVietModel);
        $scope.baiVietCrud.getList("?" + $.param($scope.baiVietModel.getList.param));
        $scope.filebaiViet = {};
        $scope.openUpdateForm = openUpdateForm;
        $scope.submitCreateForm = submitCreateForm;
        $scope.submitUpdateForm = submitUpdateForm;

        function openUpdateForm(baiVietId) {
          $scope.errMsg = "";
          $scope.baiVietCrud.openUpdateForm(baiVietId, function(data) {$scope.oldbaiViet = data}, 'lg');
        }

        function submitCreateForm(newbaiViet, pdfFile) {
          if (!pdfFile) {
            $scope.errMsg = "File văn bản là trường bắt buộc."
          } else {
            utils.uploadFile(pdfFile, function(successResponse) {
              newbaiViet.file_uri = successResponse.data.file.file_uri;
              newbaiViet.file_id =  successResponse.data.file.file_id;
              $scope.baiVietCrud.submitCreateForm(newbaiViet, '');
            });
          }
        }

        function submitUpdateForm(baiVietId, oldbaiViet) {
          $scope.baiVietCrud.updateModel(oldbaiViet.id, oldbaiViet, submitUpdateFormComplete);
          function submitUpdateFormComplete() {
            $scope.baiVietCrud.getList(""); $scope.baiVietCrud.dismissCreateForm()
          }
        }
    }
})();
