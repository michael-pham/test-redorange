(function() {
  'use strict';
  angular.module('app.bieuMauChungTus')
  .factory('bieuMauChungTuModel', function($http, SweetAlert) {
    return {
      init: function(scope) {
        return {
          ctrlScope: scope,
          getList: {
            url: 'http://localhost:8000/bieu_mau_chung_tus',
            name: 'bieuMauChungTus',
            param: {includes: []}
          },
          getSingle: {
            url: 'http://localhost:8000/bieu_mau_chung_tus',
            name: 'bieuMauChungTu',
            many_to_one: ["mayIn", "pageSize"],
            one_to_many: []
          },
          update: {
            url: 'http://localhost:8000/bieu_mau_chung_tus',
            name: 'bieuMauChungTu',
            modalUrl: '/app/bieu_mau_chung_tus/_cap_nhat_bieu_mau_chung_tu_modal.html',
            successMessage: 'Cập nhật thành công biểu mẫu chứng từ',
            errorMessage: 'Lỗi xảy ra trong quá trình cập nhật biểu mẫu chứng từ'
          },
          create: {
            name: 'bieuMauChungTu',
            modalUrl: '/app/bieu_mau_chung_tus/_them_bieu_mau_chung_tu_modal.html',
            successMessage: 'Tạo mới biểu mẫu chứng từ thành công!',
            errorMessage: 'Sự cố xảy ra trong quá trình tạo mới biểu mẫu chứng từ!',
            activeModalInstance: '',
            meta: {
              name: 'bieuMauChungTu',
              url: 'http://localhost:8000/bieu_mau_chung_tus',
              domestic: ["ten", "image_uri", "image_id", "page_size_id", "may_in_id"],
              many_to_one: [{
                url: "http://localhost:8000/may_ins",
                name: "mayIns"
              },
              {
                url: "http://localhost:8000/page_sizes",
                name: "pageSizes"
              }
            ],
              one_to_many: []
            }
          },
          delete: {
            url: "http://localhost:8000/bieu_mau_chung_tus",
            titleSweetAlert: "Xóa biểu mẫu chứng từ!",
            textSweetAlert: "Dữ liệu không thể  khôi phục sau khi xóa!",
            successMessage: "Xóa biểu mẫu chứng từ thành công",
            errorMessage: "Sự cố xảy ra trong quá trình xóa biểu mẫu chứng từ!"
          }
        }
      }
    }
  });
})();
