(function() {
  'use strict';
  angular.module('app.fileDinhKemBaiViets')
  .factory('fileDinhKemBaiVietModel', function($http, SweetAlert) {
    return {
      init: function(scope) {
        return {
          ctrlScope: scope,
          getList: {
            url: 'http://localhost:8000/file_dinh_kem_bai_viets',
            name: 'fileDinhKemBaiViets',
            param: {includes: []}
          },
          getSingle: {
            url: 'http://localhost:8000/file_dinh_kem_bai_viets',
            name: 'fileDinhKemBaiViet',
            many_to_one: [],
            one_to_many: []
          },
          update: {
            url: 'http://localhost:8000/file_dinh_kem_bai_viets',
            name: 'fileDinhKemBaiViet',
            modalUrl: '/app/file_dinh_kem_bai_viets/_cap_nhat_file_dinh_kem_bai_viet_modal.html',
            successMessage: 'Cập nhật thành công File đính kèm trong bài viết',
            errorMessage: 'Lỗi xảy ra trong quá trình cập nhật File đính kèm trong bài viết'
          },
          create: {
            name: 'modelName',
            modalUrl: '/app/model_names/_them_file_dinh_kem_bai_viet_modal.html',
            successMessage: 'Tạo mới File đính kèm trong bài viết thành công!',
            errorMessage: 'Sự cố xảy ra trong quá trình tạo mới File đính kèm trong bài viết!',
            activeModalInstance: '',
            meta: {
              name: 'fileDinhKemBaiViet',
              url: 'http://localhost:8000/file_dinh_kem_bai_viets',
              domestic: [bai_viet_id, ten_file, file_url, ],
              many_to_one: [],
              one_to_many: []
            }
          },
          delete: {
            url: "http://localhost:8000/file_dinh_kem_bai_viets",
            titleSweetAlert: "Xóa File đính kèm trong bài viết!",
            textSweetAlert: "Dữ liệu không thể  khôi phục sau khi xóa!",
            successMessage: "Xóa File đính kèm trong bài viết thành công",
            errorMessage: "Sự cố xảy ra trong quá trình xóa File đính kèm trong bài viết!"
          }
        }
      }
    }
  });
})();
