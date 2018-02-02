(function() {
    'use strict';

    angular
        .module('app.mayIns')
        .controller('MayIns', MayIns);

    MayIns.$inject = ['$scope', 'crud', 'logger', 'mayInModel', '$modal'];
    /* @ngInject */
    function MayIns($scope, crud, logger, mayInModel, $modal) {
        /*jshint validthis: true */
        $scope.mayInModel = mayInModel.init($scope);
        $scope.mayInCrud = crud.make($scope.mayInModel);
        $scope.mayInCrud.getList("");
        $scope.openUpdateForm = openUpdateForm;
        $scope.submitUpdateForm = submitUpdateForm;

        function openUpdateForm(mayInId) {
          $scope.mayInCrud.openUpdateForm(mayInId, function(data) {$scope.oldMayIn = data}, 'md');
        }

        function submitUpdateForm(mayInId, oldMayIn) {
          $scope.mayInCrud.updateModel(oldMayIn.id, oldMayIn, submitUpdateFormComplete);
          function submitUpdateFormComplete() {
            $scope.mayInCrud.getList(""); $scope.mayInCrud.dismissCreateForm()
          }
        }
    }
})();
