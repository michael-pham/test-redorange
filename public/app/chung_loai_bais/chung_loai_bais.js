(function() {
  'use strict';

  angular
    .module('app.chungLoaiBais')
    .controller('ChungLoaiBais', ChungLoaiBais)
    .controller('ChungLoaiBaiDetails', ChungLoaiBaiDetails);

  ChungLoaiBais.$inject = ['$scope', 'logger', 'utils', 'chungLoaiBaiService'];

  /* @ngInject */
  function ChungLoaiBais($scope, logger, utils, chungLoaiBaiService) {

    /* Get chungLoaiBais */
    $scope.initChungLoaiBaiParams = initChungLoaiBaiParams;
    $scope.getChungLoaiBais = getChungLoaiBais;
    $scope.getChungLoaiBaisWithInitialParams = getChungLoaiBaisWithInitialParams;
    $scope.getLeftMostPage = utils.makePagingNavigator.getLeftMostPage;
    $scope.getRightMostPage = utils.makePagingNavigator.getRightMostPage;

    /* Create chungLoaiBais */
    $scope.openChungLoaiBaiCreateModal = openChungLoaiBaiCreateModal;
    $scope.closeChungLoaiBaiCreateModal = closeChungLoaiBaiCreateModal;
    $scope.createChungLoaiBai = createChungLoaiBai;

    /* Update chungLoaiBais */
    $scope.openChungLoaiBaiUpdateModal = openChungLoaiBaiUpdateModal;
    $scope.closeChungLoaiBaiUpdateModal = closeChungLoaiBaiUpdateModal;
    $scope.updateChungLoaiBai = updateChungLoaiBai;

    /* Delete chungLoaiBais */
    $scope.deleteChungLoaiBai = deleteChungLoaiBai;

    $scope.getChungLoaiBaisWithInitialParams();

    //////////////////////////////////////////////////////////////////////////
    function initChungLoaiBaiParams() {
      $scope.chungLoaiBaiParams = chungLoaiBaiService.initChungLoaiBaiParams();
    }

    function getChungLoaiBais() {
      chungLoaiBaiService.getChungLoaiBais($scope.chungLoaiBaiParams).then(function(response) {
        $scope.chungLoaiBais = response.data.chungLoaiBais;
      });
    }

    function getChungLoaiBaisWithInitialParams() {
      $scope.initChungLoaiBaiParams();
      $scope.getChungLoaiBais();
    }

    function openChungLoaiBaiCreateModal() {
      chungLoaiBaiService.openChungLoaiBaiCreateModal($scope);
    }

    function closeChungLoaiBaiCreateModal() {
      $scope.chungLoaiBaiCreateModal.dismiss();
    }

    function createChungLoaiBai(newChungLoaiBai) {
      chungLoaiBaiService.createChungLoaiBai(newChungLoaiBai).then(function(response) {
        $scope.chungLoaiBaiCreateModal.dismiss();
        $scope.getChungLoaiBais();
      });
    }

    function openChungLoaiBaiUpdateModal(chungLoaiBaiId) {
      chungLoaiBaiService.openChungLoaiBaiUpdateModal($scope, chungLoaiBaiId);
    }

    function closeChungLoaiBaiUpdateModal() {
      $scope.chungLoaiBaiUpdateModal.dismiss();
    }

    function updateChungLoaiBai() {
      chungLoaiBaiService.updateChungLoaiBai($scope.oldChungLoaiBai)
        .then(function(response) {
        $scope.getChungLoaiBais();
        $scope.closeChungLoaiBaiUpdateModal();
      });
    }

    function deleteChungLoaiBai(chungLoaiBai) {
      chungLoaiBaiService.deleteChungLoaiBai(chungLoaiBai, function() {
        $scope.getChungLoaiBais();
      });
    }
  }

  ChungLoaiBaiDetails.$inject = ['$scope', '$routeParams'];

  /* @ngInject */
  function ChungLoaiBaiDetails($scope, $routeParams) {
  }
})();
