(function() {
  'use strict';
  angular.module('app.linkTargets')
  .factory('linkTargetModel', function($http, SweetAlert) {
    return {
      init: function(scope) {
        return {
          ctrlScope: scope,
          getList: {
            url: 'http://localhost:8000/link_targets',
            name: 'linkTargets',
            param: {includes: []}
          },
          getSingle: {
            url: 'http://localhost:8000/link_targets',
            name: 'linkTarget',
            many_to_one: [],
            one_to_many: []
          },
          update: {
            url: 'http://localhost:8000/link_targets',
            name: 'linkTarget',
            modalUrl: '/app/link_targets/_cap_nhat_link_target_modal.html',
            successMessage: 'Cập nhật thành công Đối tượng trỏ tới của đường dẫn',
            errorMessage: 'Lỗi xảy ra trong quá trình cập nhật Đối tượng trỏ tới của đường dẫn'
          },
          create: {
            name: 'modelName',
            modalUrl: '/app/model_names/_them_link_target_modal.html',
            successMessage: 'Tạo mới Đối tượng trỏ tới của đường dẫn thành công!',
            errorMessage: 'Sự cố xảy ra trong quá trình tạo mới Đối tượng trỏ tới của đường dẫn!',
            activeModalInstance: '',
            meta: {
              name: 'linkTarget',
              url: 'http://localhost:8000/link_targets',
              domestic: [name, description, ],
              many_to_one: [],
              one_to_many: []
            }
          },
          delete: {
            url: "http://localhost:8000/link_targets",
            titleSweetAlert: "Xóa Đối tượng trỏ tới của đường dẫn!",
            textSweetAlert: "Dữ liệu không thể  khôi phục sau khi xóa!",
            successMessage: "Xóa Đối tượng trỏ tới của đường dẫn thành công",
            errorMessage: "Sự cố xảy ra trong quá trình xóa Đối tượng trỏ tới của đường dẫn!"
          }
        }
      }
    }
  });
})();
