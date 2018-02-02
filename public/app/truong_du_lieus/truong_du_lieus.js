(function() {
    'use strict';

    angular
        .module('app.truongDuLieus')
        .controller('TruongDuLieus', TruongDuLieus);

    TruongDuLieus.$inject = ['$scope', 'crud', 'logger', 'truongDuLieuModel', '$modal'];
    /* @ngInject */
    function TruongDuLieus($scope, crud, logger, truongDuLieuModel, $modal) {
        /*jshint validthis: true */
        $scope.truongDuLieuModel = truongDuLieuModel.init($scope);
        $scope.truongDuLieuCrud = crud.make($scope.truongDuLieuModel);
        $scope.truongDuLieuCrud.getList("");
        $scope.openUpdateForm = openUpdateForm;
        $scope.submitUpdateForm = submitUpdateForm;

        function openUpdateForm(truongDuLieuId) {
          $scope.truongDuLieuCrud.openUpdateForm(truongDuLieuId, function(data) {$scope.oldTruongDuLieu = data}, 'md');
        }

        function submitUpdateForm(truongDuLieuId, oldTruongDuLieu) {
          $scope.truongDuLieuCrud.updateModel(oldTruongDuLieu.id, oldTruongDuLieu, submitUpdateFormComplete);
          function submitUpdateFormComplete() {
            $scope.truongDuLieuCrud.getList(""); $scope.truongDuLieuCrud.dismissCreateForm()
          }
        }
    }
})();
