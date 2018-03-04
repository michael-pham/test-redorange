(function() {
  'use strict';

  angular
    .module('app.loaiBaiViets')
    .factory('loaiBaiVietService', loaiBaiVietService);

  /* @ngInject */
  function loaiBaiVietService($http, $q, logger, exception, utils, crudService,
    loaiBaiVietModel) {

    var service = {
      initLoaiBaiVietParams: initLoaiBaiVietParams,
      getLoaiBaiViets: getLoaiBaiViets,
      getLoaiBaiViet: getLoaiBaiViet,
      openLoaiBaiVietCreateModal: openLoaiBaiVietCreateModal,
      createLoaiBaiViet: createLoaiBaiViet,
      openLoaiBaiVietUpdateModal: openLoaiBaiVietUpdateModal,
      updateLoaiBaiViet: updateLoaiBaiViet,
      deleteLoaiBaiViet: deleteLoaiBaiViet,
      validateLoaiBaiViet: validateLoaiBaiViet
    };

    return service;

    function initLoaiBaiVietParams() {
      return {
        paging: {limit: 5, page: 0, pages: [0, 1, 2, 3, 4]},
        sorting: {key: "created_at", direction: "DESC"},
        filtering: {
          created_at_range: {startDate: "", endDate: ""},
          updated_at_range: {startDate: "", endDate: ""},
          ten: "",mo_ta: "",
        }
      }
    }

    function getLoaiBaiViets(loaiBaiVietParams) {
      var processedParams = "";

      if (loaiBaiVietParams) {
        var filteringParams = [];
        if (loaiBaiVietParams.filtering.created_at_range.startDate) {
          filteringParams.push(["created_at",
            moment(loaiBaiVietParams.filtering.created_at_range.startDate)
              .format('YYYY-MM-DD'), "gt"]);
        }

        if (loaiBaiVietParams.filtering.created_at_range.endDate) {
          filteringParams.push(["created_at",
            moment(loaiBaiVietParams.filtering.created_at_range.endDate)
              .format('YYYY-MM-DD'), "lt"]);
        }

        if (loaiBaiVietParams.filtering.updated_at_range.startDate) {
          filteringParams.push(["updated_at",
            moment(loaiBaiVietParams.filtering.updated_at_range.startDate)
              .format('YYYY-MM-DD'), "gt"]);
        }

        if (loaiBaiVietParams.filtering.updated_at_range.endDate) {
          filteringParams.push(["updated_at",
            moment(loaiBaiVietParams.filtering.updated_at_range.endDate)
              .format('YYYY-MM-DD'), "lt"]);
        }

        if (loaiBaiVietParams.filtering.ten) {
  filteringParams.push(["ten", loaiBaiVietParams.filtering.ten, "ct"]);
}
if (loaiBaiVietParams.filtering.mo_ta) {
  filteringParams.push(["mo_ta", loaiBaiVietParams.filtering.mo_ta, "ct"]);
}


        var including = utils.makeParams.including(loaiBaiVietModel.includes);
        var filtering = utils.makeParams.filtering(filteringParams);
        var paging = utils.makeParams.paging(loaiBaiVietParams.paging);
        var sorting = utils.makeParams.sorting(loaiBaiVietParams.sorting);
        if (filtering == "?") filtering = "";
        if (paging == "?") paging = "";
        if (sorting == "?") sorting = "";
        processedParams = "?" + filtering + paging + sorting;
      }

      return crudService.getItems(loaiBaiVietModel.baseUrl + processedParams);
    }

    function getLoaiBaiViet(loaiBaiVietId) {
      return crudService.getItem(loaiBaiVietModel.meta , loaiBaiVietId);
    }

    function openLoaiBaiVietUpdateModal(scope, loaiBaiVietId) {
      var parameters = {
        itemMeta: loaiBaiVietModel.meta,
        itemId: loaiBaiVietId,
        itemName: loaiBaiVietModel.updateModalItemName,
        openModalErrorMessage: loaiBaiVietModel.updateModalOpenErrorMessage,
        modalUrl: loaiBaiVietModel.updateModalUrl,
        updateModalName: loaiBaiVietModel.updateModalName,
        scope: scope,
        size: loaiBaiVietModel.updateModalSize,
        windowClass: loaiBaiVietModel.updateModalWindowClass,
        dependencies: loaiBaiVietModel.meta.many_to_one,
        ckeditorConfig: {language: 'vi', height: 700}
      }

      crudService.openItemUpdateModal(parameters);
    }

    function updateLoaiBaiViet(updatedLoaiBaiViet, silentOnSucess) {
      updatedLoaiBaiViet.is_valid = true;
      return crudService.updateItem(loaiBaiVietModel.baseUrl + "/" +
        updatedLoaiBaiViet.id, {loaiBaiViet: updatedLoaiBaiViet})
        .then(function(response) {
          if (!silentOnSucess) {
            logger.success(loaiBaiVietModel.updateItemSuccessMessage + " " +
              response.name);
          }

          return response;
        })
        .catch(function(errorMessages) {
          logger.error(loaiBaiVietModel.updateItemErrorMessage);
          return $q.reject(errorMessages);
        });
    }

    function openLoaiBaiVietCreateModal(scope) {
      var parameters = {
        openModalErrorMessage: loaiBaiVietModel.createModalOpenErrorMessage,
        modalUrl: loaiBaiVietModel.createModalUrl,
        createModalName: loaiBaiVietModel.createModalName,
        scope: scope,
        size: loaiBaiVietModel.createModalSize,
        windowClass: loaiBaiVietModel.createModalWindowClass,
        dependencies: loaiBaiVietModel.meta.many_to_one,
        ckeditorConfig: {language: 'vi', height: 700}
      }

      crudService.openItemCreateModal(parameters);
    }

    function createLoaiBaiViet(loaiBaiVietData) {
      return crudService.createItem(loaiBaiVietModel.meta, loaiBaiVietData)
        .then(function(response) {
          return validateLoaiBaiViet(response.data.id, true)
            .then(function(response) {
              logger.success(loaiBaiVietModel.createItemSuccessMessage);
              return response;
            })
        }).catch(function(errorMessages) {
          logger.error(loaiBaiVietModel.createItemErrorMessage);
          return $q.reject(errorMessages);
        });
    }

    function validateLoaiBaiViet(loaiBaiVietId, silentOnSucess) {
      return updateLoaiBaiViet({id: loaiBaiVietId}, silentOnSucess);
    }

    function deleteLoaiBaiViet(loaiBaiViet, callback) {
      var parameters = {
        url: loaiBaiVietModel.baseUrl + "/" + loaiBaiViet.id,
        sweetAlertTitle: loaiBaiVietModel.deleteSweetAlertTitle + " " + loaiBaiViet.name,
        sweetAlertText: loaiBaiVietModel.deleteSweetAlertText,
        successMessage: loaiBaiVietModel.deleteItemSuccessMessage,
        errorMessage: loaiBaiVietModel.deleteItemErrorMessage
      }
      crudService.deleteItem(parameters, callback);
    }
  }
})();
