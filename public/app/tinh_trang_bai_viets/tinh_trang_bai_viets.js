(function() {
  'use strict';

  angular
    .module('app.tinhTrangBaiViets')
    .controller('TinhTrangBaiViets', TinhTrangBaiViets)
    .controller('TinhTrangBaiVietDetails', TinhTrangBaiVietDetails);

  TinhTrangBaiViets.$inject = ['$scope', 'logger', 'utils', 'tinhTrangBaiVietService'];

  /* @ngInject */
  function TinhTrangBaiViets($scope, logger, utils, tinhTrangBaiVietService) {

    /* Get tinhTrangBaiViets */
    $scope.initTinhTrangBaiVietParams = initTinhTrangBaiVietParams;
    $scope.getTinhTrangBaiViets = getTinhTrangBaiViets;
    $scope.getTinhTrangBaiVietsWithInitialParams = getTinhTrangBaiVietsWithInitialParams;
    $scope.getLeftMostPage = utils.makePagingNavigator.getLeftMostPage;
    $scope.getRightMostPage = utils.makePagingNavigator.getRightMostPage;

    /* Create tinhTrangBaiViets */
    $scope.openTinhTrangBaiVietCreateModal = openTinhTrangBaiVietCreateModal;
    $scope.closeTinhTrangBaiVietCreateModal = closeTinhTrangBaiVietCreateModal;
    $scope.createTinhTrangBaiViet = createTinhTrangBaiViet;

    /* Update tinhTrangBaiViets */
    $scope.openTinhTrangBaiVietUpdateModal = openTinhTrangBaiVietUpdateModal;
    $scope.closeTinhTrangBaiVietUpdateModal = closeTinhTrangBaiVietUpdateModal;
    $scope.updateTinhTrangBaiViet = updateTinhTrangBaiViet;

    /* Delete tinhTrangBaiViets */
    $scope.deleteTinhTrangBaiViet = deleteTinhTrangBaiViet;

    $scope.getTinhTrangBaiVietsWithInitialParams();

    //////////////////////////////////////////////////////////////////////////
    function initTinhTrangBaiVietParams() {
      $scope.tinhTrangBaiVietParams = tinhTrangBaiVietService.initTinhTrangBaiVietParams();
    }

    function getTinhTrangBaiViets() {
      tinhTrangBaiVietService.getTinhTrangBaiViets($scope.tinhTrangBaiVietParams).then(function(response) {
        $scope.tinhTrangBaiViets = response.data.tinhTrangBaiViets;
      });
    }

    function getTinhTrangBaiVietsWithInitialParams() {
      $scope.initTinhTrangBaiVietParams();
      $scope.getTinhTrangBaiViets();
    }

    function openTinhTrangBaiVietCreateModal() {
      tinhTrangBaiVietService.openTinhTrangBaiVietCreateModal($scope);
    }

    function closeTinhTrangBaiVietCreateModal() {
      $scope.tinhTrangBaiVietCreateModal.dismiss();
    }

    function createTinhTrangBaiViet(newTinhTrangBaiViet) {
      tinhTrangBaiVietService.createTinhTrangBaiViet(newTinhTrangBaiViet).then(function(response) {
        $scope.tinhTrangBaiVietCreateModal.dismiss();
        $scope.getTinhTrangBaiViets();
      });
    }

    function openTinhTrangBaiVietUpdateModal(tinhTrangBaiVietId) {
      tinhTrangBaiVietService.openTinhTrangBaiVietUpdateModal($scope, tinhTrangBaiVietId);
    }

    function closeTinhTrangBaiVietUpdateModal() {
      $scope.tinhTrangBaiVietUpdateModal.dismiss();
    }

    function updateTinhTrangBaiViet() {
      tinhTrangBaiVietService.updateTinhTrangBaiViet($scope.oldTinhTrangBaiViet)
        .then(function(response) {
        $scope.getTinhTrangBaiViets();
        $scope.closeTinhTrangBaiVietUpdateModal();
      });
    }

    function deleteTinhTrangBaiViet(tinhTrangBaiViet) {
      tinhTrangBaiVietService.deleteTinhTrangBaiViet(tinhTrangBaiViet, function() {
        $scope.getTinhTrangBaiViets();
      });
    }
  }

  TinhTrangBaiVietDetails.$inject = ['$scope', '$routeParams'];

  /* @ngInject */
  function TinhTrangBaiVietDetails($scope, $routeParams) {
  }
})();
