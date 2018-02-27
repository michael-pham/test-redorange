(function() {
  'use strict';

  angular
    .module('app.tinhTrangBaiViets')
    .factory('tinhTrangBaiVietModel', tinhTrangBaiVietModel);


  function tinhTrangBaiVietModel() {
    return {
      baseUrl: '/tinh_trang_bai_viets',
      meta: {
        name: 'tinhTrangBaiViet',
        url: '/tinh_trang_bai_viets',
        domestic: [
          "ten","mo_ta",
        ],
        many_to_one: [],
        one_to_many: []
      },
      includes: [],
      updateModalOpenErrorMessage: "Tải biểu mẫu cập nhật không thành công",
      updateModalUrl: '/app/tinh_trang_bai_viets/_tinh_trang_bai_viet_update_modal.html',
      updateModalName: 'tinhTrangBaiVietUpdateModal',
      updateModalSize: 'md',
      updateModalItemName: 'oldTinhTrangBaiViet',
      updateModalWindowClass: "",
      updateItemSuccessMessage: "Cập nhật thành công Tình trạng bài viết",
      updateItemErrorMessage: "Lỗi xảy ra trong quá trình cập nhật Tình trạng bài viết",

      createModalOpenErrorMessage: "Tải biểu mẫu không thành công",
      createModalUrl: '/app/tinh_trang_bai_viets/_tinh_trang_bai_viet_create_modal.html',
      createModalName: 'tinhTrangBaiVietCreateModal',
      createModalSize: 'md',
      createModalItemName: 'newTinhTrangBaiViet',
      createModalWindowClass: "",
      createItemErrorMessage: "Lỗi xảy ra trong quá trình tạo mới Tình trạng bài viết",
      createItemSuccessMessage: "Tạo tinhTrangBaiViet mới thành công",

      deleteSweetAlertTitle: "Xóa",
      deleteSweetAlertText: "Dữ liệu không thể  khôi phục sau khi xóa",
      deleteItemSuccessMessage: "Xóa Tình trạng bài viết thành công",
      deleteItemErrorMessage: "Sự cố xảy ra trong quá trình xóa Tình trạng bài viết"
    }
  }
})();
