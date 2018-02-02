(function() {
  'use strict';
  angular.module('app.permissions')
  .factory('permissionModel', function($http, SweetAlert) {
    return {
      init: function(scope) {
        return {
          ctrlScope: scope,
          getList: {
            url: 'http://localhost:8000/permissions',
            name: 'permissions',
            param: {includes: []}
          },
          getSingle: {
            url: 'http://localhost:8000/permissions',
            name: 'permission',
            many_to_one: [],
            one_to_many: []
          },
          update: {
            url: 'http://localhost:8000/permissions',
            name: 'permission',
            modalUrl: '/app/permissions/_cap_nhat_permission_modal.html',
            successMessage: 'Cập nhật thành công quyền',
            errorMessage: 'Lỗi xảy ra trong quá trình cập nhật quyền'
          },
          create: {
            name: 'permission',
            modalUrl: '/app/permissions/_them_permission_modal.html',
            successMessage: 'Tạo mới quyền thành công!',
            errorMessage: 'Sự cố xảy ra trong quá trình tạo mới quyền!',
            activeModalInstance: '',
            meta: {
              name: 'permission',
              url: 'http://localhost:8000/permissions',
              domestic: ["name", "display_name", "description"],
              many_to_one: [],
              one_to_many: []
            }
          },
          delete: {
            url: "http://localhost:8000/permissions",
            titleSweetAlert: "Xóa quyền!",
            textSweetAlert: "Dữ liệu không thể  khôi phục sau khi xóa!",
            successMessage: "Xóa quyền thành công",
            errorMessage: "Sự cố xảy ra trong quá trình xóa quyền!"
          }
        }
      }
    }
  });
})();
