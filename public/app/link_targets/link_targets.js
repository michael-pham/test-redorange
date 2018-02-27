(function() {
  'use strict';

  angular
    .module('app.linkTargets')
    .controller('LinkTargets', LinkTargets)
    .controller('LinkTargetDetails', LinkTargetDetails);

  LinkTargets.$inject = ['$scope', 'logger', 'utils', 'linkTargetService'];

  /* @ngInject */
  function LinkTargets($scope, logger, utils, linkTargetService) {

    /* Get linkTargets */
    $scope.initLinkTargetParams = initLinkTargetParams;
    $scope.getLinkTargets = getLinkTargets;
    $scope.getLinkTargetsWithInitialParams = getLinkTargetsWithInitialParams;
    $scope.getLeftMostPage = utils.makePagingNavigator.getLeftMostPage;
    $scope.getRightMostPage = utils.makePagingNavigator.getRightMostPage;

    /* Create linkTargets */
    $scope.openLinkTargetCreateModal = openLinkTargetCreateModal;
    $scope.closeLinkTargetCreateModal = closeLinkTargetCreateModal;
    $scope.createLinkTarget = createLinkTarget;

    /* Update linkTargets */
    $scope.openLinkTargetUpdateModal = openLinkTargetUpdateModal;
    $scope.closeLinkTargetUpdateModal = closeLinkTargetUpdateModal;
    $scope.updateLinkTarget = updateLinkTarget;

    /* Delete linkTargets */
    $scope.deleteLinkTarget = deleteLinkTarget;

    $scope.getLinkTargetsWithInitialParams();

    //////////////////////////////////////////////////////////////////////////
    function initLinkTargetParams() {
      $scope.linkTargetParams = linkTargetService.initLinkTargetParams();
    }

    function getLinkTargets() {
      linkTargetService.getLinkTargets($scope.linkTargetParams).then(function(response) {
        $scope.linkTargets = response.data.linkTargets;
      });
    }

    function getLinkTargetsWithInitialParams() {
      $scope.initLinkTargetParams();
      $scope.getLinkTargets();
    }

    function openLinkTargetCreateModal() {
      linkTargetService.openLinkTargetCreateModal($scope);
    }

    function closeLinkTargetCreateModal() {
      $scope.linkTargetCreateModal.dismiss();
    }

    function createLinkTarget(newLinkTarget) {
      linkTargetService.createLinkTarget(newLinkTarget).then(function(response) {
        $scope.linkTargetCreateModal.dismiss();
        $scope.getLinkTargets();
      });
    }

    function openLinkTargetUpdateModal(linkTargetId) {
      linkTargetService.openLinkTargetUpdateModal($scope, linkTargetId);
    }

    function closeLinkTargetUpdateModal() {
      $scope.linkTargetUpdateModal.dismiss();
    }

    function updateLinkTarget() {
      linkTargetService.updateLinkTarget($scope.oldLinkTarget)
        .then(function(response) {
        $scope.getLinkTargets();
        $scope.closeLinkTargetUpdateModal();
      });
    }

    function deleteLinkTarget(linkTarget) {
      linkTargetService.deleteLinkTarget(linkTarget, function() {
        $scope.getLinkTargets();
      });
    }
  }

  LinkTargetDetails.$inject = ['$scope', '$routeParams'];

  /* @ngInject */
  function LinkTargetDetails($scope, $routeParams) {
  }
})();
