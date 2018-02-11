(function() {
  'use strict';
  angular.module('app.chungLoaiBais')
  .factory('chungLoaiBaiModel', function($http, SweetAlert) {
    return {
      init: function(scope) {
        return {
          ctrlScope: scope,
          getList: {
            url: 'http://localhost:8000/chung_loai_bais',
            name: 'chungLoaiBais',
            param: {includes: []}
          },
          getSingle: {
            url: 'http://localhost:8000/chung_loai_bais',
            name: 'chungLoaiBai',
            many_to_one: [],
            one_to_many: []
          },
          update: {
            url: 'http://localhost:8000/chung_loai_bais',
            name: 'chungLoaiBai',
            modalUrl: '/app/chung_loai_bais/_cap_nhat_chung_loai_bai_modal.html',
            successMessage: 'Cập nhật thành công Chủng loại bài viết',
            errorMessage: 'Lỗi xảy ra trong quá trình cập nhật Chủng loại bài viết'
          },
          create: {
            name: 'modelName',
            modalUrl: '/app/model_names/_them_chung_loai_bai_modal.html',
            successMessage: 'Tạo mới Chủng loại bài viết thành công!',
            errorMessage: 'Sự cố xảy ra trong quá trình tạo mới Chủng loại bài viết!',
            activeModalInstance: '',
            meta: {
              name: 'chungLoaiBai',
              url: 'http://localhost:8000/chung_loai_bais',
              domestic: [ten, mo_ta, ],
              many_to_one: [],
              one_to_many: []
            }
          },
          delete: {
            url: "http://localhost:8000/chung_loai_bais",
            titleSweetAlert: "Xóa Chủng loại bài viết!",
            textSweetAlert: "Dữ liệu không thể  khôi phục sau khi xóa!",
            successMessage: "Xóa Chủng loại bài viết thành công",
            errorMessage: "Sự cố xảy ra trong quá trình xóa Chủng loại bài viết!"
          }
        }
      }
    }
  });
})();
