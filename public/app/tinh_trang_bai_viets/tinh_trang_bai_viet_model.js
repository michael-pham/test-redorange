(function() {
  'use strict';
  angular.module('app.tinhTrangBaiViets')
  .factory('tinhTrangBaiVietModel', function($http, SweetAlert) {
    return {
      init: function(scope) {
        return {
          ctrlScope: scope,
          getList: {
            url: 'http://localhost:8000/tinh_trang_bai_viets',
            name: 'tinhTrangBaiViets',
            param: {includes: []}
          },
          getSingle: {
            url: 'http://localhost:8000/tinh_trang_bai_viets',
            name: 'tinhTrangBaiViet',
            many_to_one: [],
            one_to_many: []
          },
          update: {
            url: 'http://localhost:8000/tinh_trang_bai_viets',
            name: 'tinhTrangBaiViet',
            modalUrl: '/app/tinh_trang_bai_viets/_cap_nhat_tinh_trang_bai_viet_modal.html',
            successMessage: 'Cập nhật thành công Tình trạng bài viết',
            errorMessage: 'Lỗi xảy ra trong quá trình cập nhật Tình trạng bài viết'
          },
          create: {
            name: 'modelName',
            modalUrl: '/app/model_names/_them_tinh_trang_bai_viet_modal.html',
            successMessage: 'Tạo mới Tình trạng bài viết thành công!',
            errorMessage: 'Sự cố xảy ra trong quá trình tạo mới Tình trạng bài viết!',
            activeModalInstance: '',
            meta: {
              name: 'tinhTrangBaiViet',
              url: 'http://localhost:8000/tinh_trang_bai_viets',
              domestic: [ten, mo_ta, ],
              many_to_one: [],
              one_to_many: []
            }
          },
          delete: {
            url: "http://localhost:8000/tinh_trang_bai_viets",
            titleSweetAlert: "Xóa Tình trạng bài viết!",
            textSweetAlert: "Dữ liệu không thể  khôi phục sau khi xóa!",
            successMessage: "Xóa Tình trạng bài viết thành công",
            errorMessage: "Sự cố xảy ra trong quá trình xóa Tình trạng bài viết!"
          }
        }
      }
    }
  });
})();
