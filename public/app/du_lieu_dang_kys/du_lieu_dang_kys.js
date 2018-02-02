(function() {
    'use strict';

    angular
        .module('app.duLieuDangKys')
        .controller('DuLieuDangKys', DuLieuDangKys);

    DuLieuDangKys.$inject = ['$scope', 'crud', 'logger', 'duLieuDangKyModel',
      '$modal', 'truongDuLieuModel', 'utils'];

    /* @ngInject */
    function DuLieuDangKys($scope, crud, logger, duLieuDangKyModel, $modal, truongDuLieuModel, utils) {
        /*jshint validthis: true */
        $scope.duLieuDangKyModel = duLieuDangKyModel.init($scope);
        $scope.duLieuDangKyCrud = crud.make($scope.duLieuDangKyModel);
        $scope.duLieuDangKyCrud.getList("?includes[]=user&includes[]=bieuMauChungTu");
        $scope.openUpdateForm = openUpdateForm;
        $scope.submitUpdateForm = submitUpdateForm;
        $scope.submitCreateForm = submitCreateForm;

        $scope.truongDuLieuModel = truongDuLieuModel.init($scope);
        $scope.truongDuLieuCrud = crud.make($scope.truongDuLieuModel);

        $scope.getTruongDuLieus = function(bieuMauChungTuId) {
          var params = utils.makeParams.filters([['bieu_mau_chung_tu_id', bieuMauChungTuId, 'eq']]);
          $scope.truongDuLieuCrud.getList("?" + params);
        }

        function submitCreateForm(newDuLieuDangKy) {
          var temp = utils.cloneObj(newDuLieuDangKy);
          temp.json_data = JSON.stringify(temp.json_data);
          $scope.duLieuDangKyCrud.submitCreateFormV2(temp, function(result) {
            $scope.duLieuDangKyCrud.getList("?includes[]=user&includes[]=bieuMauChungTu");
          });
        }

        function openUpdateForm(duLieuDangKyId) {
          $scope.duLieuDangKyCrud.openUpdateForm(duLieuDangKyId, function(data) {$scope.oldDuLieuDangKy = data}, 'md');
        }

        function submitUpdateForm(duLieuDangKyId, oldDuLieuDangKy) {
          $scope.duLieuDangKyCrud.updateModel(oldDuLieuDangKy.id, oldDuLieuDangKy, submitUpdateFormComplete);
          function submitUpdateFormComplete() {
            $scope.duLieuDangKyCrud.getList(""); $scope.duLieuDangKyCrud.dismissCreateForm()
          }
        }
    }
})();
