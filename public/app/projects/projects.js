(function() {
  'use strict';

  angular
    .module('app.projects')
    .controller('Projects', Projects)
    .controller('ProjectDetails', ProjectDetails);

  Projects.$inject = ['$scope', 'logger', '$location', 'utils', 'projectService'];

  /* @ngInject */
  function Projects($scope, logger, $location, utils, projectService) {

    /* Get projects */
    $scope.initProjectParams = initProjectParams;
    $scope.getProjects = getProjects;
    $scope.getProjectsWithInitialParams = getProjectsWithInitialParams;
    $scope.getLeftMostPage = utils.makePagingNavigator.getLeftMostPage;
    $scope.getRightMostPage = utils.makePagingNavigator.getRightMostPage;

    /* Create projects */
    $scope.openProjectCreateModal = openProjectCreateModal;
    $scope.closeProjectCreateModal = closeProjectCreateModal;
    $scope.createProject = createProject;

    /* Update projects */
    $scope.openProjectUpdateModal = openProjectUpdateModal;
    $scope.closeProjectUpdateModal = closeProjectUpdateModal;
    $scope.updateProject = updateProject;

    /* Delete projects */
    $scope.deleteProject = deleteProject;

    $scope.getProjectsWithInitialParams();

    //////////////////////////////////////////////////////////////////////////
    function initProjectParams() {
      $scope.projectParams = projectService.initProjectParams();
    }

    function getProjects() {
      projectService.getProjects($scope.projectParams).then(function(response) {
        $scope.projects = response.data.projects;
      });
    }

    function getProjectsWithInitialParams() {
      $scope.initProjectParams();
      $scope.getProjects();
    }

    function openProjectCreateModal() {
      projectService.openProjectCreateModal($scope);
    }

    function closeProjectCreateModal() {
      $scope.projectCreateModal.dismiss();
    }

    function createProject(newProject) {
      projectService.createProject(newProject).then(function(response) {
        $scope.projectCreateModal.dismiss();
        $scope.getProjects();
      });
    }

    function openProjectUpdateModal(projectId) {
      projectService.openProjectUpdateModal($scope, projectId);
    }

    function closeProjectUpdateModal() {
      $scope.projectUpdateModal.dismiss();
    }

    function updateProject() {
      projectService.updateProject($scope.oldProject)
        .then(function(response) {
        $scope.getProjects();
        $scope.closeProjectUpdateModal();
      });
    }

    function deleteProject(project) {
      projectService.deleteProject(project, function() {
        $scope.getProjects();
      });
    }
  }

  ProjectDetails.$inject = ['$sce', '$scope', '$http', '$routeParams', 'SweetAlert', 'FileSaver', 'crud', 'projectService', 'utils'];

  /* @ngInject */
  function ProjectDetails($sce, $scope, $http, $routeParams, SweetAlert, FileSaver, crud, projectService, utils) {
    $scope.makeDanhMuc = function() {
      for (var i = 0; i < $scope.currentModel.attributes.length; ++i) {
        $scope.currentModel.attributes[i].show = false;
      }

      $scope.currentModel.attributes.push({
        name: "ten",
        show: false,
        display_name: "Tên",
        type: "string",
        ui_type: "text_input",
        hidden: "",
        constraints: {
          max: "255",
          min: "",
          pattern: "",
          pattern_message: "",
          required: true,
          nullable: "",
          numeric: "",
          unique: "",
          email: "",
        }
      });

      $scope.currentModel.attributes.push({
        name: "mo_ta",
        show: false,
        display_name: "Mô tả",
        type: "text",
        ui_type: "textarea_input",
        hidden: "",
        constraints: {
          max: "500",
          min: "",
          pattern: "",
          pattern_message: "",
          required: "",
          nullable: true,
          numeric: "",
          unique: "",
          email: "",
        }
      });
    }

    // NEW GENERATION

    $scope.showCreateModalCode = showCreateModalCode;
    $scope.trustAsHtml = function(string) {
      return $sce.trustAsHtml(string);
    };

    function showCreateModalCode(model) {
      function replacer(key, value) {
        if (typeof value === "boolean"||typeof value === "number") {
          return String(value);
        }
        return value;
      }

      model = JSON.stringify([model], replacer);

      $http.post("http://localhost:8000/show_create_form_code",
        {model: model}).then(function(successResponse) {
          var modalUrl = "/app/projects/_source_code_viewer.html";
          $scope.code = successResponse.data.create_form;
          utils.openModal(modalUrl, $scope, 'lg');
        }, function(error) {
          console.log(error);
        });
    }

    $scope.showUpdateModalCode = showUpdateModalCode;
    function showUpdateModalCode(model) {
      function replacer(key, value) {
        if (typeof value === "boolean"||typeof value === "number") {
          return String(value);
        }
        return value;
      }

      model = JSON.stringify([model], replacer);

      $http.post("http://localhost:8000/show_update_form_code",
        {model: model}).then(function(successResponse) {
          var modalUrl = "/app/projects/_source_code_viewer.html";
          $scope.code = successResponse.data.update_form;
          utils.openModal(modalUrl, $scope, 'lg');
        }, function(error) {
          console.log(error);
        });
    }

    $scope.showListingTableCode = showListingTableCode;
    function showListingTableCode(model) {
      function replacer(key, value) {
        if (typeof value === "boolean"||typeof value === "number") {
          return String(value);
        }
        return value;
      }

      model = JSON.stringify([model], replacer);

      $http.post("http://localhost:8000/show_listing_table_code",
        {model: model}).then(function(successResponse) {
          var modalUrl = "/app/projects/_source_code_viewer.html";
          $scope.code = successResponse.data.listing_table;
          utils.openModal(modalUrl, $scope, 'lg');
        }, function(error) {
          console.log(error);
        });
    }

    /* jshint validthis: true */
    $scope.projectId = $routeParams.id;
    projectService.getProject($scope.projectId).then(function(response) {
      $scope.project = response;
      if ($scope.project.generating_data) {
        $scope.models = JSON.parse($scope.project.generating_data);
      } else {
        $scope.models = [];
      }
    });

    $scope.updateModel = function() {
      $scope.project.generating_data = JSON.stringify($scope.models);
      function replacer(key, value) {
        if (typeof value === "boolean"||typeof value === "number") {
          return String(value);
        }
        return value;
      }

      $scope.project.generating_data_refined =
        JSON.stringify($scope.models, replacer);

      $scope.projectCrud.updateModel($scope.project.id, $scope.project);

      $http.post("http://localhost:8000/build_project/" +
        $scope.project.id, {}).then(
          function(successResponse) {
            console.log(successResponse);
          }, function(errorResponse) {
            console.log(errorResponse);
          });
    }

    $scope.content = null;
    $scope.models = [];

    $scope.editMode = false;

    $scope.addModel = function() {
      $scope.models.push($scope.currentModel);
    }

    $scope.initCurrentModel = function() {
      $scope.currentModel = {
        name: "",
        attributes: [],
        relationships: []
      };
    }
    $scope.initCurrentModel();

    $scope.addModel = function() {
      $scope.models.push($scope.currentModel);
      $scope.initCurrentModel();
    }

    $scope.editModel = function(model) {
      if (!$scope.editMode) {
        $scope.currentModelBak = $scope.currentModel;
      }

      $scope.currentModel = model;
      $scope.editMode = true;
    }

    $scope.back = function() {
      $scope.currentModel = $scope.currentModelBak;
      $scope.editMode = false;
    }

    // Functions for the current model
    $scope.removeModel = function(model) {
      var modelIdx = $scope.models.indexOf(model);
      if (modelIdx >= 0) {
        SweetAlert.swal({
          title: "Delete " + model.name,
          text: "Are you sure?",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Delete",
          cancelButtonText: "Cancel",
          closeOnConfirm: true,
          closeOnCancel: true
        },
          function(isConfirm) {
            if (isConfirm) {
              $scope.models.splice(modelIdx, 1);
            }
          });
      }
    }

    // Functions for the current model
    $scope.removeAttribute = function(attribute) {
      var attrIdx = $scope.currentModel.attributes.indexOf(attribute);
      if (attrIdx >= 0) {
        SweetAlert.swal({
          title: "Delete " + attribute.name,
          text: "Are you sure?",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Delete",
          cancelButtonText: "Cancel",
          closeOnConfirm: true,
          closeOnCancel: true
        },
          function(isConfirm) {
            if (isConfirm) {
              $scope.currentModel.attributes.splice(attrIdx, 1);
            }
          });
      }
    }

    $scope.addAttribute = function() {
      for (var i = 0; i < $scope.currentModel.attributes.length; ++i) {
        $scope.currentModel.attributes[i].show = false;
      }

      $scope.currentModel.attributes.push({
        name: "",
        show: true,
        display_name: "",
        type: "",
        ui_type: "",
        hidden: "",
        constraints: {
          max: "",
          min: "",
          pattern: "",
          pattern_message: "",
          required: "",
          nullable: "",
          numeric: "",
          unique: "",
          email: "",
        }
      });
    };

    // Relationships
    $scope.addRelationship = function() {
      for (var i = 0; i < $scope.currentModel.relationships.length; ++i) {
        $scope.currentModel.relationships[i].show = false;
      }

      $scope.currentModel.relationships.push({
        show: true,
        type: "",
        with: "",
      });
    };

    $scope.removeRelationship = function(relationship) {
      var relationshipIdx =
        $scope.currentModel.relationships.indexOf(relationship);

      if (relationshipIdx >= 0) {
        SweetAlert.swal({
          title: "Delete " + relationship.with.name,
          text: "Are you sure?",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Delete",
          cancelButtonText: "Cancel",
          closeOnConfirm: true,
          closeOnCancel: true
        },

          function(isConfirm) {
            if (isConfirm) {
              $scope.currentModel.relationships.splice(relationshipIdx, 1);
              for (var i = 0; i < $scope.models.length; ++i) {
                if ($scope.models[i].name == relationship.with) {
                  for (var j = 0; j < $scope.models[i].relationships.length; ++j) {
                    var temp = $scope.models[i].relationships[j];
                    if (temp.with == $scope.currentModel.name) {
                      $scope.models[i].relationships.splice(j, 1);
                      break;
                    }
                  }
                }
              }
            }
          });
      }
    }

    $scope.saveToFile = function() {
      function replacer(key, value) {
        if (typeof value === "boolean"||typeof value === "number") {
          return String(value);
        }
        return value;
      }

      var data = new Blob([JSON.stringify($scope.models, replacer)], { type: 'text/plain;charset=utf-8' });
      FileSaver.saveAs(data, 'models.json');

      data = new Blob([JSON.stringify($scope.models)], { type: 'text/plain;charset=utf-8' });
      FileSaver.saveAs(data, 'models_js.json');
    }

    $scope.updateRelationship = function() {
      for(var i = 0; i < $scope.models.length; ++i) {
        for (var j = 0; j < $scope.currentModel.relationships.length; ++j) {
          var temp1 = $scope.currentModel.relationships[j];
          if (temp1.with != $scope.models[i].name) {
            continue;
          }

          var didUpdate = false;
          for (var x = 0; x < $scope.models[i].relationships.length; x++) {
            var temp2 = $scope.models[i].relationships[x];
            if (temp2.with == $scope.currentModel.name) {
              didUpdate = true;
              if (temp1.type == "many-to-many") {
                temp2.type = "many-to-many";
              } else if (temp1.type == "many-to-one") {
                temp2.type = "one-to-many";
              } else if (temp1.type == "one-to-many") {
                temp2.type = "many-to-one";
              } else if (temp1.type == "one-to-one") {
                temp2.type = "one-to-one";
              }
            }
          }

          if (!didUpdate) {
            if (temp1.type == "many-to-many") {
              $scope.models[i].relationships.push({
                show: true,
                type: "many-to-many",
                with: $scope.currentModel.name,
              });
            } else if (temp1.type == "many-to-one") {
              $scope.models[i].relationships.push({
                show: true,
                type: "one-to-many",
                with: $scope.currentModel.name,
              });
            } else if (temp1.type == "one-to-many") {
              $scope.models[i].relationships.push({
                show: true,
                type: "many-to-one",
                with: $scope.currentModel.name,
              });
            } else if (temp1.type == "one-to-one") {
              $scope.models[i].relationships.push({
                show: true,
                type: "one-to-one",
                with: $scope.currentModel.name,
              });
            }
          }
        }
      }
    }
  }
})();
