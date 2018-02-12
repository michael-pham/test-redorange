(function() {
  'use strict';
  angular.module('app.tinhTrangBinhLuans')
  .factory('tinhTrangBinhLuanModel', function($http, SweetAlert) {
    return {
      init: function(scope) {
        return {
          ctrlScope: scope,
          getList: {
            url: 'http://localhost:8000/tinh_trang_binh_luans',
            name: 'tinhTrangBinhLuans',
            param: {includes: []}
          },
          getSingle: {
            url: 'http://localhost:8000/tinh_trang_binh_luans',
            name: 'tinhTrangBinhLuan',
            many_to_one: [],
            one_to_many: []
          },
          update: {
            url: 'http://localhost:8000/tinh_trang_binh_luans',
            name: 'tinhTrangBinhLuan',
            modalUrl: '/app/tinh_trang_binh_luans/_cap_nhat_tinh_trang_binh_luan_modal.html',
            successMessage: 'Cập nhật thành công Tình trạng bình luận',
            errorMessage: 'Lỗi xảy ra trong quá trình cập nhật Tình trạng bình luận'
          },
          create: {
            name: 'modelName',
            modalUrl: '/app/model_names/_them_tinh_trang_binh_luan_modal.html',
            successMessage: 'Tạo mới Tình trạng bình luận thành công!',
            errorMessage: 'Sự cố xảy ra trong quá trình tạo mới Tình trạng bình luận!',
            activeModalInstance: '',
            meta: {
              name: 'tinhTrangBinhLuan',
              url: 'http://localhost:8000/tinh_trang_binh_luans',
              domestic: [ten, mo_ta, ],
              many_to_one: [],
              one_to_many: []
            }
          },
          delete: {
            url: "http://localhost:8000/tinh_trang_binh_luans",
            titleSweetAlert: "Xóa Tình trạng bình luận!",
            textSweetAlert: "Dữ liệu không thể  khôi phục sau khi xóa!",
            successMessage: "Xóa Tình trạng bình luận thành công",
            errorMessage: "Sự cố xảy ra trong quá trình xóa Tình trạng bình luận!"
          }
        }
      }
    }
  });
})();
