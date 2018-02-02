(function() {
  'use strict';
  angular.module('app.duLieuDangKys')
  .factory('duLieuDangKyModel', function($http, SweetAlert) {
    return {
      init: function(scope) {
        return {
          ctrlScope: scope,
          getList: {
            url: 'http://localhost:8000/du_lieu_dang_kys',
            name: 'duLieuDangKys',
            param: {includes: ['user', 'bieuMauChungTu']}
          },
          getSingle: {
            url: 'http://localhost:8000/du_lieu_dang_kys',
            name: 'duLieuDangKy',
            many_to_one: [],
            one_to_many: []
          },
          update: {
            url: 'http://localhost:8000/du_lieu_dang_kys',
            name: 'duLieuDangKy',
            modalUrl: '/app/du_lieu_dang_kys/_cap_nhat_du_lieu_dang_ky_modal.html',
            successMessage: 'Cập nhật thành công dữ liệu đăng ký',
            errorMessage: 'Lỗi xảy ra trong quá trình cập nhật dữ liệu đăng ký'
          },
          create: {
            name: 'duLieuDangKy',
            modalUrl: '/app/du_lieu_dang_kys/_them_du_lieu_dang_ky_modal.html',
            successMessage: 'Tạo mới dữ liệu đăng ký thành công!',
            errorMessage: 'Sự cố xảy ra trong quá trình tạo mới dữ liệu đăng ký!',
            activeModalInstance: '',
            meta: {
              name: 'duLieuDangKy',
              url: 'http://localhost:8000/du_lieu_dang_kys',
              domestic: ["user_id", "bieu_mau_chung_tu_id", "json_data"],
              many_to_one: [{
                url: 'http://localhost:8000/bieu_mau_chung_tus',
                name:'bieuMauChungTus'
              },
              {
                url: 'http://localhost:8000/users',
                name:'users'
              }],
              one_to_many: []
            }
          },
          delete: {
            url: "http://localhost:8000/du_lieu_dang_kys",
            titleSweetAlert: "Xóa dữ liệu đăng ký!",
            textSweetAlert: "Dữ liệu không thể  khôi phục sau khi xóa!",
            successMessage: "Xóa dữ liệu đăng ký thành công",
            errorMessage: "Sự cố xảy ra trong quá trình xóa dữ liệu đăng ký!"
          }
        }
      }
    }
  });
})();
