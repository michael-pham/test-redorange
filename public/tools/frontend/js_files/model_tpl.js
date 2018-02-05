(function() {
  'use strict';
  angular.module('app.{{uncapitalsed_model_name}}s')
  .factory('{{uncapitalsed_model_name}}Model', function($http, SweetAlert) {
    return {
      init: function(scope) {
        return {
          ctrlScope: scope,
          getList: {
            url: 'http://localhost:8000/{{snake_case_model_name}}s',
            name: '{{uncapitalsed_model_name}}s',
            param: {includes: []}
          },
          getSingle: {
            url: 'http://localhost:8000/{{snake_case_model_name}}s',
            name: '{{uncapitalised_model_name}}',
            many_to_one: [],
            one_to_many: []
          },
          update: {
            url: 'http://localhost:8000/{{snake_case_model_name}}s',
            name: '{{uncapitalsed_model_name}}',
            modalUrl: '/app/{{snake_case_model_name}}s/_cap_nhat_{{snake_case_model_name}}_modal.html',
            successMessage: 'Cập nhật thành công {{model_display_name}}',
            errorMessage: 'Lỗi xảy ra trong quá trình cập nhật {{model_display_name}}'
          },
          create: {
            name: 'modelName',
            modalUrl: '/app/model_names/_them_{{snake_case_model_name}}_modal.html',
            successMessage: 'Tạo mới {{model_display_name}} thành công!',
            errorMessage: 'Sự cố xảy ra trong quá trình tạo mới {{model_display_name}}!',
            activeModalInstance: '',
            meta: {
              name: '{{uncapitalsed_model_name}}',
              url: 'http://localhost:8000/{{snake_case_model_name}}s',
// start_model_create_meta
// REPLACEMENT
// end_model_create_meta
              many_to_one: [],
              one_to_many: []
            }
          },
          delete: {
            url: "http://localhost:8000/{{snake_case_model_name}}s",
            titleSweetAlert: "Xóa {{model_display_name}}!",
            textSweetAlert: "Dữ liệu không thể  khôi phục sau khi xóa!",
            successMessage: "Xóa {{model_display_name}} thành công",
            errorMessage: "Sự cố xảy ra trong quá trình xóa {{model_display_name}}!"
          }
        }
      }
    }
  });
})();
