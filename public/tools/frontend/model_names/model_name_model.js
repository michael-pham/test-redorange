(function() {
  'use strict';
  angular.module('app.modelNames')
  .factory('modelNameModel', function($http, SweetAlert) {
    return {
      init: function(scope) {
        return {
          ctrlScope: scope,
          getList: {
            url: 'http://localhost:8000/model_names',
            name: 'modelNames',
            param: {includes: []}
          },
          getSingle: {
            url: 'http://localhost:8000/model_names',
            name: 'modelName',
            many_to_one: [],
            one_to_many: []
          },
          update: {
            url: 'http://localhost:8000/model_names',
            name: 'modelName',
            modalUrl: '/app/model_names/_cap_nhat_model_name_modal.html',
            successMessage: 'Cập nhật thành công model name',
            errorMessage: 'Lỗi xảy ra trong quá trình cập nhật model name'
          },
          create: {
            name: 'modelName',
            modalUrl: '/app/model_names/_them_model_name_modal.html',
            successMessage: 'Tạo mới model name thành công!',
            errorMessage: 'Sự cố xảy ra trong quá trình tạo mới model name!',
            activeModalInstance: '',
            meta: {
              name: 'modelName',
              url: 'http://localhost:8000/model_names',
// start_model_create_meta
// REPLACEMENT
// end_model_create_meta
              many_to_one: [],
              one_to_many: []
            }
          },
          delete: {
            url: "http://localhost:8000/model_names",
            titleSweetAlert: "Xóa model name!",
            textSweetAlert: "Dữ liệu không thể  khôi phục sau khi xóa!",
            successMessage: "Xóa model name thành công",
            errorMessage: "Sự cố xảy ra trong quá trình xóa model name!"
          }
        }
      }
    }
  });
})();
