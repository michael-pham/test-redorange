(function() {
  'use strict';
  angular.module('app.modelSpecifiers')
  .factory('modelSpecifierModel', function($http, SweetAlert) {
    return {
      init: function(scope) {
        return {
          ctrlScope: scope,
          getList: {
            url: 'http://localhost:8000/model_specifiers',
            name: 'modelSpecifiers',
            param: {includes: []}
          },
          getSingle: {
            url: 'http://localhost:8000/model_specifiers',
            name: 'modelSpecifier',
            many_to_one: [],
            one_to_many: []
          },
          update: {
            url: 'http://localhost:8000/model_specifiers',
            name: 'modelSpecifier',
            modalUrl: '/app/model_specifiers/_cap_nhat_model_specifier_modal.html',
            successMessage: 'Cập nhật thành công máy in',
            errorMessage: 'Lỗi xảy ra trong quá trình cập nhật máy in'
          },
          create: {
            name: 'modelSpecifier',
            modalUrl: '/app/model_specifiers/_them_model_specifier_modal.html',
            successMessage: 'Tạo mới máy in thành công!',
            errorMessage: 'Sự cố xảy ra trong quá trình tạo mới máy in!',
            activeModalInstance: '',
            meta: {
              name: 'modelSpecifier',
              url: 'http://localhost:8000/model_specifiers',
              domestic: ["ten", "ten_viet_tat"],
              many_to_one: [],
              one_to_many: []
            }
          },
          delete: {
            url: "http://localhost:8000/model_specifiers",
            titleSweetAlert: "Xóa máy in!",
            textSweetAlert: "Dữ liệu không thể  khôi phục sau khi xóa!",
            successMessage: "Xóa máy in thành công",
            errorMessage: "Sự cố xảy ra trong quá trình xóa máy in!"
          }
        }
      }
    }
  });
})();
