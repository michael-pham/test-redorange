(function() {
  'use strict';
  angular.module('app.linhVucVanBans')
  .factory('linhVucVanBanModel', function($http, SweetAlert) {
    return {
      init: function(scope) {
        return {
          ctrlScope: scope,
          getList: {
            url: 'http://localhost:8000/linh_vuc_van_bans',
            name: 'linhVucVanBans',
            param: {includes: []}
          },
          getSingle: {
            url: 'http://localhost:8000/linh_vuc_van_bans',
            name: 'linhVucVanBan',
            many_to_one: [],
            one_to_many: []
          },
          update: {
            url: 'http://localhost:8000/linh_vuc_van_bans',
            name: 'linhVucVanBan',
            modalUrl: '/app/linh_vuc_van_bans/_cap_nhat_linh_vuc_van_ban_modal.html',
            successMessage: 'Cập nhật thành công lĩnh vực văn bản',
            errorMessage: 'Lỗi xảy ra trong quá trình cập nhật lĩnh vực văn bản'
          },
          create: {
            name: 'linhVucVanBan',
            modalUrl: '/app/linh_vuc_van_bans/_them_linh_vuc_van_ban_modal.html',
            successMessage: 'Tạo mới lĩnh vực văn bản thành công!',
            errorMessage: 'Sự cố xảy ra trong quá trình tạo mới lĩnh vực văn bản!',
            activeModalInstance: '',
            meta: {
              name: 'linhVucVanBan',
              url: 'http://localhost:8000/linh_vuc_van_bans',
              domestic: ["ten", "ten_viet_tat"],
              many_to_one: [],
              one_to_many: []
            }
          },
          delete: {
            url: "http://localhost:8000/linh_vuc_van_bans",
            titleSweetAlert: "Xóa lĩnh vực văn bản!",
            textSweetAlert: "Dữ liệu không thể  khôi phục sau khi xóa!",
            successMessage: "Xóa lĩnh vực văn bản thành công",
            errorMessage: "Sự cố xảy ra trong quá trình xóa lĩnh vực văn bản!"
          }
        }
      }
    }
  });
})();
