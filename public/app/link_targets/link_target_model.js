(function() {
  'use strict';

  angular
    .module('app.linkTargets')
    .factory('linkTargetModel', linkTargetModel);


  function linkTargetModel() {
    return {
      baseUrl: '/link_targets',
      meta: {
        name: 'linkTarget',
        url: '/link_targets',
        domestic: [
          "name","description",
        ],
        many_to_one: [],
        one_to_many: []
      },
      includes: [],
      updateModalOpenErrorMessage: "Tải biểu mẫu cập nhật không thành công",
      updateModalUrl: '/app/link_targets/_link_target_update_modal.html',
      updateModalName: 'linkTargetUpdateModal',
      updateModalSize: 'md',
      updateModalItemName: 'oldLinkTarget',
      updateModalWindowClass: "",
      updateItemSuccessMessage: "Cập nhật thành công Đối tượng trỏ tới của đường dẫn",
      updateItemErrorMessage: "Lỗi xảy ra trong quá trình cập nhật Đối tượng trỏ tới của đường dẫn",

      createModalOpenErrorMessage: "Tải biểu mẫu không thành công",
      createModalUrl: '/app/link_targets/_link_target_create_modal.html',
      createModalName: 'linkTargetCreateModal',
      createModalSize: 'md',
      createModalItemName: 'newLinkTarget',
      createModalWindowClass: "",
      createItemErrorMessage: "Lỗi xảy ra trong quá trình tạo mới Đối tượng trỏ tới của đường dẫn",
      createItemSuccessMessage: "Tạo linkTarget mới thành công",

      deleteSweetAlertTitle: "Xóa",
      deleteSweetAlertText: "Dữ liệu không thể  khôi phục sau khi xóa",
      deleteItemSuccessMessage: "Xóa Đối tượng trỏ tới của đường dẫn thành công",
      deleteItemErrorMessage: "Sự cố xảy ra trong quá trình xóa Đối tượng trỏ tới của đường dẫn"
    }
  }
})();
