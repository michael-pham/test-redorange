(function() {
    'use strict';

    angular
        .module('app.modelSpecifiers')
        .controller('ModelSpecifiers', ModelSpecifiers);

    ModelSpecifiers.$inject = ['$scope', 'crud', 'logger', 'modelSpecifierModel', '$modal'];
    /* @ngInject */
    function ModelSpecifiers($scope, crud, logger, modelSpecifierModel, $modal) {
        /*jshint validthis: true */
        $scope.modelSpecifierModel = modelSpecifierModel.init($scope);
        $scope.modelSpecifierCrud = crud.make($scope.modelSpecifierModel);
        $scope.modelSpecifierCrud.getList("");
        $scope.openUpdateForm = openUpdateForm;
        $scope.submitUpdateForm = submitUpdateForm;

        function openUpdateForm(modelSpecifierId) {
          $scope.modelSpecifierCrud.openUpdateForm(modelSpecifierId, function(data) {$scope.oldModelSpecifier = data}, 'md');
        }

        function submitUpdateForm(modelSpecifierId, oldModelSpecifier) {
          $scope.modelSpecifierCrud.updateModel(oldModelSpecifier.id, oldModelSpecifier, submitUpdateFormComplete);
          function submitUpdateFormComplete() {
            $scope.modelSpecifierCrud.getList(""); $scope.modelSpecifierCrud.dismissCreateForm()
          }
        }
    }
})();
