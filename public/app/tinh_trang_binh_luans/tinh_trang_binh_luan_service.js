(function() {
  'use strict';

  angular
    .module('app.tinhTrangBinhLuans')
    .factory('tinhTrangBinhLuanService', tinhTrangBinhLuanService);

  /* @ngInject */
  function tinhTrangBinhLuanService($http, $q, logger, exception, utils, crudService,
    tinhTrangBinhLuanModel) {

    var service = {
      initTinhTrangBinhLuanParams: initTinhTrangBinhLuanParams,
      getTinhTrangBinhLuans: getTinhTrangBinhLuans,
      getTinhTrangBinhLuan: getTinhTrangBinhLuan,
      openTinhTrangBinhLuanCreateModal: openTinhTrangBinhLuanCreateModal,
      createTinhTrangBinhLuan: createTinhTrangBinhLuan,
      openTinhTrangBinhLuanUpdateModal: openTinhTrangBinhLuanUpdateModal,
      updateTinhTrangBinhLuan: updateTinhTrangBinhLuan,
      deleteTinhTrangBinhLuan: deleteTinhTrangBinhLuan,
      validateTinhTrangBinhLuan: validateTinhTrangBinhLuan
    };

    return service;

    function initTinhTrangBinhLuanParams() {
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

    function getTinhTrangBinhLuans(tinhTrangBinhLuanParams) {
      var processedParams = "";

      if (tinhTrangBinhLuanParams) {
        var filteringParams = [];
        if (tinhTrangBinhLuanParams.filtering.created_at_range.startDate) {
          filteringParams.push(["created_at",
            moment(tinhTrangBinhLuanParams.filtering.created_at_range.startDate)
              .format('YYYY-MM-DD'), "gt"]);
        }

        if (tinhTrangBinhLuanParams.filtering.created_at_range.endDate) {
          filteringParams.push(["created_at",
            moment(tinhTrangBinhLuanParams.filtering.created_at_range.endDate)
              .format('YYYY-MM-DD'), "lt"]);
        }

        if (tinhTrangBinhLuanParams.filtering.updated_at_range.startDate) {
          filteringParams.push(["updated_at",
            moment(tinhTrangBinhLuanParams.filtering.updated_at_range.startDate)
              .format('YYYY-MM-DD'), "gt"]);
        }

        if (tinhTrangBinhLuanParams.filtering.updated_at_range.endDate) {
          filteringParams.push(["updated_at",
            moment(tinhTrangBinhLuanParams.filtering.updated_at_range.endDate)
              .format('YYYY-MM-DD'), "lt"]);
        }

        if (tinhTrangBinhLuanParams.filtering.ten) {
  filteringParams.push(["ten", tinhTrangBinhLuanParams.filtering.ten, "ct"]);
}
if (tinhTrangBinhLuanParams.filtering.mo_ta) {
  filteringParams.push(["mo_ta", tinhTrangBinhLuanParams.filtering.mo_ta, "ct"]);
}


        var including = utils.makeParams.including(tinhTrangBinhLuanModel.includes);
        var filtering = utils.makeParams.filtering(filteringParams);
        var paging = utils.makeParams.paging(tinhTrangBinhLuanParams.paging);
        var sorting = utils.makeParams.sorting(tinhTrangBinhLuanParams.sorting);
        if (filtering == "?") filtering = "";
        if (paging == "?") paging = "";
        if (sorting == "?") sorting = "";
        processedParams = "?" + filtering + paging + sorting;
      }

      return crudService.getItems(tinhTrangBinhLuanModel.baseUrl + processedParams);
    }

    function getTinhTrangBinhLuan(tinhTrangBinhLuanId) {
      return crudService.getItem(tinhTrangBinhLuanModel.meta , tinhTrangBinhLuanId);
    }

    function openTinhTrangBinhLuanUpdateModal(scope, tinhTrangBinhLuanId) {
      var parameters = {
        itemMeta: tinhTrangBinhLuanModel.meta,
        itemId: tinhTrangBinhLuanId,
        itemName: tinhTrangBinhLuanModel.updateModalItemName,
        openModalErrorMessage: tinhTrangBinhLuanModel.updateModalOpenErrorMessage,
        modalUrl: tinhTrangBinhLuanModel.updateModalUrl,
        updateModalName: tinhTrangBinhLuanModel.updateModalName,
        scope: scope,
        size: tinhTrangBinhLuanModel.updateModalSize,
        windowClass: tinhTrangBinhLuanModel.updateModalWindowClass,
        dependencies: tinhTrangBinhLuanModel.meta.many_to_one,
        ckeditorConfig: {language: 'vi', height: 700}
      }

      crudService.openItemUpdateModal(parameters);
    }

    function updateTinhTrangBinhLuan(updatedTinhTrangBinhLuan, silentOnSucess) {
      updatedTinhTrangBinhLuan.is_valid = true;
      return crudService.updateItem(tinhTrangBinhLuanModel.baseUrl + "/" +
        updatedTinhTrangBinhLuan.id, {tinhTrangBinhLuan: updatedTinhTrangBinhLuan})
        .then(function(response) {
          if (!silentOnSucess) {
            logger.success(tinhTrangBinhLuanModel.updateItemSuccessMessage + " " +
              response.name);
          }

          return response;
        })
        .catch(function(errorMessages) {
          logger.error(tinhTrangBinhLuanModel.updateItemErrorMessage);
          return $q.reject(errorMessages);
        });
    }

    function openTinhTrangBinhLuanCreateModal(scope) {
      var parameters = {
        openModalErrorMessage: tinhTrangBinhLuanModel.createModalOpenErrorMessage,
        modalUrl: tinhTrangBinhLuanModel.createModalUrl,
        createModalName: tinhTrangBinhLuanModel.createModalName,
        scope: scope,
        size: tinhTrangBinhLuanModel.createModalSize,
        windowClass: tinhTrangBinhLuanModel.createModalWindowClass,
        dependencies: tinhTrangBinhLuanModel.meta.many_to_one,
        ckeditorConfig: {language: 'vi', height: 700}
      }

      crudService.openItemCreateModal(parameters);
    }

    function createTinhTrangBinhLuan(tinhTrangBinhLuanData) {
      return crudService.createItem(tinhTrangBinhLuanModel.meta, tinhTrangBinhLuanData)
        .then(function(response) {
          return validateTinhTrangBinhLuan(response.data.id, true)
            .then(function(response) {
              logger.success(tinhTrangBinhLuanModel.createItemSuccessMessage);
              return response;
            })
        }).catch(function(errorMessages) {
          logger.error(tinhTrangBinhLuanModel.createItemErrorMessage);
          return $q.reject(errorMessages);
        });
    }

    function validateTinhTrangBinhLuan(tinhTrangBinhLuanId, silentOnSucess) {
      return updateTinhTrangBinhLuan({id: tinhTrangBinhLuanId}, silentOnSucess);
    }

    function deleteTinhTrangBinhLuan(tinhTrangBinhLuan, callback) {
      var parameters = {
        url: tinhTrangBinhLuanModel.baseUrl + "/" + tinhTrangBinhLuan.id,
        sweetAlertTitle: tinhTrangBinhLuanModel.deleteSweetAlertTitle + " " + tinhTrangBinhLuan.name,
        sweetAlertText: tinhTrangBinhLuanModel.deleteSweetAlertText,
        successMessage: tinhTrangBinhLuanModel.deleteItemSuccessMessage,
        errorMessage: tinhTrangBinhLuanModel.deleteItemErrorMessage
      }
      crudService.deleteItem(parameters, callback);
    }
  }
})();
