(function() {
  'use strict';

  angular
    .module('app.projects')
    .factory('projectService', projectService);

  /* @ngInject */
  function projectService($http, $q, logger, exception, utils, crudService) {
    var projectMeta = {
      name: 'project',
      url: '/projects',
      domestic: ["name", "generating_data", "generating_data_refined"],
      many_to_one: [],
      many_to_one: []
    }

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

    ///////////////////////////////////////////////////////////////////////////
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

      return crudService.getItems("/projects" + processedParams);
    }


    function getProject(projectId) {
      return crudService.getItem(projectMeta, projectId);
    }

    function openProjectUpdateModal(scope, projectId) {
      var parameters = {
        itemMeta: projectMeta,
        itemId: projectId,
        itemName: "oldProject",
        openModalErrorMessage: "Tải biểu mẫu cập nhật không thành công.",
        modalUrl: 'app/projects/_cap_nhat_project_modal.html',
        updateModalName: "projectCreateModal",
        scope: scope,
        windowClass: "",
        dependencies: projectMeta.many_to_one 
      }
      crudService.openItemUpdateModal(parameters);
    }

    function updateProject(projectId, updatedProjectData) {
      return crudService.updateItem("/projects/" + projectId, 
        {project: updatedProjectData});
    }

    function openProjectCreateModal(scope) {
      var promises = [];
      var accumulatedResponse = {};
      // promises.push(statusService.getStatus().then(function(response) {
      //   accumulatedResponse['tinh_trang'] = response;
      // });
      return $q.all(promises)
        .then(function() {
          accumulatedResponse.projectCreateModal =
            utils.openModal('app/projects/_them_project_modal.html', scope);
          return accumulatedResponse;
        })
        .catch(exception.catcher("Tải biểu mẫu cập nhật không thành công"));
    }

    function createProject(projectData) {
      return utils.createModel(projectMeta, projectData)
        .then(function(response) {
          var newProjectId = response.data.id;
          return validateProject(newProjectId);
        })
        .catch(exception.catcher("Lỗi xảy ra trong quá trình tạo project."));
    }

    function validateProject(projectId) {
      return updateProject(projectId, {is_valid: true});
    }

    function deleteProject(project, callback) {
        SweetAlert.swal({
          title: "Xóa project " + project.name + "?",
          text: "Dữ liệu sẽ không thể khôi phục được sau khi xóa.",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Xoá",
          cancelButtonText: "Trở lại",
          closeOnConfirm: true,
          closeOnCancel: true
        },
        function(isConfirm) {
          if (isConfirm) {
            $http.delete("/projects/" + project.id)
            .then(function(successResponse) {
              if (!successResponse.data.errors) {
                logger.success("Xóa thành công project " + project.name);
                callback();
              } else {
                return $q.reject(response.data.errors[0]);
              }
            })
            .catch(function(response) {
              var message = "Một lỗi nào đó đã xảy ra trong quá trình xóa project."
              if (response.data.message) {
                message = response.data.message;
              }

              logger.error(message);
              return $q.reject(message);
            });
          };
        });
      }
  }
})();
