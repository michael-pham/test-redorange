(function() {
  'use strict';

  angular
    .module('app.projects')
    .factory('projectService', projectService);

  /* @ngInject */
  function projectService($http, $q, logger, exception, utils, crudService,
    projectModel) {

    var service = {
      initProjectParams: initProjectParams,
      getProjects: getProjects,
      getProject: getProject,
      openProjectCreateModal: openProjectCreateModal,
      createProject: createProject,
      openProjectUpdateModal: openProjectUpdateModal,
      updateProject: updateProject,
      deleteProject: deleteProject,
      validateProject: validateProject
    };

    return service;

    function initProjectParams() {
      return {
        paging: {limit: 5, page: 0, pages: [0, 1, 2, 3, 4]},
        sorting: {key: "created_at", direction: "DESC"},
        filtering: {
          created_at_range: {startDate: "", endDate: ""},
          updated_at_range: {startDate: "", endDate: ""},
          name: "",
        }
      }
    }

    function getProjects(projectParams) {
      var processedParams = "";

      if (projectParams) {
        var filteringParams = [];
        if (projectParams.filtering.created_at_range.startDate) {
          filteringParams.push(["created_at",
            moment(projectParams.filtering.created_at_range.startDate)
              .format('YYYY-MM-DD'), "gt"]);
        }

        if (projectParams.filtering.created_at_range.endDate) {
          filteringParams.push(["created_at",
            moment(projectParams.filtering.created_at_range.endDate)
              .format('YYYY-MM-DD'), "lt"]);
        }

        if (projectParams.filtering.updated_at_range.startDate) {
          filteringParams.push(["updated_at",
            moment(projectParams.filtering.updated_at_range.startDate)
              .format('YYYY-MM-DD'), "gt"]);
        }

        if (projectParams.filtering.updated_at_range.endDate) {
          filteringParams.push(["updated_at",
            moment(projectParams.filtering.updated_at_range.endDate)
              .format('YYYY-MM-DD'), "lt"]);
        }

        if (projectParams.filtering.name) {
          filteringParams.push(["name", projectParams.filtering.name, "ct"]);
        }

        var filtering = utils.makeParams.filtering(filteringParams);
        var paging = utils.makeParams.paging(projectParams.paging);
        var sorting = utils.makeParams.sorting(projectParams.sorting);

        processedParams = "?" + filtering + paging + sorting;
      }

      return crudService.getItems(projectModel.baseUrl + processedParams);
    }

    function getProject(projectId) {
      return crudService.getItem(projectModel.meta , projectId);
    }

    function openProjectUpdateModal(scope, projectId) {
      var parameters = {
        itemMeta: projectModel.meta,
        itemId: projectId,
        itemName: projectModel.updateModalItemName,
        openModalErrorMessage: projectModel.updateModalOpenErrorMessage,
        modalUrl: projectModel.updateModalUrl,
        updateModalName: projectModel.updateModalName,
        scope: scope,
        size: projectModel.updateModalSize,
        windowClass: projectModel.updateModalWindowClass,
        dependencies: projectModel.meta.many_to_one 
      }

      crudService.openItemUpdateModal(parameters);
    }

    function updateProject(updatedProject, silentOnSucess) {
      updatedProject.is_valid = true;
      return crudService.updateItem(projectModel.baseUrl + "/" +
        updatedProject.id, {project: updatedProject})
        .then(function(response) {
          if (!silentOnSucess) {
            logger.success(projectModel.updateItemSuccessMessage + " " +
              response.name);
          }

          return response;
        })
        .catch(function(errorMessages) {
          logger.error(projectModel.updateItemErrorMessage);
          return $q.reject(errorMessages);
        });
    }

    function openProjectCreateModal(scope) {
      var parameters = {
        openModalErrorMessage: projectModel.createModalOpenErrorMessage,
        modalUrl: projectModel.createModalUrl,
        createModalName: projectModel.createModalName,
        scope: scope,
        size: projectModel.createModalSize,
        windowClass: projectModel.createModalWindowClass,
        dependencies: projectModel.meta.many_to_one 
      }

      crudService.openItemCreateModal(parameters);
    }

    function createProject(projectData) {
      return crudService.createItem(projectModel.meta, projectData)
        .then(function(response) {
          return validateProject(response.data.id, true)
            .then(function(response) {
              logger.success(projectModel.createItemSuccessMessage);
              return response;
            })
        }).catch(function(errorMessages) {
          logger.error(projectModel.createItemErrorMessage);
          return $q.reject(errorMessages);
        });
    }

    function validateProject(projectId, silentOnSucess) {
      return updateProject({id: projectId}, silentOnSucess);
    }

    function deleteProject(project, callback) {
      var parameters = {
        url: projectModel.baseUrl + "/" + project.id,
        sweetAlertTitle: projectModel.deleteSweetAlertTitle + " " + project.name,
        sweetAlertText: projectModel.deleteSweetAlertText,
        successMessage: projectModel.deleteItemSuccessMessage,
        errorMessage: projectModel.deleteItemErrorMessage
      }
      crudService.deleteItem(parameters, callback);
    }
  }
})();
