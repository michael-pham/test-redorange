(function() {
  'use strict';
  angular.module('app.coQuanBanHanhs')
  .factory('coQuanBanHanhModel', function($http, SweetAlert) {
    return {
      init: function(scope) {
        return {
          ctrlScope: scope,
          getList: {
            url: 'http://localhost:8000/co_quan_ban_hanhs',
            name: 'coQuanBanHanhs',
            param: {includes: []}
          },
          getSingle: {
            url: 'http://localhost:8000/co_quan_ban_hanhs',
            name: 'coQuanBanHanh',
            many_to_one: [],
            one_to_many: []
          },
          update: {
            url: 'http://localhost:8000/co_quan_ban_hanhs',
            name: 'coQuanBanHanh',
            modalUrl: '/app/co_quan_ban_hanhs/_cap_nhat_co_quan_ban_hanh_modal.html',
            successMessage: 'Cập nhật thành công cơ quan ban hành',
            errorMessage: 'Lỗi xảy ra trong quá trình cập nhật cơ quan ban hành'
          },
          create: {
            name: 'coQuanBanHanh',
            modalUrl: '/app/co_quan_ban_hanhs/_them_co_quan_ban_hanh_modal.html',
            successMessage: 'Tạo mới cơ quan ban hành thành công!',
            errorMessage: 'Sự cố xảy ra trong quá trình tạo mới cơ quan ban hành!',
            activeModalInstance: '',
            meta: {
              name: 'coQuanBanHanh',
              url: 'http://localhost:8000/co_quan_ban_hanhs',
              domestic: ["ten", "ten_viet_tat"],
              many_to_one: [],
              one_to_many: []
            }
          },
          delete: {
            url: "http://localhost:8000/co_quan_ban_hanhs",
            titleSweetAlert: "Xóa cơ quan ban hành!",
            textSweetAlert: "Dữ liệu không thể  khôi phục sau khi xóa!",
            successMessage: "Xóa cơ quan ban hành thành công",
            errorMessage: "Sự cố xảy ra trong quá trình xóa cơ quan ban hành!"
          }
        }
      }
    }
  });
})();
