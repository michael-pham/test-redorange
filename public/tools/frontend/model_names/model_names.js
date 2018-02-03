(function() {
    'use strict';

    angular
        .module('app.modelNames')
        .controller('ModelNames', ModelNames);

    ModelNames.$inject = ['$scope', 'crud', 'logger', 'modelNameModel', '$modal'];
    /* @ngInject */
    function ModelNames($scope, crud, logger, modelNameModel, $modal) {
        /*jshint validthis: true */
        $scope.modelNameModel = modelNameModel.init($scope);
        $scope.modelNameCrud = crud.make($scope.modelNameModel);
        $scope.modelNameCrud.getList("");
        $scope.openUpdateForm = openUpdateForm;
        $scope.submitUpdateForm = submitUpdateForm;

        function openUpdateForm(modelNameId) {
          $scope.modelNameCrud.openUpdateForm(modelNameId, function(data) {$scope.oldModelName = data}, 'md');
        }

        function submitUpdateForm(modelNameId, oldModelName) {
          $scope.modelNameCrud.updateModel(oldModelName.id, oldModelName, submitUpdateFormComplete);
          function submitUpdateFormComplete() {
            $scope.modelNameCrud.getList(""); $scope.modelNameCrud.dismissCreateForm()
          }
        }
    }
})();
