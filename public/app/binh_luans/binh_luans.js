(function() {
  'use strict';

  angular
    .module('app.binhLuans')
    .controller('BinhLuans', BinhLuans)
    .controller('BinhLuanDetails', BinhLuanDetails);

  BinhLuans.$inject = ['$scope', 'logger', 'utils', 'binhLuanService'];

  /* @ngInject */
  function BinhLuans($scope, logger, utils, binhLuanService) {

    /* Get binhLuans */
    $scope.initBinhLuanParams = initBinhLuanParams;
    $scope.getBinhLuans = getBinhLuans;
    $scope.getBinhLuansWithInitialParams = getBinhLuansWithInitialParams;
    $scope.getLeftMostPage = utils.makePagingNavigator.getLeftMostPage;
    $scope.getRightMostPage = utils.makePagingNavigator.getRightMostPage;

    /* Create binhLuans */
    $scope.openBinhLuanCreateModal = openBinhLuanCreateModal;
    $scope.closeBinhLuanCreateModal = closeBinhLuanCreateModal;
    $scope.createBinhLuan = createBinhLuan;

    /* Update binhLuans */
    $scope.openBinhLuanUpdateModal = openBinhLuanUpdateModal;
    $scope.closeBinhLuanUpdateModal = closeBinhLuanUpdateModal;
    $scope.updateBinhLuan = updateBinhLuan;

    /* Delete binhLuans */
    $scope.deleteBinhLuan = deleteBinhLuan;

    $scope.getBinhLuansWithInitialParams();

    //////////////////////////////////////////////////////////////////////////
    function initBinhLuanParams() {
      $scope.binhLuanParams = binhLuanService.initBinhLuanParams();
    }

    function getBinhLuans() {
      binhLuanService.getBinhLuans($scope.binhLuanParams).then(function(response) {
        $scope.binhLuans = response.data.binhLuans;
      });
    }

    function getBinhLuansWithInitialParams() {
      $scope.initBinhLuanParams();
      $scope.getBinhLuans();
    }

    function openBinhLuanCreateModal() {
      binhLuanService.openBinhLuanCreateModal($scope);
    }

    function closeBinhLuanCreateModal() {
      $scope.binhLuanCreateModal.dismiss();
    }

    function createBinhLuan(newBinhLuan) {
      binhLuanService.createBinhLuan(newBinhLuan).then(function(response) {
        $scope.binhLuanCreateModal.dismiss();
        $scope.getBinhLuans();
      });
    }

    function openBinhLuanUpdateModal(binhLuanId) {
      binhLuanService.openBinhLuanUpdateModal($scope, binhLuanId);
    }

    function closeBinhLuanUpdateModal() {
      $scope.binhLuanUpdateModal.dismiss();
    }

    function updateBinhLuan() {
      binhLuanService.updateBinhLuan($scope.oldBinhLuan)
        .then(function(response) {
        $scope.getBinhLuans();
        $scope.closeBinhLuanUpdateModal();
      });
    }

    function deleteBinhLuan(binhLuan) {
      binhLuanService.deleteBinhLuan(binhLuan, function() {
        $scope.getBinhLuans();
      });
    }
  }

  BinhLuanDetails.$inject = ['$scope', '$routeParams'];

  /* @ngInject */
  function BinhLuanDetails($scope, $routeParams) {
  }
})();
