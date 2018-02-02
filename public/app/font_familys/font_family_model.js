(function() {
  'use strict';
  angular.module('app.fontFamilys')
  .factory('fontFamilyModel', function($http, SweetAlert) {
    return {
      init: function(scope) {
        return {
          ctrlScope: scope,
          getList: {
            url: 'http://localhost:8000/font_familys',
            name: 'fontFamilys',
            param: {includes: []}
          },
          getSingle: {
            url: 'http://localhost:8000/font_familys',
            name: 'fontFamily',
            many_to_one: [],
            one_to_many: []
          },
          update: {
            url: 'http://localhost:8000/font_familys',
            name: 'fontFamily',
            modalUrl: '/app/font_familys/_cap_nhat_font_family_modal.html',
            successMessage: 'Cập nhật thành công font family',
            errorMessage: 'Lỗi xảy ra trong quá trình cập nhật font family'
          },
          create: {
            name: 'fontFamily',
            modalUrl: '/app/font_familys/_them_font_family_modal.html',
            successMessage: 'Tạo mới font family thành công!',
            errorMessage: 'Sự cố xảy ra trong quá trình tạo mới font family!',
            activeModalInstance: '',
            meta: {
              name: 'fontFamily',
              url: 'http://localhost:8000/font_familys',
              domestic: [
                "font_name","italics_font_uri","normal_font_uri","bold_font_uri","bold_italics_font_uri"
              ],
              many_to_one: [],
              one_to_many: []
            }
          },
          delete: {
            url: "http://localhost:8000/font_familys",
            titleSweetAlert: "Xóa font family!",
            textSweetAlert: "Dữ liệu không thể  khôi phục sau khi xóa!",
            successMessage: "Xóa font family thành công",
            errorMessage: "Sự cố xảy ra trong quá trình xóa font family!"
          }
        }
      }
    }
  });
})();
