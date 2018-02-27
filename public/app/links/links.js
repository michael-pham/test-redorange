(function() {
  'use strict';

  angular
    .module('app.links')
    .controller('Links', Links)
    .controller('LinkDetails', LinkDetails);

  Links.$inject = ['$scope', 'logger', 'utils', 'linkService'];

  /* @ngInject */
  function Links($scope, logger, utils, linkService) {

    /* Get links */
    $scope.initLinkParams = initLinkParams;
    $scope.getLinks = getLinks;
    $scope.getLinksWithInitialParams = getLinksWithInitialParams;
    $scope.getLeftMostPage = utils.makePagingNavigator.getLeftMostPage;
    $scope.getRightMostPage = utils.makePagingNavigator.getRightMostPage;

    /* Create links */
    $scope.openLinkCreateModal = openLinkCreateModal;
    $scope.closeLinkCreateModal = closeLinkCreateModal;
    $scope.createLink = createLink;

    /* Update links */
    $scope.openLinkUpdateModal = openLinkUpdateModal;
    $scope.closeLinkUpdateModal = closeLinkUpdateModal;
    $scope.updateLink = updateLink;

    /* Delete links */
    $scope.deleteLink = deleteLink;

    $scope.getLinksWithInitialParams();

    //////////////////////////////////////////////////////////////////////////
    function initLinkParams() {
      $scope.linkParams = linkService.initLinkParams();
    }

    function getLinks() {
      linkService.getLinks($scope.linkParams).then(function(response) {
        $scope.links = response.data.links;
      });
    }

    function getLinksWithInitialParams() {
      $scope.initLinkParams();
      $scope.getLinks();
    }

    function openLinkCreateModal() {
      linkService.openLinkCreateModal($scope);
    }

    function closeLinkCreateModal() {
      $scope.linkCreateModal.dismiss();
    }

    function createLink(newLink) {
      linkService.createLink(newLink).then(function(response) {
        $scope.linkCreateModal.dismiss();
        $scope.getLinks();
      });
    }

    function openLinkUpdateModal(linkId) {
      linkService.openLinkUpdateModal($scope, linkId);
    }

    function closeLinkUpdateModal() {
      $scope.linkUpdateModal.dismiss();
    }

    function updateLink() {
      linkService.updateLink($scope.oldLink)
        .then(function(response) {
        $scope.getLinks();
        $scope.closeLinkUpdateModal();
      });
    }

    function deleteLink(link) {
      linkService.deleteLink(link, function() {
        $scope.getLinks();
      });
    }
  }

  LinkDetails.$inject = ['$scope', '$routeParams'];

  /* @ngInject */
  function LinkDetails($scope, $routeParams) {
  }
})();
