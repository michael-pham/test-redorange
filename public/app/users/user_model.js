(function() {
  'use strict';
  angular.module('app.users')
  .factory('userModel', function($http, SweetAlert) {
    return {
      init: function(scope) {
        return {
          ctrlScope: scope,
          getList: {
            url: 'http://localhost:8000/users',
            name: 'users',
            param: {includes: ['roles']}
          },
          getSingle: {
            url: 'http://localhost:8000/users',
            name: 'user',
            many_to_one: [],
            one_to_many: []
          },
          update: {
            url: 'http://localhost:8000/users',
            name: 'user',
            modalUrl: '/app/users/_cap_nhat_user_modal.html',
            successMessage: 'Cập nhật thành công người sử dụng',
            errorMessage: 'Lỗi xảy ra trong quá trình cập nhật người sử dụng'
          },
          create: {
            name: 'user',
            modalUrl: '/app/users/_them_user_modal.html',
            successMessage: 'Tạo mới người sử dụng thành công!',
            errorMessage: 'Sự cố xảy ra trong quá trình tạo mới người sử dụng!',
            activeModalInstance: '',
            meta: {
              name: 'user',
              url: 'http://localhost:8000/users',
              domestic: ["name", "email", "password"],
              many_to_one: [],
              one_to_many: []
            }
          },
          delete: {
            url: "http://localhost:8000/users",
            titleSweetAlert: "Xóa người sử dụng!",
            textSweetAlert: "Dữ liệu không thể  khôi phục sau khi xóa!",
            successMessage: "Xóa người sử dụng thành công",
            errorMessage: "Sự cố xảy ra trong quá trình xóa người sử dụng!"
          }
        }
      }
    }
  });
})();
