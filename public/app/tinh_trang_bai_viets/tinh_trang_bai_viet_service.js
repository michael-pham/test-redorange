(function() {
  'use strict';

  angular
    .module('app.tinhTrangBaiViets')
    .factory('tinhTrangBaiVietService', tinhTrangBaiVietService);

  /* @ngInject */
  function tinhTrangBaiVietService($http, $q, logger, exception, utils, crudService,
    tinhTrangBaiVietModel) {

    var service = {
      initTinhTrangBaiVietParams: initTinhTrangBaiVietParams,
      getTinhTrangBaiViets: getTinhTrangBaiViets,
      getTinhTrangBaiViet: getTinhTrangBaiViet,
      openTinhTrangBaiVietCreateModal: openTinhTrangBaiVietCreateModal,
      createTinhTrangBaiViet: createTinhTrangBaiViet,
      openTinhTrangBaiVietUpdateModal: openTinhTrangBaiVietUpdateModal,
      updateTinhTrangBaiViet: updateTinhTrangBaiViet,
      deleteTinhTrangBaiViet: deleteTinhTrangBaiViet,
      validateTinhTrangBaiViet: validateTinhTrangBaiViet
    };

    return service;

    function initTinhTrangBaiVietParams() {
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

    function getTinhTrangBaiViets(tinhTrangBaiVietParams) {
      var processedParams = "";

      if (tinhTrangBaiVietParams) {
        var filteringParams = [];
        if (tinhTrangBaiVietParams.filtering.created_at_range.startDate) {
          filteringParams.push(["created_at",
            moment(tinhTrangBaiVietParams.filtering.created_at_range.startDate)
              .format('YYYY-MM-DD'), "gt"]);
        }

        if (tinhTrangBaiVietParams.filtering.created_at_range.endDate) {
          filteringParams.push(["created_at",
            moment(tinhTrangBaiVietParams.filtering.created_at_range.endDate)
              .format('YYYY-MM-DD'), "lt"]);
        }

        if (tinhTrangBaiVietParams.filtering.updated_at_range.startDate) {
          filteringParams.push(["updated_at",
            moment(tinhTrangBaiVietParams.filtering.updated_at_range.startDate)
              .format('YYYY-MM-DD'), "gt"]);
        }

        if (tinhTrangBaiVietParams.filtering.updated_at_range.endDate) {
          filteringParams.push(["updated_at",
            moment(tinhTrangBaiVietParams.filtering.updated_at_range.endDate)
              .format('YYYY-MM-DD'), "lt"]);
        }

        if (tinhTrangBaiVietParams.filtering.ten) {
  filteringParams.push(["ten", tinhTrangBaiVietParams.filtering.ten, "ct"]);
}
if (tinhTrangBaiVietParams.filtering.mo_ta) {
  filteringParams.push(["mo_ta", tinhTrangBaiVietParams.filtering.mo_ta, "ct"]);
}


        var including = utils.makeParams.including(tinhTrangBaiVietModel.includes);
        var filtering = utils.makeParams.filtering(filteringParams);
        var paging = utils.makeParams.paging(tinhTrangBaiVietParams.paging);
        var sorting = utils.makeParams.sorting(tinhTrangBaiVietParams.sorting);

        processedParams = "?" + filtering + paging + sorting;
      }

      return crudService.getItems(tinhTrangBaiVietModel.baseUrl + processedParams);
    }

    function getTinhTrangBaiViet(tinhTrangBaiVietId) {
      return crudService.getItem(tinhTrangBaiVietModel.meta , tinhTrangBaiVietId);
    }

    function openTinhTrangBaiVietUpdateModal(scope, tinhTrangBaiVietId) {
      var parameters = {
        itemMeta: tinhTrangBaiVietModel.meta,
        itemId: tinhTrangBaiVietId,
        itemName: tinhTrangBaiVietModel.updateModalItemName,
        openModalErrorMessage: tinhTrangBaiVietModel.updateModalOpenErrorMessage,
        modalUrl: tinhTrangBaiVietModel.updateModalUrl,
        updateModalName: tinhTrangBaiVietModel.updateModalName,
        scope: scope,
        size: tinhTrangBaiVietModel.updateModalSize,
        windowClass: tinhTrangBaiVietModel.updateModalWindowClass,
        dependencies: tinhTrangBaiVietModel.meta.many_to_one
      }

      crudService.openItemUpdateModal(parameters);
    }

    function updateTinhTrangBaiViet(updatedTinhTrangBaiViet, silentOnSucess) {
      updatedTinhTrangBaiViet.is_valid = true;
      return crudService.updateItem(tinhTrangBaiVietModel.baseUrl + "/" +
        updatedTinhTrangBaiViet.id, {tinhTrangBaiViet: updatedTinhTrangBaiViet})
        .then(function(response) {
          if (!silentOnSucess) {
            logger.success(tinhTrangBaiVietModel.updateItemSuccessMessage + " " +
              response.name);
          }

          return response;
        })
        .catch(function(errorMessages) {
          logger.error(tinhTrangBaiVietModel.updateItemErrorMessage);
          return $q.reject(errorMessages);
        });
    }

    function openTinhTrangBaiVietCreateModal(scope) {
      var parameters = {
        openModalErrorMessage: tinhTrangBaiVietModel.createModalOpenErrorMessage,
        modalUrl: tinhTrangBaiVietModel.createModalUrl,
        createModalName: tinhTrangBaiVietModel.createModalName,
        scope: scope,
        size: tinhTrangBaiVietModel.createModalSize,
        windowClass: tinhTrangBaiVietModel.createModalWindowClass,
        dependencies: tinhTrangBaiVietModel.meta.many_to_one
      }

      crudService.openItemCreateModal(parameters);
    }

    function createTinhTrangBaiViet(tinhTrangBaiVietData) {
      return crudService.createItem(tinhTrangBaiVietModel.meta, tinhTrangBaiVietData)
        .then(function(response) {
          return validateTinhTrangBaiViet(response.data.id, true)
            .then(function(response) {
              logger.success(tinhTrangBaiVietModel.createItemSuccessMessage);
              return response;
            })
        }).catch(function(errorMessages) {
          logger.error(tinhTrangBaiVietModel.createItemErrorMessage);
          return $q.reject(errorMessages);
        });
    }

    function validateTinhTrangBaiViet(tinhTrangBaiVietId, silentOnSucess) {
      return updateTinhTrangBaiViet({id: tinhTrangBaiVietId}, silentOnSucess);
    }

    function deleteTinhTrangBaiViet(tinhTrangBaiViet, callback) {
      var parameters = {
        url: tinhTrangBaiVietModel.baseUrl + "/" + tinhTrangBaiViet.id,
        sweetAlertTitle: tinhTrangBaiVietModel.deleteSweetAlertTitle + " " + tinhTrangBaiViet.name,
        sweetAlertText: tinhTrangBaiVietModel.deleteSweetAlertText,
        successMessage: tinhTrangBaiVietModel.deleteItemSuccessMessage,
        errorMessage: tinhTrangBaiVietModel.deleteItemErrorMessage
      }
      crudService.deleteItem(parameters, callback);
    }
  }
})();
