(function() {
  'use strict';

  angular
    .module('app.baiViets')
    .factory('baiVietService', baiVietService);

  /* @ngInject */
  function baiVietService($http, $q, logger, exception, utils, crudService,
    baiVietModel) {

    var service = {
      initBaiVietParams: initBaiVietParams,
      getBaiViets: getBaiViets,
      getBaiViet: getBaiViet,
      openBaiVietCreateModal: openBaiVietCreateModal,
      createBaiViet: createBaiViet,
      openBaiVietUpdateModal: openBaiVietUpdateModal,
      updateBaiViet: updateBaiViet,
      deleteBaiViet: deleteBaiViet,
      validateBaiViet: validateBaiViet
    };

    return service;

    function initBaiVietParams() {
      return {
        paging: {limit: 5, page: 0, pages: [0, 1, 2, 3, 4]},
        sorting: {key: "created_at", direction: "DESC"},
        filtering: {
          created_at_range: {startDate: "", endDate: ""},
          updated_at_range: {startDate: "", endDate: ""},
          tac_gia_bai_viet_id: "",noi_dung: "",tieu_de: "",trich_yeu: "",tinh_trang_bai_viet_id: "",tinh_trang_binh_luan_id: "",bai_viet_cha_id: "",thu_tu_tren_menu: "",chung_loai_bai_viet_id: "",so_luong_binh_luan: "",hinh_anh_dai_dien_url: "",hinh_anh_dai_dien_thumbnail_url: "",
        }
      }
    }

    function getBaiViets(baiVietParams) {
      var processedParams = "";

      if (baiVietParams) {
        var filteringParams = [];
        if (baiVietParams.filtering.created_at_range.startDate) {
          filteringParams.push(["created_at",
            moment(baiVietParams.filtering.created_at_range.startDate)
              .format('YYYY-MM-DD'), "gt"]);
        }

        if (baiVietParams.filtering.created_at_range.endDate) {
          filteringParams.push(["created_at",
            moment(baiVietParams.filtering.created_at_range.endDate)
              .format('YYYY-MM-DD'), "lt"]);
        }

        if (baiVietParams.filtering.updated_at_range.startDate) {
          filteringParams.push(["updated_at",
            moment(baiVietParams.filtering.updated_at_range.startDate)
              .format('YYYY-MM-DD'), "gt"]);
        }

        if (baiVietParams.filtering.updated_at_range.endDate) {
          filteringParams.push(["updated_at",
            moment(baiVietParams.filtering.updated_at_range.endDate)
              .format('YYYY-MM-DD'), "lt"]);
        }

        if (baiVietParams.filtering.tac_gia_bai_viet_id) {
  filteringParams.push(["tac_gia_bai_viet_id", baiVietParams.filtering.tac_gia_bai_viet_id, "eq"]);
}
if (baiVietParams.filtering.noi_dung) {
  filteringParams.push(["noi_dung", baiVietParams.filtering.noi_dung, "ct"]);
}
if (baiVietParams.filtering.tieu_de) {
  filteringParams.push(["tieu_de", baiVietParams.filtering.tieu_de, "ct"]);
}
if (baiVietParams.filtering.trich_yeu) {
  filteringParams.push(["trich_yeu", baiVietParams.filtering.trich_yeu, "ct"]);
}
if (baiVietParams.filtering.tinh_trang_bai_viet_id) {
  filteringParams.push(["tinh_trang_bai_viet_id", baiVietParams.filtering.tinh_trang_bai_viet_id, "eq"]);
}
if (baiVietParams.filtering.tinh_trang_binh_luan_id) {
  filteringParams.push(["tinh_trang_binh_luan_id", baiVietParams.filtering.tinh_trang_binh_luan_id, "eq"]);
}
if (baiVietParams.filtering.bai_viet_cha_id) {
  filteringParams.push(["bai_viet_cha_id", baiVietParams.filtering.bai_viet_cha_id, "eq"]);
}
if (baiVietParams.filtering.thu_tu_tren_menu) {
  filteringParams.push(["thu_tu_tren_menu", baiVietParams.filtering.thu_tu_tren_menu, "ct"]);
}
if (baiVietParams.filtering.chung_loai_bai_viet_id) {
  filteringParams.push(["chung_loai_bai_viet_id", baiVietParams.filtering.chung_loai_bai_viet_id, "ct"]);
}
if (baiVietParams.filtering.so_luong_binh_luan) {
  filteringParams.push(["so_luong_binh_luan", baiVietParams.filtering.so_luong_binh_luan, "ct"]);
}
if (baiVietParams.filtering.hinh_anh_dai_dien_url) {
  filteringParams.push(["hinh_anh_dai_dien_url", baiVietParams.filtering.hinh_anh_dai_dien_url, "ct"]);
}
if (baiVietParams.filtering.hinh_anh_dai_dien_thumbnail_url) {
  filteringParams.push(["hinh_anh_dai_dien_thumbnail_url", baiVietParams.filtering.hinh_anh_dai_dien_thumbnail_url, "ct"]);
}


        var including = utils.makeParams.including(baiVietModel.includes);
        var filtering = utils.makeParams.filtering(filteringParams);
        var paging = utils.makeParams.paging(baiVietParams.paging);
        var sorting = utils.makeParams.sorting(baiVietParams.sorting);
        if (filtering == "?") filtering = "";
        if (paging == "?") paging = "";
        if (sorting == "?") sorting = "";
        processedParams = "?" + filtering + paging + sorting;
      }

      return crudService.getItems(baiVietModel.baseUrl + processedParams);
    }

    function getBaiViet(baiVietId) {
      return crudService.getItem(baiVietModel.meta , baiVietId);
    }

    function openBaiVietUpdateModal(scope, baiVietId) {
      var parameters = {
        itemMeta: baiVietModel.meta,
        itemId: baiVietId,
        itemName: baiVietModel.updateModalItemName,
        openModalErrorMessage: baiVietModel.updateModalOpenErrorMessage,
        modalUrl: baiVietModel.updateModalUrl,
        updateModalName: baiVietModel.updateModalName,
        scope: scope,
        size: baiVietModel.updateModalSize,
        windowClass: baiVietModel.updateModalWindowClass,
        dependencies: baiVietModel.meta.many_to_one
      }

      crudService.openItemUpdateModal(parameters);
    }

    function updateBaiViet(updatedBaiViet, silentOnSucess) {
      updatedBaiViet.is_valid = true;
      return crudService.updateItem(baiVietModel.baseUrl + "/" +
        updatedBaiViet.id, {baiViet: updatedBaiViet})
        .then(function(response) {
          if (!silentOnSucess) {
            logger.success(baiVietModel.updateItemSuccessMessage + " " +
              response.name);
          }

          return response;
        })
        .catch(function(errorMessages) {
          logger.error(baiVietModel.updateItemErrorMessage);
          return $q.reject(errorMessages);
        });
    }

    function openBaiVietCreateModal(scope) {
      var parameters = {
        openModalErrorMessage: baiVietModel.createModalOpenErrorMessage,
        modalUrl: baiVietModel.createModalUrl,
        createModalName: baiVietModel.createModalName,
        scope: scope,
        size: baiVietModel.createModalSize,
        windowClass: baiVietModel.createModalWindowClass,
        dependencies: baiVietModel.meta.many_to_one
      }

      crudService.openItemCreateModal(parameters);
    }

    function createBaiViet(baiVietData) {
      return crudService.createItem(baiVietModel.meta, baiVietData)
        .then(function(response) {
          return validateBaiViet(response.data.id, true)
            .then(function(response) {
              logger.success(baiVietModel.createItemSuccessMessage);
              return response;
            })
        }).catch(function(errorMessages) {
          logger.error(baiVietModel.createItemErrorMessage);
          return $q.reject(errorMessages);
        });
    }

    function validateBaiViet(baiVietId, silentOnSucess) {
      return updateBaiViet({id: baiVietId}, silentOnSucess);
    }

    function deleteBaiViet(baiViet, callback) {
      var parameters = {
        url: baiVietModel.baseUrl + "/" + baiViet.id,
        sweetAlertTitle: baiVietModel.deleteSweetAlertTitle + " " + baiViet.name,
        sweetAlertText: baiVietModel.deleteSweetAlertText,
        successMessage: baiVietModel.deleteItemSuccessMessage,
        errorMessage: baiVietModel.deleteItemErrorMessage
      }
      crudService.deleteItem(parameters, callback);
    }
  }
})();
