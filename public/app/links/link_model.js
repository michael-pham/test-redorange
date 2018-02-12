(function() {
  'use strict';
  angular.module('app.links')
  .factory('linkModel', function($http, SweetAlert) {
    return {
      init: function(scope) {
        return {
          ctrlScope: scope,
          getList: {
            url: 'http://localhost:8000/links',
            name: 'links',
            param: {includes: []}
          },
          getSingle: {
            url: 'http://localhost:8000/links',
            name: 'link',
            many_to_one: [],
            one_to_many: []
          },
          update: {
            url: 'http://localhost:8000/links',
            name: 'link',
            modalUrl: '/app/links/_cap_nhat_link_modal.html',
            successMessage: 'Cập nhật thành công Đường dẫn',
            errorMessage: 'Lỗi xảy ra trong quá trình cập nhật Đường dẫn'
          },
          create: {
            name: 'modelName',
            modalUrl: '/app/model_names/_them_link_modal.html',
            successMessage: 'Tạo mới Đường dẫn thành công!',
            errorMessage: 'Sự cố xảy ra trong quá trình tạo mới Đường dẫn!',
            activeModalInstance: '',
            meta: {
              name: 'link',
              url: 'http://localhost:8000/links',
              domestic: [link_url, link_name, link_image, link_target_id, link_description, link_visible, link_owner, link_click_count, ],
              many_to_one: [],
              one_to_many: []
            }
          },
          delete: {
            url: "http://localhost:8000/links",
            titleSweetAlert: "Xóa Đường dẫn!",
            textSweetAlert: "Dữ liệu không thể  khôi phục sau khi xóa!",
            successMessage: "Xóa Đường dẫn thành công",
            errorMessage: "Sự cố xảy ra trong quá trình xóa Đường dẫn!"
          }
        }
      }
    }
  });
})();
