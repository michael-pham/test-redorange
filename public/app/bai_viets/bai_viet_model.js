(function() {
  'use strict';
  angular.module('app.baiViets')
  .factory('baiVietModel', function($http, SweetAlert) {
    return {
      init: function(scope) {
        return {
          ctrlScope: scope,
          getList: {
            url: 'http://localhost:8000/bai_viets',
            name: 'baiViets',
            param: {includes: []}
          },
          getSingle: {
            url: 'http://localhost:8000/bai_viets',
            name: 'baiViet',
            many_to_one: [],
            one_to_many: []
          },
          update: {
            url: 'http://localhost:8000/bai_viets',
            name: 'baiViet',
            modalUrl: '/app/bai_viets/_cap_nhat_bai_viet_modal.html',
            successMessage: 'Cập nhật thành công Bài viết',
            errorMessage: 'Lỗi xảy ra trong quá trình cập nhật Bài viết'
          },
          create: {
            name: 'modelName',
            modalUrl: '/app/model_names/_them_bai_viet_modal.html',
            successMessage: 'Tạo mới Bài viết thành công!',
            errorMessage: 'Sự cố xảy ra trong quá trình tạo mới Bài viết!',
            activeModalInstance: '',
            meta: {
              name: 'baiViet',
              url: 'http://localhost:8000/bai_viets',
              domestic: [tac_gia_bai_viet_id, noi_dung, tieu_de, trich_yeu, tinh_trang_bai_viet_id, tinh_trang_binh_luan_id, bai_viet_cha_id, thu_tu_tren_menu, chung_loai_bai_viet_id, so_luong_binh_luan, hinh_anh_dai_dien_url, hinh_anh_dai_dien_thumbnail_url, ],
              many_to_one: [],
              one_to_many: []
            }
          },
          delete: {
            url: "http://localhost:8000/bai_viets",
            titleSweetAlert: "Xóa Bài viết!",
            textSweetAlert: "Dữ liệu không thể  khôi phục sau khi xóa!",
            successMessage: "Xóa Bài viết thành công",
            errorMessage: "Sự cố xảy ra trong quá trình xóa Bài viết!"
          }
        }
      }
    }
  });
})();
