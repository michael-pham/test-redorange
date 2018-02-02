(function() {
  'use strict';
  angular.module('app.phamViVanBans')
  .factory('phamViVanBanModel', function($http, SweetAlert) {
    return {
      init: function(scope) {
        return {
          ctrlScope: scope,
          getList: {
            url: 'http://localhost:8000/pham_vi_van_bans',
            name: 'phamViVanBans',
            param: {includes: []}
          },
          getSingle: {
            url: 'http://localhost:8000/pham_vi_van_bans',
            name: 'phamViVanBan',
            many_to_one: [],
            one_to_many: []
          },
          update: {
            url: 'http://localhost:8000/pham_vi_van_bans',
            name: 'phamViVanBan',
            modalUrl: '/app/pham_vi_van_bans/_cap_nhat_pham_vi_van_ban_modal.html',
            successMessage: 'Cập nhật thành công phạm vi văn bản',
            errorMessage: 'Lỗi xảy ra trong quá trình cập nhật phạm vi văn bản'
          },
          create: {
            name: 'phamViVanBan',
            modalUrl: '/app/pham_vi_van_bans/_them_pham_vi_van_ban_modal.html',
            successMessage: 'Tạo mới phạm vi văn bản thành công!',
            errorMessage: 'Sự cố xảy ra trong quá trình tạo mới phạm vi văn bản!',
            activeModalInstance: '',
            meta: {
              name: 'phamViVanBan',
              url: 'http://localhost:8000/pham_vi_van_bans',
              domestic: ["ten", "ten_viet_tat"],
              many_to_one: [],
              one_to_many: []
            }
          },
          delete: {
            url: "http://localhost:8000/pham_vi_van_bans",
            titleSweetAlert: "Xóa phạm vi văn bản!",
            textSweetAlert: "Dữ liệu không thể  khôi phục sau khi xóa!",
            successMessage: "Xóa phạm vi văn bản thành công",
            errorMessage: "Sự cố xảy ra trong quá trình xóa phạm vi văn bản!"
          }
        }
      }
    }
  });
})();
