(function() {
  'use strict';
  angular.module('app.loaiVanBans')
  .factory('loaiVanBanModel', function($http, SweetAlert) {
    return {
      init: function(scope) {
        return {
          ctrlScope: scope,
          getList: {
            url: 'http://localhost:8000/loai_van_bans',
            name: 'loaiVanBans',
            param: {includes: []}
          },
          getSingle: {
            url: 'http://localhost:8000/loai_van_bans',
            name: 'loaiVanBan',
            many_to_one: [],
            one_to_many: []
          },
          update: {
            url: 'http://localhost:8000/loai_van_bans',
            name: 'loaiVanBan',
            modalUrl: '/app/loai_van_bans/_cap_nhat_loai_van_ban_modal.html',
            successMessage: 'Cập nhật thành công loại văn bản',
            errorMessage: 'Lỗi xảy ra trong quá trình cập nhật loại văn bản'
          },
          create: {
            name: 'loaiVanBan',
            modalUrl: '/app/loai_van_bans/_them_loai_van_ban_modal.html',
            successMessage: 'Tạo mới loại văn bản thành công!',
            errorMessage: 'Sự cố xảy ra trong quá trình tạo mới loại văn bản!',
            activeModalInstance: '',
            meta: {
              name: 'loaiVanBan',
              url: 'http://localhost:8000/loai_van_bans',
              domestic: ["ten", "ten_viet_tat"],
              many_to_one: [],
              one_to_many: []
            }
          },
          delete: {
            url: "http://localhost:8000/loai_van_bans",
            titleSweetAlert: "Xóa loại văn bản!",
            textSweetAlert: "Dữ liệu không thể  khôi phục sau khi xóa!",
            successMessage: "Xóa loại văn bản thành công",
            errorMessage: "Sự cố xảy ra trong quá trình xóa loại văn bản!"
          }
        }
      }
    }
  });
})();
