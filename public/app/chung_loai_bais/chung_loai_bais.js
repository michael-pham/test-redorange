(function() {
    'use strict';

    angular
        .module('app.chungLoaiBais')
        .controller('ChungLoaiBais', ChungLoaiBais);

    chungLoaiBais.$inject = ['$scope', 'crud', 'logger', 'chungLoaiBaiModel', '$modal', 'utils'];
    /* @ngInject */
    function chungLoaiBais($scope, crud, logger, chungLoaiBaiModel, $modal, utils) {
        /*jshint validthis: true */
        $scope.errMsg = "";
        $scope.chungLoaiBaiModel = chungLoaiBaiModel.init($scope);
        $scope.chungLoaiBaiCrud = crud.make($scope.chungLoaiBaiModel);
        $scope.chungLoaiBaiCrud.getList("?" + $.param($scope.chungLoaiBaiModel.getList.param));
        $scope.filechungLoaiBai = {};
        $scope.openUpdateForm = openUpdateForm;
        $scope.submitCreateForm = submitCreateForm;
        $scope.submitUpdateForm = submitUpdateForm;

        function openUpdateForm(chungLoaiBaiId) {
          $scope.errMsg = "";
          $scope.chungLoaiBaiCrud.openUpdateForm(chungLoaiBaiId, function(data) {$scope.oldchungLoaiBai = data}, 'lg');
        }

        function submitCreateForm(newchungLoaiBai, pdfFile) {
          if (!pdfFile) {
            $scope.errMsg = "File văn bản là trường bắt buộc."
          } else {
            utils.uploadFile(pdfFile, function(successResponse) {
              newchungLoaiBai.file_uri = successResponse.data.file.file_uri;
              newchungLoaiBai.file_id =  successResponse.data.file.file_id;
              $scope.chungLoaiBaiCrud.submitCreateForm(newchungLoaiBai, '');
            });
          }
        }

        function submitUpdateForm(chungLoaiBaiId, oldchungLoaiBai) {
          $scope.chungLoaiBaiCrud.updateModel(oldchungLoaiBai.id, oldchungLoaiBai, submitUpdateFormComplete);
          function submitUpdateFormComplete() {
            $scope.chungLoaiBaiCrud.getList(""); $scope.chungLoaiBaiCrud.dismissCreateForm()
          }
        }
    }
})();
