(function() {
  'use strict';
  angular.module('app.binhLuans')
  .factory('binhLuanModel', function($http, SweetAlert) {
    return {
      init: function(scope) {
        return {
          ctrlScope: scope,
          getList: {
            url: 'http://localhost:8000/binh_luans',
            name: 'binhLuans',
            param: {includes: []}
          },
          getSingle: {
            url: 'http://localhost:8000/binh_luans',
            name: 'binhLuan',
            many_to_one: [],
            one_to_many: []
          },
          update: {
            url: 'http://localhost:8000/binh_luans',
            name: 'binhLuan',
            modalUrl: '/app/binh_luans/_cap_nhat_binh_luan_modal.html',
            successMessage: 'Cập nhật thành công Bình luận',
            errorMessage: 'Lỗi xảy ra trong quá trình cập nhật Bình luận'
          },
          create: {
            name: 'modelName',
            modalUrl: '/app/model_names/_them_binh_luan_modal.html',
            successMessage: 'Tạo mới Bình luận thành công!',
            errorMessage: 'Sự cố xảy ra trong quá trình tạo mới Bình luận!',
            activeModalInstance: '',
            meta: {
              name: 'binhLuan',
              url: 'http://localhost:8000/binh_luans',
              domestic: [bai_viet_id, nguoi_binh_luan_id, ten_nguoi_binh_luan, url_nguoi_binh_luan, ip_nguoi_binh_luan, noi_dung_binh_luan, binh_luan_cha_id, binh_luan_duoc_chap_nhan, ],
              many_to_one: [],
              one_to_many: []
            }
          },
          delete: {
            url: "http://localhost:8000/binh_luans",
            titleSweetAlert: "Xóa Bình luận!",
            textSweetAlert: "Dữ liệu không thể  khôi phục sau khi xóa!",
            successMessage: "Xóa Bình luận thành công",
            errorMessage: "Sự cố xảy ra trong quá trình xóa Bình luận!"
          }
        }
      }
    }
  });
})();
