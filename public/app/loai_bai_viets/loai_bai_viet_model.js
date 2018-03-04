(function() {
  'use strict';

  angular
    .module('app.loaiBaiViets')
    .factory('loaiBaiVietModel', loaiBaiVietModel);


  function loaiBaiVietModel() {
    return {
      baseUrl: '/loai_bai_viets',
      meta: {
        name: 'loaiBaiViet',
        url: '/loai_bai_viets',
        domestic: [
          "ten","mo_ta",
        ],
        many_to_one: [],
        one_to_many: []
      },
      includes: [],
      updateModalOpenErrorMessage: "Tải biểu mẫu cập nhật không thành công",
      updateModalUrl: '/app/loai_bai_viets/_loai_bai_viet_update_modal.html',
      updateModalName: 'loaiBaiVietUpdateModal',
      updateModalSize: 'md',
      updateModalItemName: 'oldLoaiBaiViet',
      updateModalWindowClass: "",
      updateItemSuccessMessage: "Cập nhật thành công Loại bài viết",
      updateItemErrorMessage: "Lỗi xảy ra trong quá trình cập nhật Loại bài viết",

      createModalOpenErrorMessage: "Tải biểu mẫu không thành công",
      createModalUrl: '/app/loai_bai_viets/_loai_bai_viet_create_modal.html',
      createModalName: 'loaiBaiVietCreateModal',
      createModalSize: 'md',
      createModalItemName: 'newLoaiBaiViet',
      createModalWindowClass: "",
      createItemErrorMessage: "Lỗi xảy ra trong quá trình tạo mới Loại bài viết",
      createItemSuccessMessage: "Tạo loaiBaiViet mới thành công",

      deleteSweetAlertTitle: "Xóa",
      deleteSweetAlertText: "Dữ liệu không thể  khôi phục sau khi xóa",
      deleteItemSuccessMessage: "Xóa Loại bài viết thành công",
      deleteItemErrorMessage: "Sự cố xảy ra trong quá trình xóa Loại bài viết"
    }
  }
})();
