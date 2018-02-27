(function() {
  'use strict';

  angular
    .module('app.tinhTrangBinhLuans')
    .factory('tinhTrangBinhLuanModel', tinhTrangBinhLuanModel);


  function tinhTrangBinhLuanModel() {
    return {
      baseUrl: '/tinh_trang_binh_luans',
      meta: {
        name: 'tinhTrangBinhLuan',
        url: '/tinh_trang_binh_luans',
        domestic: [
          "ten","mo_ta",
        ],
        many_to_one: [],
        one_to_many: []
      },
      includes: [],
      updateModalOpenErrorMessage: "Tải biểu mẫu cập nhật không thành công",
      updateModalUrl: '/app/tinh_trang_binh_luans/_tinh_trang_binh_luan_update_modal.html',
      updateModalName: 'tinhTrangBinhLuanUpdateModal',
      updateModalSize: 'md',
      updateModalItemName: 'oldTinhTrangBinhLuan',
      updateModalWindowClass: "",
      updateItemSuccessMessage: "Cập nhật thành công Tình trạng bình luận",
      updateItemErrorMessage: "Lỗi xảy ra trong quá trình cập nhật Tình trạng bình luận",

      createModalOpenErrorMessage: "Tải biểu mẫu không thành công",
      createModalUrl: '/app/tinh_trang_binh_luans/_tinh_trang_binh_luan_create_modal.html',
      createModalName: 'tinhTrangBinhLuanCreateModal',
      createModalSize: 'md',
      createModalItemName: 'newTinhTrangBinhLuan',
      createModalWindowClass: "",
      createItemErrorMessage: "Lỗi xảy ra trong quá trình tạo mới Tình trạng bình luận",
      createItemSuccessMessage: "Tạo tinhTrangBinhLuan mới thành công",

      deleteSweetAlertTitle: "Xóa",
      deleteSweetAlertText: "Dữ liệu không thể  khôi phục sau khi xóa",
      deleteItemSuccessMessage: "Xóa Tình trạng bình luận thành công",
      deleteItemErrorMessage: "Sự cố xảy ra trong quá trình xóa Tình trạng bình luận"
    }
  }
})();
