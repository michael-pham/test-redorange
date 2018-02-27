(function() {
  'use strict';

  angular
    .module('app.chungLoaiBais')
    .factory('chungLoaiBaiModel', chungLoaiBaiModel);


  function chungLoaiBaiModel() {
    return {
      baseUrl: '/chung_loai_bais',
      meta: {
        name: 'chungLoaiBai',
        url: '/chung_loai_bais',
        domestic: [
          "ten","mo_ta",
        ],
        many_to_one: [],
        one_to_many: []
      },
      includes: [],
      updateModalOpenErrorMessage: "Tải biểu mẫu cập nhật không thành công",
      updateModalUrl: '/app/chung_loai_bais/_chung_loai_bai_update_modal.html',
      updateModalName: 'chungLoaiBaiUpdateModal',
      updateModalSize: 'md',
      updateModalItemName: 'oldChungLoaiBai',
      updateModalWindowClass: "",
      updateItemSuccessMessage: "Cập nhật thành công Chủng loại bài viết",
      updateItemErrorMessage: "Lỗi xảy ra trong quá trình cập nhật Chủng loại bài viết",

      createModalOpenErrorMessage: "Tải biểu mẫu không thành công",
      createModalUrl: '/app/chung_loai_bais/_chung_loai_bai_create_modal.html',
      createModalName: 'chungLoaiBaiCreateModal',
      createModalSize: 'md',
      createModalItemName: 'newChungLoaiBai',
      createModalWindowClass: "",
      createItemErrorMessage: "Lỗi xảy ra trong quá trình tạo mới Chủng loại bài viết",
      createItemSuccessMessage: "Tạo chungLoaiBai mới thành công",

      deleteSweetAlertTitle: "Xóa",
      deleteSweetAlertText: "Dữ liệu không thể  khôi phục sau khi xóa",
      deleteItemSuccessMessage: "Xóa Chủng loại bài viết thành công",
      deleteItemErrorMessage: "Sự cố xảy ra trong quá trình xóa Chủng loại bài viết"
    }
  }
})();
