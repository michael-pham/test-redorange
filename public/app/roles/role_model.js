(function() {
  'use strict';
  angular.module('app.roles')
  .factory('roleModel', function($http, SweetAlert) {
    return {
      init: function(scope) {
        return {
          ctrlScope: scope,
          getList: {
            url: 'http://localhost:8000/roles',
            name: 'roles',
            param: {includes: ['permissions']}
          },
          getSingle: {
            url: 'http://localhost:8000/roles',
            name: 'role',
            many_to_one: [],
            one_to_many: []
          },
          update: {
            url: 'http://localhost:8000/roles',
            name: 'role',
            modalUrl: '/app/roles/_cap_nhat_role_modal.html',
            successMessage: 'Cập nhật thành công vai trò',
            errorMessage: 'Lỗi xảy ra trong quá trình cập nhật vai trò'
          },
          create: {
            name: 'role',
            modalUrl: '/app/roles/_them_role_modal.html',
            successMessage: 'Tạo mới vai trò thành công!',
            errorMessage: 'Sự cố xảy ra trong quá trình tạo mới vai trò!',
            activeModalInstance: '',
            meta: {
              name: 'role',
              url: 'http://localhost:8000/roles',
              domestic: ["name", "display_name", "description"],
              many_to_one: [],
              one_to_many: []
            }
          },
          delete: {
            url: "http://localhost:8000/roles",
            titleSweetAlert: "Xóa vai trò!",
            textSweetAlert: "Dữ liệu không thể  khôi phục sau khi xóa!",
            successMessage: "Xóa vai trò thành công",
            errorMessage: "Sự cố xảy ra trong quá trình xóa vai trò!"
          }
        }
      }
    }
  });
})();
