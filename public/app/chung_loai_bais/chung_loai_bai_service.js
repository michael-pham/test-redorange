(function() {
  'use strict';

  angular
    .module('app.chungLoaiBais')
    .factory('chungLoaiBaiService', chungLoaiBaiService);

  /* @ngInject */
  function chungLoaiBaiService($http, $q, logger, exception, utils, crudService,
    chungLoaiBaiModel) {

    var service = {
      initChungLoaiBaiParams: initChungLoaiBaiParams,
      getChungLoaiBais: getChungLoaiBais,
      getChungLoaiBai: getChungLoaiBai,
      openChungLoaiBaiCreateModal: openChungLoaiBaiCreateModal,
      createChungLoaiBai: createChungLoaiBai,
      openChungLoaiBaiUpdateModal: openChungLoaiBaiUpdateModal,
      updateChungLoaiBai: updateChungLoaiBai,
      deleteChungLoaiBai: deleteChungLoaiBai,
      validateChungLoaiBai: validateChungLoaiBai
    };

    return service;

    function initChungLoaiBaiParams() {
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

    function getChungLoaiBais(chungLoaiBaiParams) {
      var processedParams = "";

      if (chungLoaiBaiParams) {
        var filteringParams = [];
        if (chungLoaiBaiParams.filtering.created_at_range.startDate) {
          filteringParams.push(["created_at",
            moment(chungLoaiBaiParams.filtering.created_at_range.startDate)
              .format('YYYY-MM-DD'), "gt"]);
        }

        if (chungLoaiBaiParams.filtering.created_at_range.endDate) {
          filteringParams.push(["created_at",
            moment(chungLoaiBaiParams.filtering.created_at_range.endDate)
              .format('YYYY-MM-DD'), "lt"]);
        }

        if (chungLoaiBaiParams.filtering.updated_at_range.startDate) {
          filteringParams.push(["updated_at",
            moment(chungLoaiBaiParams.filtering.updated_at_range.startDate)
              .format('YYYY-MM-DD'), "gt"]);
        }

        if (chungLoaiBaiParams.filtering.updated_at_range.endDate) {
          filteringParams.push(["updated_at",
            moment(chungLoaiBaiParams.filtering.updated_at_range.endDate)
              .format('YYYY-MM-DD'), "lt"]);
        }

        if (chungLoaiBaiParams.filtering.ten) {
  filteringParams.push(["ten", chungLoaiBaiParams.filtering.ten, "ct"]);
}
if (chungLoaiBaiParams.filtering.mo_ta) {
  filteringParams.push(["mo_ta", chungLoaiBaiParams.filtering.mo_ta, "ct"]);
}


        var including = utils.makeParams.including(chungLoaiBaiModel.includes);
        var filtering = utils.makeParams.filtering(filteringParams);
        var paging = utils.makeParams.paging(chungLoaiBaiParams.paging);
        var sorting = utils.makeParams.sorting(chungLoaiBaiParams.sorting);

        processedParams = "?" + filtering + paging + sorting;
      }

      return crudService.getItems(chungLoaiBaiModel.baseUrl + processedParams);
    }

    function getChungLoaiBai(chungLoaiBaiId) {
      return crudService.getItem(chungLoaiBaiModel.meta , chungLoaiBaiId);
    }

    function openChungLoaiBaiUpdateModal(scope, chungLoaiBaiId) {
      var parameters = {
        itemMeta: chungLoaiBaiModel.meta,
        itemId: chungLoaiBaiId,
        itemName: chungLoaiBaiModel.updateModalItemName,
        openModalErrorMessage: chungLoaiBaiModel.updateModalOpenErrorMessage,
        modalUrl: chungLoaiBaiModel.updateModalUrl,
        updateModalName: chungLoaiBaiModel.updateModalName,
        scope: scope,
        size: chungLoaiBaiModel.updateModalSize,
        windowClass: chungLoaiBaiModel.updateModalWindowClass,
        dependencies: chungLoaiBaiModel.meta.many_to_one
      }

      crudService.openItemUpdateModal(parameters);
    }

    function updateChungLoaiBai(updatedChungLoaiBai, silentOnSucess) {
      updatedChungLoaiBai.is_valid = true;
      return crudService.updateItem(chungLoaiBaiModel.baseUrl + "/" +
        updatedChungLoaiBai.id, {chungLoaiBai: updatedChungLoaiBai})
        .then(function(response) {
          if (!silentOnSucess) {
            logger.success(chungLoaiBaiModel.updateItemSuccessMessage + " " +
              response.name);
          }

          return response;
        })
        .catch(function(errorMessages) {
          logger.error(chungLoaiBaiModel.updateItemErrorMessage);
          return $q.reject(errorMessages);
        });
    }

    function openChungLoaiBaiCreateModal(scope) {
      var parameters = {
        openModalErrorMessage: chungLoaiBaiModel.createModalOpenErrorMessage,
        modalUrl: chungLoaiBaiModel.createModalUrl,
        createModalName: chungLoaiBaiModel.createModalName,
        scope: scope,
        size: chungLoaiBaiModel.createModalSize,
        windowClass: chungLoaiBaiModel.createModalWindowClass,
        dependencies: chungLoaiBaiModel.meta.many_to_one
      }

      crudService.openItemCreateModal(parameters);
    }

    function createChungLoaiBai(chungLoaiBaiData) {
      return crudService.createItem(chungLoaiBaiModel.meta, chungLoaiBaiData)
        .then(function(response) {
          return validateChungLoaiBai(response.data.id, true)
            .then(function(response) {
              logger.success(chungLoaiBaiModel.createItemSuccessMessage);
              return response;
            })
        }).catch(function(errorMessages) {
          logger.error(chungLoaiBaiModel.createItemErrorMessage);
          return $q.reject(errorMessages);
        });
    }

    function validateChungLoaiBai(chungLoaiBaiId, silentOnSucess) {
      return updateChungLoaiBai({id: chungLoaiBaiId}, silentOnSucess);
    }

    function deleteChungLoaiBai(chungLoaiBai, callback) {
      var parameters = {
        url: chungLoaiBaiModel.baseUrl + "/" + chungLoaiBai.id,
        sweetAlertTitle: chungLoaiBaiModel.deleteSweetAlertTitle + " " + chungLoaiBai.name,
        sweetAlertText: chungLoaiBaiModel.deleteSweetAlertText,
        successMessage: chungLoaiBaiModel.deleteItemSuccessMessage,
        errorMessage: chungLoaiBaiModel.deleteItemErrorMessage
      }
      crudService.deleteItem(parameters, callback);
    }
  }
})();
