(function() {
    'use strict';

    angular
        .module('app.pageSizes')
        .controller('PageSizes', PageSizes);

    PageSizes.$inject = ['$scope', 'crud', 'logger', 'pageSizeModel', '$modal'];
    /* @ngInject */
    function PageSizes($scope, crud, logger, pageSizeModel, $modal) {
        /*jshint validthis: true */
        $scope.pageSizeModel = pageSizeModel.init($scope);
        $scope.pageSizeCrud = crud.make($scope.pageSizeModel);
        $scope.pageSizeCrud.getList("");
        $scope.openUpdateForm = openUpdateForm;
        $scope.submitUpdateForm = submitUpdateForm;

        function openUpdateForm(pageSizeId) {
          $scope.pageSizeCrud.openUpdateForm(pageSizeId, function(data) {$scope.oldPageSize = data}, 'md');
        }

        function submitUpdateForm(pageSizeId, oldPageSize) {
          $scope.pageSizeCrud.updateModel(oldPageSize.id, oldPageSize, submitUpdateFormComplete);
          function submitUpdateFormComplete() {
            $scope.pageSizeCrud.getList(""); $scope.pageSizeCrud.dismissCreateForm()
          }
        }
    }
})();
