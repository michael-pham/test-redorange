(function() {
  'use strict';

  angular
    .module('app.links')
    .factory('linkService', linkService);

  /* @ngInject */
  function linkService($http, $q, logger, exception, utils, crudService,
    linkModel) {

    var service = {
      initLinkParams: initLinkParams,
      getLinks: getLinks,
      getLink: getLink,
      openLinkCreateModal: openLinkCreateModal,
      createLink: createLink,
      openLinkUpdateModal: openLinkUpdateModal,
      updateLink: updateLink,
      deleteLink: deleteLink,
      validateLink: validateLink
    };

    return service;

    function initLinkParams() {
      return {
        paging: {limit: 5, page: 0, pages: [0, 1, 2, 3, 4]},
        sorting: {key: "created_at", direction: "DESC"},
        filtering: {
          created_at_range: {startDate: "", endDate: ""},
          updated_at_range: {startDate: "", endDate: ""},
          link_url: "",link_name: "",link_image: "",link_target_id: "",link_description: "",link_visible: "",link_owner: "",link_click_count: "",
        }
      }
    }

    function getLinks(linkParams) {
      var processedParams = "";

      if (linkParams) {
        var filteringParams = [];
        if (linkParams.filtering.created_at_range.startDate) {
          filteringParams.push(["created_at",
            moment(linkParams.filtering.created_at_range.startDate)
              .format('YYYY-MM-DD'), "gt"]);
        }

        if (linkParams.filtering.created_at_range.endDate) {
          filteringParams.push(["created_at",
            moment(linkParams.filtering.created_at_range.endDate)
              .format('YYYY-MM-DD'), "lt"]);
        }

        if (linkParams.filtering.updated_at_range.startDate) {
          filteringParams.push(["updated_at",
            moment(linkParams.filtering.updated_at_range.startDate)
              .format('YYYY-MM-DD'), "gt"]);
        }

        if (linkParams.filtering.updated_at_range.endDate) {
          filteringParams.push(["updated_at",
            moment(linkParams.filtering.updated_at_range.endDate)
              .format('YYYY-MM-DD'), "lt"]);
        }

        if (linkParams.filtering.link_url) {
  filteringParams.push(["link_url", linkParams.filtering.link_url, "ct"]);
}
if (linkParams.filtering.link_name) {
  filteringParams.push(["link_name", linkParams.filtering.link_name, "ct"]);
}
if (linkParams.filtering.link_image) {
  filteringParams.push(["link_image", linkParams.filtering.link_image, "ct"]);
}
if (linkParams.filtering.link_target_id) {
  filteringParams.push(["link_target_id", linkParams.filtering.link_target_id, "eq"]);
}
if (linkParams.filtering.link_description) {
  filteringParams.push(["link_description", linkParams.filtering.link_description, "ct"]);
}
if (linkParams.filtering.link_visible) {
  filteringParams.push(["link_visible", linkParams.filtering.link_visible, "ct"]);
}
if (linkParams.filtering.link_owner) {
  filteringParams.push(["link_owner", linkParams.filtering.link_owner, "eq"]);
}
if (linkParams.filtering.link_click_count) {
  filteringParams.push(["link_click_count", linkParams.filtering.link_click_count, "ct"]);
}


        var including = utils.makeParams.including(linkModel.includes);
        var filtering = utils.makeParams.filtering(filteringParams);
        var paging = utils.makeParams.paging(linkParams.paging);
        var sorting = utils.makeParams.sorting(linkParams.sorting);

        processedParams = "?" + filtering + paging + sorting;
      }

      return crudService.getItems(linkModel.baseUrl + processedParams);
    }

    function getLink(linkId) {
      return crudService.getItem(linkModel.meta , linkId);
    }

    function openLinkUpdateModal(scope, linkId) {
      var parameters = {
        itemMeta: linkModel.meta,
        itemId: linkId,
        itemName: linkModel.updateModalItemName,
        openModalErrorMessage: linkModel.updateModalOpenErrorMessage,
        modalUrl: linkModel.updateModalUrl,
        updateModalName: linkModel.updateModalName,
        scope: scope,
        size: linkModel.updateModalSize,
        windowClass: linkModel.updateModalWindowClass,
        dependencies: linkModel.meta.many_to_one
      }

      crudService.openItemUpdateModal(parameters);
    }

    function updateLink(updatedLink, silentOnSucess) {
      updatedLink.is_valid = true;
      return crudService.updateItem(linkModel.baseUrl + "/" +
        updatedLink.id, {link: updatedLink})
        .then(function(response) {
          if (!silentOnSucess) {
            logger.success(linkModel.updateItemSuccessMessage + " " +
              response.name);
          }

          return response;
        })
        .catch(function(errorMessages) {
          logger.error(linkModel.updateItemErrorMessage);
          return $q.reject(errorMessages);
        });
    }

    function openLinkCreateModal(scope) {
      var parameters = {
        openModalErrorMessage: linkModel.createModalOpenErrorMessage,
        modalUrl: linkModel.createModalUrl,
        createModalName: linkModel.createModalName,
        scope: scope,
        size: linkModel.createModalSize,
        windowClass: linkModel.createModalWindowClass,
        dependencies: linkModel.meta.many_to_one
      }

      crudService.openItemCreateModal(parameters);
    }

    function createLink(linkData) {
      return crudService.createItem(linkModel.meta, linkData)
        .then(function(response) {
          return validateLink(response.data.id, true)
            .then(function(response) {
              logger.success(linkModel.createItemSuccessMessage);
              return response;
            })
        }).catch(function(errorMessages) {
          logger.error(linkModel.createItemErrorMessage);
          return $q.reject(errorMessages);
        });
    }

    function validateLink(linkId, silentOnSucess) {
      return updateLink({id: linkId}, silentOnSucess);
    }

    function deleteLink(link, callback) {
      var parameters = {
        url: linkModel.baseUrl + "/" + link.id,
        sweetAlertTitle: linkModel.deleteSweetAlertTitle + " " + link.name,
        sweetAlertText: linkModel.deleteSweetAlertText,
        successMessage: linkModel.deleteItemSuccessMessage,
        errorMessage: linkModel.deleteItemErrorMessage
      }
      crudService.deleteItem(parameters, callback);
    }
  }
})();
