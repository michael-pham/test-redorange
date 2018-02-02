(function() {
  'use strict';
  angular.module('app.pageSizes')
  .factory('pageSizeModel', function($http, SweetAlert) {
    return {
      init: function(scope) {
        return {
          ctrlScope: scope,
          getList: {
            url: 'http://localhost:8000/page_sizes',
            name: 'pageSizes',
            param: {includes: []}
          },
          getSingle: {
            url: 'http://localhost:8000/page_sizes',
            name: 'pageSize',
            many_to_one: [],
            one_to_many: []
          },
          update: {
            url: 'http://localhost:8000/page_sizes',
            name: 'pageSize',
            modalUrl: '/app/page_sizes/_cap_nhat_page_size_modal.html',
            successMessage: 'Cập nhật thành công loại giấy',
            errorMessage: 'Lỗi xảy ra trong quá trình cập nhật loại giấy'
          },
          create: {
            name: 'pageSize',
            modalUrl: '/app/page_sizes/_them_page_size_modal.html',
            successMessage: 'Tạo mới loại giấy thành công!',
            errorMessage: 'Sự cố xảy ra trong quá trình tạo mới loại giấy!',
            activeModalInstance: '',
            meta: {
              name: 'pageSize',
              url: 'http://localhost:8000/page_sizes',
              domestic: ["ky_hieu", "width", "height"],
              many_to_one: [],
              one_to_many: []
            }
          },
          delete: {
            url: "http://localhost:8000/page_sizes",
            titleSweetAlert: "Xóa loại giấy!",
            textSweetAlert: "Dữ liệu không thể  khôi phục sau khi xóa!",
            successMessage: "Xóa loại giấy thành công",
            errorMessage: "Sự cố xảy ra trong quá trình xóa loại giấy!"
          }
        }
      }
    }
  });
})();
