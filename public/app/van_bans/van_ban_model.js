(function() {
  'use strict';
  angular.module('app.vanBans')
  .factory('vanBanModel', function($http, SweetAlert) {
    return {
      init: function(scope) {
        return {
          ctrlScope: scope,
          getList: {
            url: 'http://localhost:8000/van_bans',
            name: 'vanBans',
            param: {includes: ['loaiVanBan', 'coQuanBanHanh']}
          },
          getSingle: {
            url: 'http://localhost:8000/van_bans',
            name: 'vanBan',
            many_to_one: [],
            one_to_many: []
          },
          update: {
            url: 'http://localhost:8000/van_bans',
            name: 'vanBan',
            modalUrl: '/app/van_bans/_cap_nhat_van_ban_modal.html',
            successMessage: 'Cập nhật thành công văn bản',
            errorMessage: 'Lỗi xảy ra trong quá trình cập nhật văn bản'
          },
          create: {
            name: 'vanBan',
            modalUrl: '/app/van_bans/_them_van_ban_modal.html',
            successMessage: 'Tạo mới văn bản thành công!',
            errorMessage: 'Sự cố xảy ra trong quá trình tạo mới văn bản!',
            activeModalInstance: '',
            meta: {
              name: 'vanBan',
              url: 'http://localhost:8000/van_bans',
              domestic: ["ten", "loai_van_ban_id", "tinh_trang_van_ban_id", "uri",
                "co_quan_ban_hanh_id", "ngay_ban_hanh", "ngay_co_hieu_luc",
                  "so_luong_bang_in_cho_phep", "so_lan_in", "mo_ta", "so_ky_hieu",
                    "con_hieu_luc", "ngay_het_hieu_luc", "pham_vi_van_ban_id",
                      "nganh_id", "linh_vuc_van_ban_id", "file_uri", "file_id"],
              many_to_one: [
                {
                  url: "http://localhost:8000/loai_van_bans",
                  name: "loaiVanBans"
                },
                {
                  url: "http://localhost:8000/tinh_trang_van_bans",
                  name: "tinhTrangVanBans"
                },
                {
                  url: "http://localhost:8000/co_quan_ban_hanhs",
                  name: "coQuanBanHanhs"
                },
                {
                  url: "http://localhost:8000/pham_vi_van_bans",
                  name: "phamViVanBans"
                },
                {
                  url: "http://localhost:8000/nganhs",
                  name: "nganhs"
                },
                {
                  url: "http://localhost:8000/linh_vuc_van_bans",
                  name: "linhVucVanBans"
                }
              ],
              one_to_many: []
            }
          },
          delete: {
            url: "http://localhost:8000/van_bans",
            titleSweetAlert: "Xóa văn bản!",
            textSweetAlert: "Dữ liệu không thể  khôi phục sau khi xóa!",
            successMessage: "Xóa văn bản thành công",
            errorMessage: "Sự cố xảy ra trong quá trình xóa văn bản!"
          }
        }
      }
    }
  });
})();
