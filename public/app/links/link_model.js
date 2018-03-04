(function() {
  'use strict';

  angular
    .module('app.links')
    .factory('linkModel', linkModel);


  function linkModel() {
    return {
      baseUrl: '/links',
      meta: {
        name: 'link',
        url: '/links',
        domestic: [
          "link_url","link_name","link_image","link_target_id","link_description","link_visible","link_owner","link_click_count",
        ],
        many_to_one: [{name: "linkTargets", url: "http://localhost:8000/link_targets" }, {name: "users", url: "http://localhost:8000/users" }, ],
        one_to_many: []
      },
      includes: [],
      updateModalOpenErrorMessage: "Tải biểu mẫu cập nhật không thành công",
      updateModalUrl: '/app/links/_link_update_modal.html',
      updateModalName: 'linkUpdateModal',
      updateModalSize: 'md',
      updateModalItemName: 'oldLink',
      updateModalWindowClass: "",
      updateItemSuccessMessage: "Cập nhật thành công Đường dẫn",
      updateItemErrorMessage: "Lỗi xảy ra trong quá trình cập nhật Đường dẫn",

      createModalOpenErrorMessage: "Tải biểu mẫu không thành công",
      createModalUrl: '/app/links/_link_create_modal.html',
      createModalName: 'linkCreateModal',
      createModalSize: 'md',
      createModalItemName: 'newLink',
      createModalWindowClass: "",
      createItemErrorMessage: "Lỗi xảy ra trong quá trình tạo mới Đường dẫn",
      createItemSuccessMessage: "Tạo link mới thành công",

      deleteSweetAlertTitle: "Xóa",
      deleteSweetAlertText: "Dữ liệu không thể  khôi phục sau khi xóa",
      deleteItemSuccessMessage: "Xóa Đường dẫn thành công",
      deleteItemErrorMessage: "Sự cố xảy ra trong quá trình xóa Đường dẫn"
    }
  }
})();
