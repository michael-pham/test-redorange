(function() {
    'use strict';

    angular
        .module('app.{{uncapitalised_model_name}}s')
        .controller('{{model_name}}s', {{model_name}}s);

    {{uncapitalised_model_name}}s.$inject = ['$scope', 'crud', 'logger', '{{uncapitalised_model_name}}Model', '$modal', 'utils'];
    /* @ngInject */
    function {{uncapitalised_model_name}}s($scope, crud, logger, {{uncapitalised_model_name}}Model, $modal, utils) {
        /*jshint validthis: true */
        $scope.errMsg = "";
        $scope.{{uncapitalised_model_name}}Model = {{uncapitalised_model_name}}Model.init($scope);
        $scope.{{uncapitalised_model_name}}Crud = crud.make($scope.{{uncapitalised_model_name}}Model);
        $scope.{{uncapitalised_model_name}}Crud.getList("?" + $.param($scope.{{uncapitalised_model_name}}Model.getList.param));
        $scope.file{{uncapitalised_model_name}} = {};
        $scope.openUpdateForm = openUpdateForm;
        $scope.submitCreateForm = submitCreateForm;
        $scope.submitUpdateForm = submitUpdateForm;

        function openUpdateForm({{uncapitalised_model_name}}Id) {
          $scope.errMsg = "";
          $scope.{{uncapitalised_model_name}}Crud.openUpdateForm({{uncapitalised_model_name}}Id, function(data) {$scope.old{{uncapitalised_model_name}} = data}, 'lg');
        }

        function submitCreateForm(new{{uncapitalised_model_name}}, pdfFile) {
          if (!pdfFile) {
            $scope.errMsg = "File văn bản là trường bắt buộc."
          } else {
            utils.uploadFile(pdfFile, function(successResponse) {
              new{{uncapitalised_model_name}}.file_uri = successResponse.data.file.file_uri;
              new{{uncapitalised_model_name}}.file_id =  successResponse.data.file.file_id;
              $scope.{{uncapitalised_model_name}}Crud.submitCreateForm(new{{uncapitalised_model_name}}, '');
            });
          }
        }

        function submitUpdateForm({{uncapitalised_model_name}}Id, old{{uncapitalised_model_name}}) {
          $scope.{{uncapitalised_model_name}}Crud.updateModel(old{{uncapitalised_model_name}}.id, old{{uncapitalised_model_name}}, submitUpdateFormComplete);
          function submitUpdateFormComplete() {
            $scope.{{uncapitalised_model_name}}Crud.getList(""); $scope.{{uncapitalised_model_name}}Crud.dismissCreateForm()
          }
        }
    }
})();
