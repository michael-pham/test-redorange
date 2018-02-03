(function() {
  'use strict';
  angular.module('app.projects')
  .factory('projectModel', function($http, SweetAlert) {
    return {
      init: function(scope) {
        return {
          ctrlScope: scope,
          getList: {
            url: 'http://localhost:8000/projects',
            name: 'projects',
            param: {includes: []}
          },
          getSingle: {
            url: 'http://localhost:8000/projects',
            name: 'project',
            many_to_one: [],
            one_to_many: []
          },
          update: {
            url: 'http://localhost:8000/projects',
            name: 'project',
            modalUrl: '/app/projects/_cap_nhat_project_modal.html',
            successMessage: 'Cập nhật thành công project',
            errorMessage: 'Lỗi xảy ra trong quá trình cập nhật project'
          },
          create: {
            name: 'project',
            modalUrl: '/app/projects/_them_project_modal.html',
            successMessage: 'Tạo mới project thành công!',
            errorMessage: 'Sự cố xảy ra trong quá trình tạo mới project!',
            activeModalInstance: '',
            meta: {
              name: 'project',
              url: 'http://localhost:8000/projects',
              domestic: ["name", "generating_data", "generating_data_refined"],
              many_to_one: [],
              one_to_many: []
            }
          },
          delete: {
            url: "http://localhost:8000/projects",
            titleSweetAlert: "Xóa project!",
            textSweetAlert: "Dữ liệu không thể  khôi phục sau khi xóa!",
            successMessage: "Xóa project thành công",
            errorMessage: "Sự cố xảy ra trong quá trình xóa project!"
          }
        }
      }
    }
  });
})();
