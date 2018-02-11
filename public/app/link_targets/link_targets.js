(function() {
    'use strict';

    angular
        .module('app.linkTargets')
        .controller('LinkTargets', LinkTargets);

    linkTargets.$inject = ['$scope', 'crud', 'logger', 'linkTargetModel', '$modal', 'utils'];
    /* @ngInject */
    function linkTargets($scope, crud, logger, linkTargetModel, $modal, utils) {
        /*jshint validthis: true */
        $scope.errMsg = "";
        $scope.linkTargetModel = linkTargetModel.init($scope);
        $scope.linkTargetCrud = crud.make($scope.linkTargetModel);
        $scope.linkTargetCrud.getList("?" + $.param($scope.linkTargetModel.getList.param));
        $scope.filelinkTarget = {};
        $scope.openUpdateForm = openUpdateForm;
        $scope.submitCreateForm = submitCreateForm;
        $scope.submitUpdateForm = submitUpdateForm;

        function openUpdateForm(linkTargetId) {
          $scope.errMsg = "";
          $scope.linkTargetCrud.openUpdateForm(linkTargetId, function(data) {$scope.oldlinkTarget = data}, 'lg');
        }

        function submitCreateForm(newlinkTarget, pdfFile) {
          if (!pdfFile) {
            $scope.errMsg = "File văn bản là trường bắt buộc."
          } else {
            utils.uploadFile(pdfFile, function(successResponse) {
              newlinkTarget.file_uri = successResponse.data.file.file_uri;
              newlinkTarget.file_id =  successResponse.data.file.file_id;
              $scope.linkTargetCrud.submitCreateForm(newlinkTarget, '');
            });
          }
        }

        function submitUpdateForm(linkTargetId, oldlinkTarget) {
          $scope.linkTargetCrud.updateModel(oldlinkTarget.id, oldlinkTarget, submitUpdateFormComplete);
          function submitUpdateFormComplete() {
            $scope.linkTargetCrud.getList(""); $scope.linkTargetCrud.dismissCreateForm()
          }
        }
    }
})();
