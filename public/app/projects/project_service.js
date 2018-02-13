(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('projectService', projectService);

    /* @ngInject */
    function projectService($http, $location, $q, exception, logger, projectModel) {
        var service = {
            getProjects: getProjects,
            resetProjectParams: resetProjectParams,
            openCreateForm: openCreateForm,
            submitCreateForm: submitCreateForm,
            openUpdateForm: openUpdateForm,
            submitUpdateForm: submitUpdateForm,
        };

        return service;

        function resetProjectParams() {
          return {
            pagination: {limit: 5, page: 0},
            created_at_range: {startDate: "", endDate: ""},
            updated_at_range: {startDate: "", endDate: ""},
            project_name: "",
            tinh_trang_id: ""
          }
        }

        function getProjects(projectParams) {
          $scope.projectParams = {};
          $scope.projectParams.updated_at_range = {startDate: null, endDate: null};
          $scope.projectParams.created_at_range = {startDate: null, endDate: null};

          var metaParams = [];
          metaParams.push(["hieu_luc_den_ngay", co_hieu_luc_sau_ngay, "gt"]);
          metaParams.push(["hieu_luc_den_ngay", co_hieu_luc_truoc_ngay, "lt"]);

          metaParams.push(["khach_hang_id", $scope.search.khach_hang_id, "eq"]);
          metaParams.push(["dich_vu_id", $scope.search.dich_vu_id, "eq"]);
          metaParams.push(["loai_hop_dong_id", $scope.search.loai_hop_dong_id, "eq"]);


          $scope.projectParams.pagination = {limit: 5, page: 0};
          var params = Utils.makeParams.filters(metaParams) + "&" + Utils.makeParams.pagination($scope.pagination);

          return $http.get("/projects?" + $.param(projectParams))
        }

        function openUpdateForm() {

        }

        function submitUpdateForm() {

        }

        function openCreateForm() {
        }

        function openCreateForm() {

        }
    }
})();
