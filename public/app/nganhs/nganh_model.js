(function() {
  'use strict';
  angular.module('app.nganhs')
  .factory('nganhModel', function($http, SweetAlert) {
    return {
      init: function(scope) {
        return {
          ctrlScope: scope,
          getList: {
            url: 'http://localhost:8000/nganhs',
            name: 'nganhs',
            param: {includes: []}
          },
          getSingle: {
            url: 'http://localhost:8000/nganhs',
            name: 'nganh',
            many_to_one: [],
            one_to_many: []
          },
          update: {
            url: 'http://localhost:8000/nganhs',
            name: 'nganh',
            modalUrl: '/app/nganhs/_cap_nhat_nganh_modal.html',
            successMessage: 'Cập nhật thành công ngành',
            errorMessage: 'Lỗi xảy ra trong quá trình cập nhật ngành'
          },
          create: {
            name: 'nganh',
            modalUrl: '/app/nganhs/_them_nganh_modal.html',
            successMessage: 'Tạo mới ngành thành công!',
            errorMessage: 'Sự cố xảy ra trong quá trình tạo mới ngành!',
            activeModalInstance: '',
            meta: {
              name: 'nganh',
              url: 'http://localhost:8000/nganhs',
              domestic: ["ten", "tang_id", "cong_ty_id", "loai_nganh_id"],
              many_to_one: [],
              one_to_many: []
            }
          },
          delete: {
            url: "http://localhost:8000/nganhs",
            titleSweetAlert: "Xóa ngành!",
            textSweetAlert: "Dữ liệu không thể  khôi phục sau khi xóa!",
            successMessage: "Xóa ngành thành công",
            errorMessage: "Sự cố xảy ra trong quá trình xóa ngành!"
          }
        }
      }
    }
  });
})();
