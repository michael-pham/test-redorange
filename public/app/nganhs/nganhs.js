(function() {
    'use strict';

    angular
        .module('app.nganhs')
        .controller('Nganhs', Nganhs);

    Nganhs.$inject = ['$scope', 'crud', 'logger', 'nganhModel', '$modal'];
    /* @ngInject */
    function Nganhs($scope, crud, logger, nganhModel, $modal) {
        /*jshint validthis: true */
        $scope.nganhModel = nganhModel.init($scope);
        $scope.nganhCrud = crud.make($scope.nganhModel);
        $scope.nganhCrud.getList("");
        $scope.openUpdateForm = openUpdateForm;
        $scope.submitUpdateForm = submitUpdateForm;


        function openUpdateForm(nganhId) {
          $scope.nganhCrud.openUpdateForm(nganhId, function(data) {$scope.oldNganh = data}, 'md');
        }

        function submitUpdateForm(nganhId, oldNganh) {
          $scope.nganhCrud.updateModel(oldNganh.id, oldNganh, submitUpdateFormComplete);
          function submitUpdateFormComplete() {
            $scope.nganhCrud.getList(""); $scope.nganhCrud.dismissCreateForm()
          }
        }
    }
})();
