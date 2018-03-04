(function() {
  'use strict';

  angular
    .module('app.loaiBaiViets')
    .controller('LoaiBaiViets', LoaiBaiViets)
    .controller('LoaiBaiVietDetails', LoaiBaiVietDetails);

  LoaiBaiViets.$inject = ['$scope', 'logger', 'utils', 'loaiBaiVietService'];

  /* @ngInject */
  function LoaiBaiViets($scope, logger, utils, loaiBaiVietService) {

    /* Get loaiBaiViets */
    $scope.initLoaiBaiVietParams = initLoaiBaiVietParams;
    $scope.getLoaiBaiViets = getLoaiBaiViets;
    $scope.getLoaiBaiVietsWithInitialParams = getLoaiBaiVietsWithInitialParams;
    $scope.getLeftMostPage = utils.makePagingNavigator.getLeftMostPage;
    $scope.getRightMostPage = utils.makePagingNavigator.getRightMostPage;

    /* Create loaiBaiViets */
    $scope.openLoaiBaiVietCreateModal = openLoaiBaiVietCreateModal;
    $scope.closeLoaiBaiVietCreateModal = closeLoaiBaiVietCreateModal;
    $scope.createLoaiBaiViet = createLoaiBaiViet;

    /* Update loaiBaiViets */
    $scope.openLoaiBaiVietUpdateModal = openLoaiBaiVietUpdateModal;
    $scope.closeLoaiBaiVietUpdateModal = closeLoaiBaiVietUpdateModal;
    $scope.updateLoaiBaiViet = updateLoaiBaiViet;

    /* Delete loaiBaiViets */
    $scope.deleteLoaiBaiViet = deleteLoaiBaiViet;

    $scope.getLoaiBaiVietsWithInitialParams();

    //////////////////////////////////////////////////////////////////////////
    function initLoaiBaiVietParams() {
      $scope.loaiBaiVietParams = loaiBaiVietService.initLoaiBaiVietParams();
    }

    function getLoaiBaiViets() {
      loaiBaiVietService.getLoaiBaiViets($scope.loaiBaiVietParams).then(function(response) {
        $scope.loaiBaiViets = response.data.loaiBaiViets;
      });
    }

    function getLoaiBaiVietsWithInitialParams() {
      $scope.initLoaiBaiVietParams();
      $scope.getLoaiBaiViets();
    }

    function openLoaiBaiVietCreateModal() {
      loaiBaiVietService.openLoaiBaiVietCreateModal($scope);
    }

    function closeLoaiBaiVietCreateModal() {
      $scope.loaiBaiVietCreateModal.dismiss();
    }

    function createLoaiBaiViet(newLoaiBaiViet) {
      loaiBaiVietService.createLoaiBaiViet(newLoaiBaiViet).then(function(response) {
        $scope.loaiBaiVietCreateModal.dismiss();
        $scope.getLoaiBaiViets();
      });
    }

    function openLoaiBaiVietUpdateModal(loaiBaiVietId) {
      loaiBaiVietService.openLoaiBaiVietUpdateModal($scope, loaiBaiVietId);
    }

    function closeLoaiBaiVietUpdateModal() {
      $scope.loaiBaiVietUpdateModal.dismiss();
    }

    function updateLoaiBaiViet() {
      loaiBaiVietService.updateLoaiBaiViet($scope.oldLoaiBaiViet)
        .then(function(response) {
        $scope.getLoaiBaiViets();
        $scope.closeLoaiBaiVietUpdateModal();
      });
    }

    function deleteLoaiBaiViet(loaiBaiViet) {
      loaiBaiVietService.deleteLoaiBaiViet(loaiBaiViet, function() {
        $scope.getLoaiBaiViets();
      });
    }
  }

  LoaiBaiVietDetails.$inject = ['$scope', '$routeParams'];

  /* @ngInject */
  function LoaiBaiVietDetails($scope, $routeParams) {
  }
})();
