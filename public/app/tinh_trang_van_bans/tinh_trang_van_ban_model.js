(function() {
  'use strict';
  angular.module('app.tinhTrangVanBans')
  .factory('tinhTrangVanBanModel', function($http, SweetAlert) {
    return {
      init: function(scope) {
        return {
          ctrlScope: scope,
          getList: {
            url: 'http://localhost:8000/tinh_trang_van_bans',
            name: 'tinhTrangVanBans',
            param: {includes: []}
          },
          getSingle: {
            url: 'http://localhost:8000/tinh_trang_van_bans',
            name: 'tinhTrangVanBan',
            many_to_one: [],
            one_to_many: []
          },
          update: {
            url: 'http://localhost:8000/tinh_trang_van_bans',
            name: 'tinhTrangVanBan',
            modalUrl: '/app/tinh_trang_van_bans/_cap_nhat_tinh_trang_van_ban_modal.html',
            successMessage: 'Cập nhật thành công tình trạng văn bản',
            errorMessage: 'Lỗi xảy ra trong quá trình cập nhật tình trạng văn bản'
          },
          create: {
            name: 'tinhTrangVanBan',
            modalUrl: '/app/tinh_trang_van_bans/_them_tinh_trang_van_ban_modal.html',
            successMessage: 'Tạo mới tình trạng văn bản thành công!',
            errorMessage: 'Sự cố xảy ra trong quá trình tạo mới tình trạng văn bản!',
            activeModalInstance: '',
            meta: {
              name: 'tinhTrangVanBan',
              url: 'http://localhost:8000/tinh_trang_van_bans',
              domestic: ["ten", "ten_viet_tat"],
              many_to_one: [],
              one_to_many: []
            }
          },
          delete: {
            url: "http://localhost:8000/tinh_trang_van_bans",
            titleSweetAlert: "Xóa tình trạng văn bản!",
            textSweetAlert: "Dữ liệu không thể  khôi phục sau khi xóa!",
            successMessage: "Xóa tình trạng văn bản thành công",
            errorMessage: "Sự cố xảy ra trong quá trình xóa tình trạng văn bản!"
          }
        }
      }
    }
  });
})();
