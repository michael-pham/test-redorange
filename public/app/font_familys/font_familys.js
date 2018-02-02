(function() {
    'use strict';

    angular
        .module('app.fontFamilys')
        .controller('FontFamilys', FontFamilys);

    FontFamilys.$inject = ['$scope', 'crud', 'logger', 'fontFamilyModel', '$modal'];
    /* @ngInject */
    function FontFamilys($scope, crud, logger, fontFamilyModel, $modal) {
        /*jshint validthis: true */
        $scope.fontFamilyModel = fontFamilyModel.init($scope);
        $scope.fontFamilyCrud = crud.make($scope.fontFamilyModel);
        $scope.fontFamilyCrud.getList("");
        $scope.openUpdateForm = openUpdateForm;
        $scope.submitUpdateForm = submitUpdateForm;

        function openUpdateForm(fontFamilyId) {
          $scope.fontFamilyCrud.openUpdateForm(fontFamilyId, function(data) {$scope.oldFontFamily = data}, 'md');
        }

        function submitUpdateForm(fontFamilyId, oldFontFamily) {
          $scope.fontFamilyCrud.updateModel(oldFontFamily.id, oldFontFamily, submitUpdateFormComplete);
          function submitUpdateFormComplete() {
            $scope.fontFamilyCrud.getList(""); $scope.fontFamilyCrud.dismissCreateForm()
          }
        }
    }
})();
