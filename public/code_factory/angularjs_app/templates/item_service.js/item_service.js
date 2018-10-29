(function() {
  'use strict';

  angular
    .module('app.{{item_name_in_camel_case}}s')
    .factory('{{item_name_in_camel_case}}Service', {{item_name_in_camel_case}}Service);

  /* @ngInject */
  function {{item_name_in_camel_case}}Service($http, $q, logger, exception, utils, crudService,
    {{item_name_in_camel_case}}Model) {

    var service = {
      init{{item_name_in_pascal_case}}Params: init{{item_name_in_pascal_case}}Params,
      get{{item_name_in_pascal_case}}s: get{{item_name_in_pascal_case}}s,
      get{{item_name_in_pascal_case}}: get{{item_name_in_pascal_case}},
      getBasic{{item_name_in_pascal_case}}: getBasic{{item_name_in_pascal_case}},
      open{{item_name_in_pascal_case}}CreateModal: open{{item_name_in_pascal_case}}CreateModal,
      create{{item_name_in_pascal_case}}: create{{item_name_in_pascal_case}},
      open{{item_name_in_pascal_case}}UpdateModal: open{{item_name_in_pascal_case}}UpdateModal,
      update{{item_name_in_pascal_case}}: update{{item_name_in_pascal_case}},
      delete{{item_name_in_pascal_case}}: delete{{item_name_in_pascal_case}},
      validate{{item_name_in_pascal_case}}: validate{{item_name_in_pascal_case}}
    };

    return service;

    function init{{item_name_in_pascal_case}}Params() {
      return {
        paging: {limit: 5, page: 0, pages: [0, 1, 2, 3, 4]},
        sorting: {key: "created_at", direction: "DESC"},
        filtering: {
          created_at_range: {startDate: "", endDate: ""},
          updated_at_range: {startDate: "", endDate: ""},
          {{item_filtering_attributes}}
        }
      }
    }

    function get{{item_name_in_pascal_case}}s({{item_name_in_camel_case}}Params) {
      var processedParams = "";

      if ({{item_name_in_camel_case}}Params) {
        var filteringParams = [];
        if ({{item_name_in_camel_case}}Params.filtering.created_at_range.startDate) {
          filteringParams.push(["created_at",
            moment({{item_name_in_camel_case}}Params.filtering.created_at_range.startDate)
              .format('YYYY-MM-DD'), "gt"]);
        }

        if ({{item_name_in_camel_case}}Params.filtering.created_at_range.endDate) {
          filteringParams.push(["created_at",
            moment({{item_name_in_camel_case}}Params.filtering.created_at_range.endDate)
              .format('YYYY-MM-DD'), "lt"]);
        }

        if ({{item_name_in_camel_case}}Params.filtering.updated_at_range.startDate) {
          filteringParams.push(["updated_at",
            moment({{item_name_in_camel_case}}Params.filtering.updated_at_range.startDate)
              .format('YYYY-MM-DD'), "gt"]);
        }

        if ({{item_name_in_camel_case}}Params.filtering.updated_at_range.endDate) {
          filteringParams.push(["updated_at",
            moment({{item_name_in_camel_case}}Params.filtering.updated_at_range.endDate)
              .format('YYYY-MM-DD'), "lt"]);
        }

        {{_parameter_processing}}

        var including = utils.makeParams.including({{item_name_in_camel_case}}Model.includes);
        var filtering = utils.makeParams.filtering(filteringParams);
        var paging = utils.makeParams.paging({{item_name_in_camel_case}}Params.paging);
        var sorting = utils.makeParams.sorting({{item_name_in_camel_case}}Params.sorting);
        if (filtering == "?") filtering = "";
        if (paging == "?") paging = "";
        if (sorting == "?") sorting = "";
        processedParams = "?" + filtering + paging + sorting;
      }

      return crudService.getItems({{item_name_in_camel_case}}Model.baseUrl + processedParams);
    }

    function get{{item_name_in_pascal_case}}({{item_name_in_camel_case}}Id) {
      return crudService.getItem({{item_name_in_camel_case}}Model.meta , {{item_name_in_camel_case}}Id);
    }

    function getBasic{{item_name_in_pascal_case}}({{item_name_in_camel_case}}Id) {
      return crudService.getBasicItem({{item_name_in_camel_case}}Model.meta , {{item_name_in_camel_case}}Id);
    }

    function open{{item_name_in_pascal_case}}UpdateModal(scope, {{item_name_in_camel_case}}Id) {
      var parameters = {
        itemMeta: {{item_name_in_camel_case}}Model.meta,
        itemId: {{item_name_in_camel_case}}Id,
        itemName: {{item_name_in_camel_case}}Model.updateModalItemName,
        openModalErrorMessage: {{item_name_in_camel_case}}Model.updateModalOpenErrorMessage,
        modalUrl: {{item_name_in_camel_case}}Model.updateModalUrl,
        updateModalName: {{item_name_in_camel_case}}Model.updateModalName,
        scope: scope,
        size: {{item_name_in_camel_case}}Model.updateModalSize,
        windowClass: {{item_name_in_camel_case}}Model.updateModalWindowClass,
        dependencies: {{item_name_in_camel_case}}Model.meta.many_to_one,
        ckeditorConfig: {language: 'vi', height: 700}
      }

      crudService.openItemUpdateModal(parameters);
    }

    function update{{item_name_in_pascal_case}}(updated{{item_name_in_pascal_case}}, silentOnSucess) {
      updated{{item_name_in_pascal_case}}.is_valid = true;
      return crudService.updateItem({{item_name_in_camel_case}}Model.baseUrl + "/" +
        updated{{item_name_in_pascal_case}}.id, {{{item_name_in_camel_case}}: updated{{item_name_in_pascal_case}}})
        .then(function(response) {
          if (!silentOnSucess) {
            logger.success({{item_name_in_camel_case}}Model.updateItemSuccessMessage + " " +
              response.name);
          }

          return response;
        })
        .catch(function(errorMessages) {
          logger.error({{item_name_in_camel_case}}Model.updateItemErrorMessage);
          return $q.reject(errorMessages);
        });
    }

    function open{{item_name_in_pascal_case}}CreateModal(scope) {
      var parameters = {
        openModalErrorMessage: {{item_name_in_camel_case}}Model.createModalOpenErrorMessage,
        modalUrl: {{item_name_in_camel_case}}Model.createModalUrl,
        createModalName: {{item_name_in_camel_case}}Model.createModalName,
        scope: scope,
        size: {{item_name_in_camel_case}}Model.createModalSize,
        windowClass: {{item_name_in_camel_case}}Model.createModalWindowClass,
        dependencies: {{item_name_in_camel_case}}Model.meta.many_to_one,
        ckeditorConfig: {language: 'vi', height: 700}
      }

      crudService.openItemCreateModal(parameters);
    }

    function create{{item_name_in_pascal_case}}({{item_name_in_camel_case}}Data) {
      return crudService.createItem({{item_name_in_camel_case}}Model.meta, {{item_name_in_camel_case}}Data)
        .then(function(response) {
          return validate{{item_name_in_pascal_case}}(response.data.id, true)
            .then(function(response) {
              logger.success({{item_name_in_camel_case}}Model.createItemSuccessMessage);
              return response;
            })
        }).catch(function(errorMessages) {
          logger.error({{item_name_in_camel_case}}Model.createItemErrorMessage);
          return $q.reject(errorMessages);
        });
    }

    function validate{{item_name_in_pascal_case}}({{item_name_in_camel_case}}Id, silentOnSucess) {
      return update{{item_name_in_pascal_case}}({id: {{item_name_in_camel_case}}Id}, silentOnSucess);
    }

    function delete{{item_name_in_pascal_case}}({{item_name_in_camel_case}}, callback) {
      var parameters = {
        url: {{item_name_in_camel_case}}Model.baseUrl + "/" + {{item_name_in_camel_case}}.id,
        sweetAlertTitle: {{item_name_in_camel_case}}Model.deleteSweetAlertTitle + " " + {{item_name_in_camel_case}}.name,
        sweetAlertText: {{item_name_in_camel_case}}Model.deleteSweetAlertText,
        successMessage: {{item_name_in_camel_case}}Model.deleteItemSuccessMessage,
        errorMessage: {{item_name_in_camel_case}}Model.deleteItemErrorMessage
      }
      crudService.deleteItem(parameters, callback);
    }
  }
})();
