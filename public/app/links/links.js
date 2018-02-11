(function() {
    'use strict';

    angular
        .module('app.links')
        .controller('Links', Links);

    links.$inject = ['$scope', 'crud', 'logger', 'linkModel', '$modal', 'utils'];
    /* @ngInject */
    function links($scope, crud, logger, linkModel, $modal, utils) {
        /*jshint validthis: true */
        $scope.errMsg = "";
        $scope.linkModel = linkModel.init($scope);
        $scope.linkCrud = crud.make($scope.linkModel);
        $scope.linkCrud.getList("?" + $.param($scope.linkModel.getList.param));
        $scope.filelink = {};
        $scope.openUpdateForm = openUpdateForm;
        $scope.submitCreateForm = submitCreateForm;
        $scope.submitUpdateForm = submitUpdateForm;

        function openUpdateForm(linkId) {
          $scope.errMsg = "";
          $scope.linkCrud.openUpdateForm(linkId, function(data) {$scope.oldlink = data}, 'lg');
        }

        function submitCreateForm(newlink, pdfFile) {
          if (!pdfFile) {
            $scope.errMsg = "File văn bản là trường bắt buộc."
          } else {
            utils.uploadFile(pdfFile, function(successResponse) {
              newlink.file_uri = successResponse.data.file.file_uri;
              newlink.file_id =  successResponse.data.file.file_id;
              $scope.linkCrud.submitCreateForm(newlink, '');
            });
          }
        }

        function submitUpdateForm(linkId, oldlink) {
          $scope.linkCrud.updateModel(oldlink.id, oldlink, submitUpdateFormComplete);
          function submitUpdateFormComplete() {
            $scope.linkCrud.getList(""); $scope.linkCrud.dismissCreateForm()
          }
        }
    }
})();
