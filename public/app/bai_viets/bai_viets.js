(function() {
  'use strict';

  angular
    .module('app.baiViets')
    .controller('BaiViets', BaiViets)
    .controller('BaiVietDetails', BaiVietDetails);

  BaiViets.$inject = ['$scope', 'logger', 'utils', 'baiVietService'];

  /* @ngInject */
  function BaiViets($scope, logger, utils, baiVietService) {

    /* Get baiViets */
    $scope.initBaiVietParams = initBaiVietParams;
    $scope.getBaiViets = getBaiViets;
    $scope.getBaiVietsWithInitialParams = getBaiVietsWithInitialParams;
    $scope.getLeftMostPage = utils.makePagingNavigator.getLeftMostPage;
    $scope.getRightMostPage = utils.makePagingNavigator.getRightMostPage;

    /* Create baiViets */
    $scope.openBaiVietCreateModal = openBaiVietCreateModal;
    $scope.closeBaiVietCreateModal = closeBaiVietCreateModal;
    $scope.createBaiViet = createBaiViet;

    /* Update baiViets */
    $scope.openBaiVietUpdateModal = openBaiVietUpdateModal;
    $scope.closeBaiVietUpdateModal = closeBaiVietUpdateModal;
    $scope.updateBaiViet = updateBaiViet;

    /* Delete baiViets */
    $scope.deleteBaiViet = deleteBaiViet;

    $scope.getBaiVietsWithInitialParams();

    //////////////////////////////////////////////////////////////////////////
    function initBaiVietParams() {
      $scope.baiVietParams = baiVietService.initBaiVietParams();
    }

    function getBaiViets() {
      baiVietService.getBaiViets($scope.baiVietParams).then(function(response) {
        $scope.baiViets = response.data.baiViets;
      });
    }

    function getBaiVietsWithInitialParams() {
      $scope.initBaiVietParams();
      $scope.getBaiViets();
    }

    function openBaiVietCreateModal() {
      baiVietService.openBaiVietCreateModal($scope);
    }

    function closeBaiVietCreateModal() {
      $scope.baiVietCreateModal.dismiss();
    }

    function createBaiViet(newBaiViet) {
      baiVietService.createBaiViet(newBaiViet).then(function(response) {
        $scope.baiVietCreateModal.dismiss();
        $scope.getBaiViets();
      });
    }

    function openBaiVietUpdateModal(baiVietId) {
      baiVietService.openBaiVietUpdateModal($scope, baiVietId);
    }

    function closeBaiVietUpdateModal() {
      $scope.baiVietUpdateModal.dismiss();
    }

    function updateBaiViet() {
      baiVietService.updateBaiViet($scope.oldBaiViet)
        .then(function(response) {
        $scope.getBaiViets();
        $scope.closeBaiVietUpdateModal();
      });
    }

    function deleteBaiViet(baiViet) {
      baiVietService.deleteBaiViet(baiViet, function() {
        $scope.getBaiViets();
      });
    }
  }

  BaiVietDetails.$inject = ['$scope', '$routeParams'];

  /* @ngInject */
  function BaiVietDetails($scope, $routeParams) {
  }
})();
