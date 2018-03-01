(function() {
  'use strict';

  angular
    .module('app.binhLuans')
    .factory('binhLuanService', binhLuanService);

  /* @ngInject */
  function binhLuanService($http, $q, logger, exception, utils, crudService,
    binhLuanModel) {

    var service = {
      initBinhLuanParams: initBinhLuanParams,
      getBinhLuans: getBinhLuans,
      getBinhLuan: getBinhLuan,
      openBinhLuanCreateModal: openBinhLuanCreateModal,
      createBinhLuan: createBinhLuan,
      openBinhLuanUpdateModal: openBinhLuanUpdateModal,
      updateBinhLuan: updateBinhLuan,
      deleteBinhLuan: deleteBinhLuan,
      validateBinhLuan: validateBinhLuan
    };

    return service;

    function initBinhLuanParams() {
      return {
        paging: {limit: 5, page: 0, pages: [0, 1, 2, 3, 4]},
        sorting: {key: "created_at", direction: "DESC"},
        filtering: {
          created_at_range: {startDate: "", endDate: ""},
          updated_at_range: {startDate: "", endDate: ""},
          bai_viet_id: "",nguoi_binh_luan_id: "",ten_nguoi_binh_luan: "",url_nguoi_binh_luan: "",ip_nguoi_binh_luan: "",noi_dung_binh_luan: "",binh_luan_cha_id: "",binh_luan_duoc_chap_nhan: "",
        }
      }
    }

    function getBinhLuans(binhLuanParams) {
      var processedParams = "";

      if (binhLuanParams) {
        var filteringParams = [];
        if (binhLuanParams.filtering.created_at_range.startDate) {
          filteringParams.push(["created_at",
            moment(binhLuanParams.filtering.created_at_range.startDate)
              .format('YYYY-MM-DD'), "gt"]);
        }

        if (binhLuanParams.filtering.created_at_range.endDate) {
          filteringParams.push(["created_at",
            moment(binhLuanParams.filtering.created_at_range.endDate)
              .format('YYYY-MM-DD'), "lt"]);
        }

        if (binhLuanParams.filtering.updated_at_range.startDate) {
          filteringParams.push(["updated_at",
            moment(binhLuanParams.filtering.updated_at_range.startDate)
              .format('YYYY-MM-DD'), "gt"]);
        }

        if (binhLuanParams.filtering.updated_at_range.endDate) {
          filteringParams.push(["updated_at",
            moment(binhLuanParams.filtering.updated_at_range.endDate)
              .format('YYYY-MM-DD'), "lt"]);
        }

        if (binhLuanParams.filtering.bai_viet_id) {
  filteringParams.push(["bai_viet_id", binhLuanParams.filtering.bai_viet_id, "eq"]);
}
if (binhLuanParams.filtering.nguoi_binh_luan_id) {
  filteringParams.push(["nguoi_binh_luan_id", binhLuanParams.filtering.nguoi_binh_luan_id, "eq"]);
}
if (binhLuanParams.filtering.ten_nguoi_binh_luan) {
  filteringParams.push(["ten_nguoi_binh_luan", binhLuanParams.filtering.ten_nguoi_binh_luan, "ct"]);
}
if (binhLuanParams.filtering.url_nguoi_binh_luan) {
  filteringParams.push(["url_nguoi_binh_luan", binhLuanParams.filtering.url_nguoi_binh_luan, "ct"]);
}
if (binhLuanParams.filtering.ip_nguoi_binh_luan) {
  filteringParams.push(["ip_nguoi_binh_luan", binhLuanParams.filtering.ip_nguoi_binh_luan, "ct"]);
}
if (binhLuanParams.filtering.noi_dung_binh_luan) {
  filteringParams.push(["noi_dung_binh_luan", binhLuanParams.filtering.noi_dung_binh_luan, "ct"]);
}
if (binhLuanParams.filtering.binh_luan_cha_id) {
  filteringParams.push(["binh_luan_cha_id", binhLuanParams.filtering.binh_luan_cha_id, "ct"]);
}
if (binhLuanParams.filtering.binh_luan_duoc_chap_nhan) {
  filteringParams.push(["binh_luan_duoc_chap_nhan", binhLuanParams.filtering.binh_luan_duoc_chap_nhan, "ct"]);
}


        var including = utils.makeParams.including(binhLuanModel.includes);
        var filtering = utils.makeParams.filtering(filteringParams);
        var paging = utils.makeParams.paging(binhLuanParams.paging);
        var sorting = utils.makeParams.sorting(binhLuanParams.sorting);
        if (filtering == "?") filtering = "";
        if (paging == "?") paging = "";
        if (sorting == "?") sorting = "";
        processedParams = "?" + filtering + paging + sorting;
      }

      return crudService.getItems(binhLuanModel.baseUrl + processedParams);
    }

    function getBinhLuan(binhLuanId) {
      return crudService.getItem(binhLuanModel.meta , binhLuanId);
    }

    function openBinhLuanUpdateModal(scope, binhLuanId) {
      var parameters = {
        itemMeta: binhLuanModel.meta,
        itemId: binhLuanId,
        itemName: binhLuanModel.updateModalItemName,
        openModalErrorMessage: binhLuanModel.updateModalOpenErrorMessage,
        modalUrl: binhLuanModel.updateModalUrl,
        updateModalName: binhLuanModel.updateModalName,
        scope: scope,
        size: binhLuanModel.updateModalSize,
        windowClass: binhLuanModel.updateModalWindowClass,
        dependencies: binhLuanModel.meta.many_to_one
      }

      crudService.openItemUpdateModal(parameters);
    }

    function updateBinhLuan(updatedBinhLuan, silentOnSucess) {
      updatedBinhLuan.is_valid = true;
      return crudService.updateItem(binhLuanModel.baseUrl + "/" +
        updatedBinhLuan.id, {binhLuan: updatedBinhLuan})
        .then(function(response) {
          if (!silentOnSucess) {
            logger.success(binhLuanModel.updateItemSuccessMessage + " " +
              response.name);
          }

          return response;
        })
        .catch(function(errorMessages) {
          logger.error(binhLuanModel.updateItemErrorMessage);
          return $q.reject(errorMessages);
        });
    }

    function openBinhLuanCreateModal(scope) {
      var parameters = {
        openModalErrorMessage: binhLuanModel.createModalOpenErrorMessage,
        modalUrl: binhLuanModel.createModalUrl,
        createModalName: binhLuanModel.createModalName,
        scope: scope,
        size: binhLuanModel.createModalSize,
        windowClass: binhLuanModel.createModalWindowClass,
        dependencies: binhLuanModel.meta.many_to_one
      }

      crudService.openItemCreateModal(parameters);
    }

    function createBinhLuan(binhLuanData) {
      return crudService.createItem(binhLuanModel.meta, binhLuanData)
        .then(function(response) {
          return validateBinhLuan(response.data.id, true)
            .then(function(response) {
              logger.success(binhLuanModel.createItemSuccessMessage);
              return response;
            })
        }).catch(function(errorMessages) {
          logger.error(binhLuanModel.createItemErrorMessage);
          return $q.reject(errorMessages);
        });
    }

    function validateBinhLuan(binhLuanId, silentOnSucess) {
      return updateBinhLuan({id: binhLuanId}, silentOnSucess);
    }

    function deleteBinhLuan(binhLuan, callback) {
      var parameters = {
        url: binhLuanModel.baseUrl + "/" + binhLuan.id,
        sweetAlertTitle: binhLuanModel.deleteSweetAlertTitle + " " + binhLuan.name,
        sweetAlertText: binhLuanModel.deleteSweetAlertText,
        successMessage: binhLuanModel.deleteItemSuccessMessage,
        errorMessage: binhLuanModel.deleteItemErrorMessage
      }
      crudService.deleteItem(parameters, callback);
    }
  }
})();
