(function() {
  'use strict';

  angular
    .module('app.tinhTrangBinhLuans')
    .controller('TinhTrangBinhLuans', TinhTrangBinhLuans)
    .controller('TinhTrangBinhLuanDetails', TinhTrangBinhLuanDetails);

  TinhTrangBinhLuans.$inject = ['$scope', 'logger', 'utils', 'tinhTrangBinhLuanService'];

  /* @ngInject */
  function TinhTrangBinhLuans($scope, logger, utils, tinhTrangBinhLuanService) {

    /* Get tinhTrangBinhLuans */
    $scope.initTinhTrangBinhLuanParams = initTinhTrangBinhLuanParams;
    $scope.getTinhTrangBinhLuans = getTinhTrangBinhLuans;
    $scope.getTinhTrangBinhLuansWithInitialParams = getTinhTrangBinhLuansWithInitialParams;
    $scope.getLeftMostPage = utils.makePagingNavigator.getLeftMostPage;
    $scope.getRightMostPage = utils.makePagingNavigator.getRightMostPage;

    /* Create tinhTrangBinhLuans */
    $scope.openTinhTrangBinhLuanCreateModal = openTinhTrangBinhLuanCreateModal;
    $scope.closeTinhTrangBinhLuanCreateModal = closeTinhTrangBinhLuanCreateModal;
    $scope.createTinhTrangBinhLuan = createTinhTrangBinhLuan;

    /* Update tinhTrangBinhLuans */
    $scope.openTinhTrangBinhLuanUpdateModal = openTinhTrangBinhLuanUpdateModal;
    $scope.closeTinhTrangBinhLuanUpdateModal = closeTinhTrangBinhLuanUpdateModal;
    $scope.updateTinhTrangBinhLuan = updateTinhTrangBinhLuan;

    /* Delete tinhTrangBinhLuans */
    $scope.deleteTinhTrangBinhLuan = deleteTinhTrangBinhLuan;

    $scope.getTinhTrangBinhLuansWithInitialParams();

    //////////////////////////////////////////////////////////////////////////
    function initTinhTrangBinhLuanParams() {
      $scope.tinhTrangBinhLuanParams = tinhTrangBinhLuanService.initTinhTrangBinhLuanParams();
    }

    function getTinhTrangBinhLuans() {
      tinhTrangBinhLuanService.getTinhTrangBinhLuans($scope.tinhTrangBinhLuanParams).then(function(response) {
        $scope.tinhTrangBinhLuans = response.data.tinhTrangBinhLuans;
      });
    }

    function getTinhTrangBinhLuansWithInitialParams() {
      $scope.initTinhTrangBinhLuanParams();
      $scope.getTinhTrangBinhLuans();
    }

    function openTinhTrangBinhLuanCreateModal() {
      tinhTrangBinhLuanService.openTinhTrangBinhLuanCreateModal($scope);
    }

    function closeTinhTrangBinhLuanCreateModal() {
      $scope.tinhTrangBinhLuanCreateModal.dismiss();
    }

    function createTinhTrangBinhLuan(newTinhTrangBinhLuan) {
      tinhTrangBinhLuanService.createTinhTrangBinhLuan(newTinhTrangBinhLuan).then(function(response) {
        $scope.tinhTrangBinhLuanCreateModal.dismiss();
        $scope.getTinhTrangBinhLuans();
      });
    }

    function openTinhTrangBinhLuanUpdateModal(tinhTrangBinhLuanId) {
      tinhTrangBinhLuanService.openTinhTrangBinhLuanUpdateModal($scope, tinhTrangBinhLuanId);
    }

    function closeTinhTrangBinhLuanUpdateModal() {
      $scope.tinhTrangBinhLuanUpdateModal.dismiss();
    }

    function updateTinhTrangBinhLuan() {
      tinhTrangBinhLuanService.updateTinhTrangBinhLuan($scope.oldTinhTrangBinhLuan)
        .then(function(response) {
        $scope.getTinhTrangBinhLuans();
        $scope.closeTinhTrangBinhLuanUpdateModal();
      });
    }

    function deleteTinhTrangBinhLuan(tinhTrangBinhLuan) {
      tinhTrangBinhLuanService.deleteTinhTrangBinhLuan(tinhTrangBinhLuan, function() {
        $scope.getTinhTrangBinhLuans();
      });
    }
  }

  TinhTrangBinhLuanDetails.$inject = ['$scope', '$routeParams'];

  /* @ngInject */
  function TinhTrangBinhLuanDetails($scope, $routeParams) {
  }
})();
