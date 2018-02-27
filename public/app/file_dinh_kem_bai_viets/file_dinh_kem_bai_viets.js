(function() {
  'use strict';

  angular
    .module('app.fileDinhKemBaiViets')
    .controller('FileDinhKemBaiViets', FileDinhKemBaiViets)
    .controller('FileDinhKemBaiVietDetails', FileDinhKemBaiVietDetails);

  FileDinhKemBaiViets.$inject = ['$scope', 'logger', 'utils', 'fileDinhKemBaiVietService'];

  /* @ngInject */
  function FileDinhKemBaiViets($scope, logger, utils, fileDinhKemBaiVietService) {

    /* Get fileDinhKemBaiViets */
    $scope.initFileDinhKemBaiVietParams = initFileDinhKemBaiVietParams;
    $scope.getFileDinhKemBaiViets = getFileDinhKemBaiViets;
    $scope.getFileDinhKemBaiVietsWithInitialParams = getFileDinhKemBaiVietsWithInitialParams;
    $scope.getLeftMostPage = utils.makePagingNavigator.getLeftMostPage;
    $scope.getRightMostPage = utils.makePagingNavigator.getRightMostPage;

    /* Create fileDinhKemBaiViets */
    $scope.openFileDinhKemBaiVietCreateModal = openFileDinhKemBaiVietCreateModal;
    $scope.closeFileDinhKemBaiVietCreateModal = closeFileDinhKemBaiVietCreateModal;
    $scope.createFileDinhKemBaiViet = createFileDinhKemBaiViet;

    /* Update fileDinhKemBaiViets */
    $scope.openFileDinhKemBaiVietUpdateModal = openFileDinhKemBaiVietUpdateModal;
    $scope.closeFileDinhKemBaiVietUpdateModal = closeFileDinhKemBaiVietUpdateModal;
    $scope.updateFileDinhKemBaiViet = updateFileDinhKemBaiViet;

    /* Delete fileDinhKemBaiViets */
    $scope.deleteFileDinhKemBaiViet = deleteFileDinhKemBaiViet;

    $scope.getFileDinhKemBaiVietsWithInitialParams();

    //////////////////////////////////////////////////////////////////////////
    function initFileDinhKemBaiVietParams() {
      $scope.fileDinhKemBaiVietParams = fileDinhKemBaiVietService.initFileDinhKemBaiVietParams();
    }

    function getFileDinhKemBaiViets() {
      fileDinhKemBaiVietService.getFileDinhKemBaiViets($scope.fileDinhKemBaiVietParams).then(function(response) {
        $scope.fileDinhKemBaiViets = response.data.fileDinhKemBaiViets;
      });
    }

    function getFileDinhKemBaiVietsWithInitialParams() {
      $scope.initFileDinhKemBaiVietParams();
      $scope.getFileDinhKemBaiViets();
    }

    function openFileDinhKemBaiVietCreateModal() {
      fileDinhKemBaiVietService.openFileDinhKemBaiVietCreateModal($scope);
    }

    function closeFileDinhKemBaiVietCreateModal() {
      $scope.fileDinhKemBaiVietCreateModal.dismiss();
    }

    function createFileDinhKemBaiViet(newFileDinhKemBaiViet) {
      fileDinhKemBaiVietService.createFileDinhKemBaiViet(newFileDinhKemBaiViet).then(function(response) {
        $scope.fileDinhKemBaiVietCreateModal.dismiss();
        $scope.getFileDinhKemBaiViets();
      });
    }

    function openFileDinhKemBaiVietUpdateModal(fileDinhKemBaiVietId) {
      fileDinhKemBaiVietService.openFileDinhKemBaiVietUpdateModal($scope, fileDinhKemBaiVietId);
    }

    function closeFileDinhKemBaiVietUpdateModal() {
      $scope.fileDinhKemBaiVietUpdateModal.dismiss();
    }

    function updateFileDinhKemBaiViet() {
      fileDinhKemBaiVietService.updateFileDinhKemBaiViet($scope.oldFileDinhKemBaiViet)
        .then(function(response) {
        $scope.getFileDinhKemBaiViets();
        $scope.closeFileDinhKemBaiVietUpdateModal();
      });
    }

    function deleteFileDinhKemBaiViet(fileDinhKemBaiViet) {
      fileDinhKemBaiVietService.deleteFileDinhKemBaiViet(fileDinhKemBaiViet, function() {
        $scope.getFileDinhKemBaiViets();
      });
    }
  }

  FileDinhKemBaiVietDetails.$inject = ['$scope', '$routeParams'];

  /* @ngInject */
  function FileDinhKemBaiVietDetails($scope, $routeParams) {
  }
})();
