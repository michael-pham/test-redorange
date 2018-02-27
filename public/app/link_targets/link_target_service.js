(function() {
  'use strict';

  angular
    .module('app.linkTargets')
    .factory('linkTargetService', linkTargetService);

  /* @ngInject */
  function linkTargetService($http, $q, logger, exception, utils, crudService,
    linkTargetModel) {

    var service = {
      initLinkTargetParams: initLinkTargetParams,
      getLinkTargets: getLinkTargets,
      getLinkTarget: getLinkTarget,
      openLinkTargetCreateModal: openLinkTargetCreateModal,
      createLinkTarget: createLinkTarget,
      openLinkTargetUpdateModal: openLinkTargetUpdateModal,
      updateLinkTarget: updateLinkTarget,
      deleteLinkTarget: deleteLinkTarget,
      validateLinkTarget: validateLinkTarget
    };

    return service;

    function initLinkTargetParams() {
      return {
        paging: {limit: 5, page: 0, pages: [0, 1, 2, 3, 4]},
        sorting: {key: "created_at", direction: "DESC"},
        filtering: {
          created_at_range: {startDate: "", endDate: ""},
          updated_at_range: {startDate: "", endDate: ""},
          name: "",description: "",
        }
      }
    }

    function getLinkTargets(linkTargetParams) {
      var processedParams = "";

      if (linkTargetParams) {
        var filteringParams = [];
        if (linkTargetParams.filtering.created_at_range.startDate) {
          filteringParams.push(["created_at",
            moment(linkTargetParams.filtering.created_at_range.startDate)
              .format('YYYY-MM-DD'), "gt"]);
        }

        if (linkTargetParams.filtering.created_at_range.endDate) {
          filteringParams.push(["created_at",
            moment(linkTargetParams.filtering.created_at_range.endDate)
              .format('YYYY-MM-DD'), "lt"]);
        }

        if (linkTargetParams.filtering.updated_at_range.startDate) {
          filteringParams.push(["updated_at",
            moment(linkTargetParams.filtering.updated_at_range.startDate)
              .format('YYYY-MM-DD'), "gt"]);
        }

        if (linkTargetParams.filtering.updated_at_range.endDate) {
          filteringParams.push(["updated_at",
            moment(linkTargetParams.filtering.updated_at_range.endDate)
              .format('YYYY-MM-DD'), "lt"]);
        }

        if (linkTargetParams.filtering.name) {
  filteringParams.push(["name", linkTargetParams.filtering.name, "ct"]);
}
if (linkTargetParams.filtering.description) {
  filteringParams.push(["description", linkTargetParams.filtering.description, "ct"]);
}


        var including = utils.makeParams.including(linkTargetModel.includes);
        var filtering = utils.makeParams.filtering(filteringParams);
        var paging = utils.makeParams.paging(linkTargetParams.paging);
        var sorting = utils.makeParams.sorting(linkTargetParams.sorting);

        processedParams = "?" + filtering + paging + sorting;
      }

      return crudService.getItems(linkTargetModel.baseUrl + processedParams);
    }

    function getLinkTarget(linkTargetId) {
      return crudService.getItem(linkTargetModel.meta , linkTargetId);
    }

    function openLinkTargetUpdateModal(scope, linkTargetId) {
      var parameters = {
        itemMeta: linkTargetModel.meta,
        itemId: linkTargetId,
        itemName: linkTargetModel.updateModalItemName,
        openModalErrorMessage: linkTargetModel.updateModalOpenErrorMessage,
        modalUrl: linkTargetModel.updateModalUrl,
        updateModalName: linkTargetModel.updateModalName,
        scope: scope,
        size: linkTargetModel.updateModalSize,
        windowClass: linkTargetModel.updateModalWindowClass,
        dependencies: linkTargetModel.meta.many_to_one
      }

      crudService.openItemUpdateModal(parameters);
    }

    function updateLinkTarget(updatedLinkTarget, silentOnSucess) {
      updatedLinkTarget.is_valid = true;
      return crudService.updateItem(linkTargetModel.baseUrl + "/" +
        updatedLinkTarget.id, {linkTarget: updatedLinkTarget})
        .then(function(response) {
          if (!silentOnSucess) {
            logger.success(linkTargetModel.updateItemSuccessMessage + " " +
              response.name);
          }

          return response;
        })
        .catch(function(errorMessages) {
          logger.error(linkTargetModel.updateItemErrorMessage);
          return $q.reject(errorMessages);
        });
    }

    function openLinkTargetCreateModal(scope) {
      var parameters = {
        openModalErrorMessage: linkTargetModel.createModalOpenErrorMessage,
        modalUrl: linkTargetModel.createModalUrl,
        createModalName: linkTargetModel.createModalName,
        scope: scope,
        size: linkTargetModel.createModalSize,
        windowClass: linkTargetModel.createModalWindowClass,
        dependencies: linkTargetModel.meta.many_to_one
      }

      crudService.openItemCreateModal(parameters);
    }

    function createLinkTarget(linkTargetData) {
      return crudService.createItem(linkTargetModel.meta, linkTargetData)
        .then(function(response) {
          return validateLinkTarget(response.data.id, true)
            .then(function(response) {
              logger.success(linkTargetModel.createItemSuccessMessage);
              return response;
            })
        }).catch(function(errorMessages) {
          logger.error(linkTargetModel.createItemErrorMessage);
          return $q.reject(errorMessages);
        });
    }

    function validateLinkTarget(linkTargetId, silentOnSucess) {
      return updateLinkTarget({id: linkTargetId}, silentOnSucess);
    }

    function deleteLinkTarget(linkTarget, callback) {
      var parameters = {
        url: linkTargetModel.baseUrl + "/" + linkTarget.id,
        sweetAlertTitle: linkTargetModel.deleteSweetAlertTitle + " " + linkTarget.name,
        sweetAlertText: linkTargetModel.deleteSweetAlertText,
        successMessage: linkTargetModel.deleteItemSuccessMessage,
        errorMessage: linkTargetModel.deleteItemErrorMessage
      }
      crudService.deleteItem(parameters, callback);
    }
  }
})();
