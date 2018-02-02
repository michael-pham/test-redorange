(function() {
    'use strict';

    angular
        .module('app.coQuanBanHanhs')
        .controller('CoQuanBanHanhs', CoQuanBanHanhs);

    CoQuanBanHanhs.$inject = ['$scope', 'crud', 'logger', 'coQuanBanHanhModel', '$modal'];
    /* @ngInject */
    function CoQuanBanHanhs($scope, crud, logger, coQuanBanHanhModel, $modal) {
        /*jshint validthis: true */
        $scope.coQuanBanHanhModel = coQuanBanHanhModel.init($scope);
        $scope.coQuanBanHanhCrud = crud.make($scope.coQuanBanHanhModel);
        $scope.coQuanBanHanhCrud.getList("");
        $scope.openUpdateForm = openUpdateForm;
        $scope.submitUpdateForm = submitUpdateForm;

        function openUpdateForm(coQuanBanHanhId) {
          $scope.coQuanBanHanhCrud.openUpdateForm(coQuanBanHanhId, function(data) {$scope.oldCoQuanBanHanh = data}, 'md');
        }

        function submitUpdateForm(coQuanBanHanhId, oldCoQuanBanHanh) {
          $scope.coQuanBanHanhCrud.updateModel(oldCoQuanBanHanh.id, oldCoQuanBanHanh, submitUpdateFormComplete);
          function submitUpdateFormComplete() {
            $scope.coQuanBanHanhCrud.getList(""); $scope.coQuanBanHanhCrud.dismissCreateForm()
          }
        }
    }
})();
