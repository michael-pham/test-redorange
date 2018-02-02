(function() {
  'use strict';
  angular.module('app.truongDuLieus')
  .factory('truongDuLieuModel', function($http, SweetAlert) {
    return {
      init: function(scope) {
        return {
          ctrlScope: scope,
          getList: {
            url: 'http://localhost:8000/truong_du_lieus',
            name: 'truongDuLieus',
            param: {includes: []}
          },
          getSingle: {
            url: 'http://localhost:8000/truong_du_lieus',
            name: 'truongDuLieu',
            many_to_one: [],
            one_to_many: []
          },
          update: {
            url: 'http://localhost:8000/truong_du_lieus',
            name: 'truongDuLieu',
            modalUrl: '/app/truong_du_lieus/_cap_nhat_truong_du_lieu_modal.html',
            successMessage: 'Cập nhật thành công Trường dữ liệu',
            errorMessage: 'Lỗi xảy ra trong quá trình cập nhật Trường dữ liệu'
          },
          create: {
            name: 'truongDuLieu',
            modalUrl: '/app/truong_du_lieus/_them_truong_du_lieu_modal.html',
            successMessage: 'Tạo mới Trường dữ liệu thành công!',
            errorMessage: 'Sự cố xảy ra trong quá trình tạo mới Trường dữ liệu!',
            activeModalInstance: '',
            meta: {
              name: 'truongDuLieu',
              url: 'http://localhost:8000/truong_du_lieus',
              domestic: ["ten", "ky_hieu", "bieu_mau_chung_tu_id", "le_trai", "le_tren", "font_style", "font_size", "font_family"],
              many_to_one: [],
              one_to_many: []
            }
          },
          delete: {
            url: "http://localhost:8000/truong_du_lieus",
            titleSweetAlert: "Xóa Trường dữ liệu!",
            textSweetAlert: "Dữ liệu không thể  khôi phục sau khi xóa!",
            successMessage: "Xóa Trường dữ liệu thành công",
            errorMessage: "Sự cố xảy ra trong quá trình xóa Trường dữ liệu!"
          }
        }
      }
    }
  });
})();
