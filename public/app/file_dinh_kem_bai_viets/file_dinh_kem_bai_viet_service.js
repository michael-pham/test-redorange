(function() {
  'use strict';

  angular
    .module('app.fileDinhKemBaiViets')
    .factory('fileDinhKemBaiVietService', fileDinhKemBaiVietService);

  /* @ngInject */
  function fileDinhKemBaiVietService($http, $q, logger, exception, utils, crudService,
    fileDinhKemBaiVietModel) {

    var service = {
      initFileDinhKemBaiVietParams: initFileDinhKemBaiVietParams,
      getFileDinhKemBaiViets: getFileDinhKemBaiViets,
      getFileDinhKemBaiViet: getFileDinhKemBaiViet,
      openFileDinhKemBaiVietCreateModal: openFileDinhKemBaiVietCreateModal,
      createFileDinhKemBaiViet: createFileDinhKemBaiViet,
      openFileDinhKemBaiVietUpdateModal: openFileDinhKemBaiVietUpdateModal,
      updateFileDinhKemBaiViet: updateFileDinhKemBaiViet,
      deleteFileDinhKemBaiViet: deleteFileDinhKemBaiViet,
      validateFileDinhKemBaiViet: validateFileDinhKemBaiViet
    };

    return service;

    function initFileDinhKemBaiVietParams() {
      return {
        paging: {limit: 5, page: 0, pages: [0, 1, 2, 3, 4]},
        sorting: {key: "created_at", direction: "DESC"},
        filtering: {
          created_at_range: {startDate: "", endDate: ""},
          updated_at_range: {startDate: "", endDate: ""},
          bai_viet_id: "",ten_file: "",file_url: "",
        }
      }
    }

    function getFileDinhKemBaiViets(fileDinhKemBaiVietParams) {
      var processedParams = "";

      if (fileDinhKemBaiVietParams) {
        var filteringParams = [];
        if (fileDinhKemBaiVietParams.filtering.created_at_range.startDate) {
          filteringParams.push(["created_at",
            moment(fileDinhKemBaiVietParams.filtering.created_at_range.startDate)
              .format('YYYY-MM-DD'), "gt"]);
        }

        if (fileDinhKemBaiVietParams.filtering.created_at_range.endDate) {
          filteringParams.push(["created_at",
            moment(fileDinhKemBaiVietParams.filtering.created_at_range.endDate)
              .format('YYYY-MM-DD'), "lt"]);
        }

        if (fileDinhKemBaiVietParams.filtering.updated_at_range.startDate) {
          filteringParams.push(["updated_at",
            moment(fileDinhKemBaiVietParams.filtering.updated_at_range.startDate)
              .format('YYYY-MM-DD'), "gt"]);
        }

        if (fileDinhKemBaiVietParams.filtering.updated_at_range.endDate) {
          filteringParams.push(["updated_at",
            moment(fileDinhKemBaiVietParams.filtering.updated_at_range.endDate)
              .format('YYYY-MM-DD'), "lt"]);
        }

        if (fileDinhKemBaiVietParams.filtering.bai_viet_id) {
  filteringParams.push(["bai_viet_id", fileDinhKemBaiVietParams.filtering.bai_viet_id, "eq"]);
}
if (fileDinhKemBaiVietParams.filtering.ten_file) {
  filteringParams.push(["ten_file", fileDinhKemBaiVietParams.filtering.ten_file, "ct"]);
}
if (fileDinhKemBaiVietParams.filtering.file_url) {
  filteringParams.push(["file_url", fileDinhKemBaiVietParams.filtering.file_url, "ct"]);
}


        var including = utils.makeParams.including(fileDinhKemBaiVietModel.includes);
        var filtering = utils.makeParams.filtering(filteringParams);
        var paging = utils.makeParams.paging(fileDinhKemBaiVietParams.paging);
        var sorting = utils.makeParams.sorting(fileDinhKemBaiVietParams.sorting);
        if (filtering == "?") filtering = "";
        if (paging == "?") paging = "";
        if (sorting == "?") sorting = "";
        processedParams = "?" + filtering + paging + sorting;
      }

      return crudService.getItems(fileDinhKemBaiVietModel.baseUrl + processedParams);
    }

    function getFileDinhKemBaiViet(fileDinhKemBaiVietId) {
      return crudService.getItem(fileDinhKemBaiVietModel.meta , fileDinhKemBaiVietId);
    }

    function openFileDinhKemBaiVietUpdateModal(scope, fileDinhKemBaiVietId) {
      var parameters = {
        itemMeta: fileDinhKemBaiVietModel.meta,
        itemId: fileDinhKemBaiVietId,
        itemName: fileDinhKemBaiVietModel.updateModalItemName,
        openModalErrorMessage: fileDinhKemBaiVietModel.updateModalOpenErrorMessage,
        modalUrl: fileDinhKemBaiVietModel.updateModalUrl,
        updateModalName: fileDinhKemBaiVietModel.updateModalName,
        scope: scope,
        size: fileDinhKemBaiVietModel.updateModalSize,
        windowClass: fileDinhKemBaiVietModel.updateModalWindowClass,
        dependencies: fileDinhKemBaiVietModel.meta.many_to_one
      }

      crudService.openItemUpdateModal(parameters);
    }

    function updateFileDinhKemBaiViet(updatedFileDinhKemBaiViet, silentOnSucess) {
      updatedFileDinhKemBaiViet.is_valid = true;
      return crudService.updateItem(fileDinhKemBaiVietModel.baseUrl + "/" +
        updatedFileDinhKemBaiViet.id, {fileDinhKemBaiViet: updatedFileDinhKemBaiViet})
        .then(function(response) {
          if (!silentOnSucess) {
            logger.success(fileDinhKemBaiVietModel.updateItemSuccessMessage + " " +
              response.name);
          }

          return response;
        })
        .catch(function(errorMessages) {
          logger.error(fileDinhKemBaiVietModel.updateItemErrorMessage);
          return $q.reject(errorMessages);
        });
    }

    function openFileDinhKemBaiVietCreateModal(scope) {
      var parameters = {
        openModalErrorMessage: fileDinhKemBaiVietModel.createModalOpenErrorMessage,
        modalUrl: fileDinhKemBaiVietModel.createModalUrl,
        createModalName: fileDinhKemBaiVietModel.createModalName,
        scope: scope,
        size: fileDinhKemBaiVietModel.createModalSize,
        windowClass: fileDinhKemBaiVietModel.createModalWindowClass,
        dependencies: fileDinhKemBaiVietModel.meta.many_to_one
      }

      crudService.openItemCreateModal(parameters);
    }

    function createFileDinhKemBaiViet(fileDinhKemBaiVietData) {
      return crudService.createItem(fileDinhKemBaiVietModel.meta, fileDinhKemBaiVietData)
        .then(function(response) {
          return validateFileDinhKemBaiViet(response.data.id, true)
            .then(function(response) {
              logger.success(fileDinhKemBaiVietModel.createItemSuccessMessage);
              return response;
            })
        }).catch(function(errorMessages) {
          logger.error(fileDinhKemBaiVietModel.createItemErrorMessage);
          return $q.reject(errorMessages);
        });
    }

    function validateFileDinhKemBaiViet(fileDinhKemBaiVietId, silentOnSucess) {
      return updateFileDinhKemBaiViet({id: fileDinhKemBaiVietId}, silentOnSucess);
    }

    function deleteFileDinhKemBaiViet(fileDinhKemBaiViet, callback) {
      var parameters = {
        url: fileDinhKemBaiVietModel.baseUrl + "/" + fileDinhKemBaiViet.id,
        sweetAlertTitle: fileDinhKemBaiVietModel.deleteSweetAlertTitle + " " + fileDinhKemBaiViet.name,
        sweetAlertText: fileDinhKemBaiVietModel.deleteSweetAlertText,
        successMessage: fileDinhKemBaiVietModel.deleteItemSuccessMessage,
        errorMessage: fileDinhKemBaiVietModel.deleteItemErrorMessage
      }
      crudService.deleteItem(parameters, callback);
    }
  }
})();
