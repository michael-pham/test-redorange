(function() {
  'use strict';

  angular
    .module('app.{{item_name_in_camel_case}}s')
    .factory('{{item_name_in_camel_case}}Model', {{item_name_in_camel_case}}Model);


  function {{item_name_in_camel_case}}Model() {
    return {
      baseUrl: '/{{item_name_in_snake_case}}s',
      meta: {
        name: '{{item_name_in_camel_case}}',
        url: '/{{item_name_in_snake_case}}s',
        domestic: [
          {{domestic_attributes}}
        ],
        many_to_one: [{{item_many_to_one}}],
        one_to_many: []
      },
      includes: [],
      updateModalOpenErrorMessage: "Tải biểu mẫu cập nhật không thành công",
      updateModalUrl: '/app/{{item_name_in_snake_case}}s/_{{item_name_in_snake_case}}_update_modal.html',
      updateModalName: '{{item_name_in_camel_case}}UpdateModal',
      updateModalSize: 'md',
      updateModalItemName: 'old{{item_name_in_pascal_case}}',
      updateModalWindowClass: "",
      updateItemSuccessMessage: "Cập nhật thành công {{item_display_name}}",
      updateItemErrorMessage: "Lỗi xảy ra trong quá trình cập nhật {{item_display_name}}",

      createModalOpenErrorMessage: "Tải biểu mẫu không thành công",
      createModalUrl: '/app/{{item_name_in_snake_case}}s/_{{item_name_in_snake_case}}_create_modal.html',
      createModalName: '{{item_name_in_camel_case}}CreateModal',
      createModalSize: 'md',
      createModalItemName: 'new{{item_name_in_pascal_case}}',
      createModalWindowClass: "",
      createItemErrorMessage: "Lỗi xảy ra trong quá trình tạo mới {{item_display_name}}",
      createItemSuccessMessage: "Tạo {{item_name_in_camel_case}} mới thành công",

      deleteSweetAlertTitle: "Xóa",
      deleteSweetAlertText: "Dữ liệu không thể  khôi phục sau khi xóa",
      deleteItemSuccessMessage: "Xóa {{item_display_name}} thành công",
      deleteItemErrorMessage: "Sự cố xảy ra trong quá trình xóa {{item_display_name}}"
    }
  }
})();
