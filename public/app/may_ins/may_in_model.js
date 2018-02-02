(function() {
  'use strict';
  angular.module('app.mayIns')
  .factory('mayInModel', function($http, SweetAlert) {
    return {
      init: function(scope) {
        return {
          ctrlScope: scope,
          getList: {
            url: 'http://localhost:8000/may_ins',
            name: 'mayIns',
            param: {includes: []}
          },
          getSingle: {
            url: 'http://localhost:8000/may_ins',
            name: 'mayIn',
            many_to_one: [],
            one_to_many: []
          },
          update: {
            url: 'http://localhost:8000/may_ins',
            name: 'mayIn',
            modalUrl: '/app/may_ins/_cap_nhat_may_in_modal.html',
            successMessage: 'Cập nhật thành công máy in',
            errorMessage: 'Lỗi xảy ra trong quá trình cập nhật máy in'
          },
          create: {
            name: 'mayIn',
            modalUrl: '/app/may_ins/_them_may_in_modal.html',
            successMessage: 'Tạo mới máy in thành công!',
            errorMessage: 'Sự cố xảy ra trong quá trình tạo mới máy in!',
            activeModalInstance: '',
            meta: {
              name: 'mayIn',
              url: 'http://localhost:8000/may_ins',
              domestic: ["ten", "ten_viet_tat"],
              many_to_one: [],
              one_to_many: []
            }
          },
          delete: {
            url: "http://localhost:8000/may_ins",
            titleSweetAlert: "Xóa máy in!",
            textSweetAlert: "Dữ liệu không thể  khôi phục sau khi xóa!",
            successMessage: "Xóa máy in thành công",
            errorMessage: "Sự cố xảy ra trong quá trình xóa máy in!"
          }
        }
      }
    }
  });
})();
