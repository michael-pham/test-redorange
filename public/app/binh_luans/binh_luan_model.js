(function() {
  'use strict';

  angular
    .module('app.binhLuans')
    .factory('binhLuanModel', binhLuanModel);


  function binhLuanModel() {
    return {
      baseUrl: '/binh_luans',
      meta: {
        name: 'binhLuan',
        url: '/binh_luans',
        domestic: [
          "bai_viet_id","nguoi_binh_luan_id","ten_nguoi_binh_luan","url_nguoi_binh_luan","ip_nguoi_binh_luan","noi_dung_binh_luan","binh_luan_cha_id","binh_luan_duoc_chap_nhan",
        ],
        many_to_one: [{name: "baiViets", url: "http://localhost:8000/bai_viets" }, {name: "users", url: "http://localhost:8000/users" }, {name: "binhLuans", url: "http://localhost:8000/binh_luans" }, ],
        one_to_many: []
      },
      includes: [],
      updateModalOpenErrorMessage: "Tải biểu mẫu cập nhật không thành công",
      updateModalUrl: '/app/binh_luans/_binh_luan_update_modal.html',
      updateModalName: 'binhLuanUpdateModal',
      updateModalSize: 'md',
      updateModalItemName: 'oldBinhLuan',
      updateModalWindowClass: "",
      updateItemSuccessMessage: "Cập nhật thành công Bình luận",
      updateItemErrorMessage: "Lỗi xảy ra trong quá trình cập nhật Bình luận",

      createModalOpenErrorMessage: "Tải biểu mẫu không thành công",
      createModalUrl: '/app/binh_luans/_binh_luan_create_modal.html',
      createModalName: 'binhLuanCreateModal',
      createModalSize: 'md',
      createModalItemName: 'newBinhLuan',
      createModalWindowClass: "",
      createItemErrorMessage: "Lỗi xảy ra trong quá trình tạo mới Bình luận",
      createItemSuccessMessage: "Tạo binhLuan mới thành công",

      deleteSweetAlertTitle: "Xóa",
      deleteSweetAlertText: "Dữ liệu không thể  khôi phục sau khi xóa",
      deleteItemSuccessMessage: "Xóa Bình luận thành công",
      deleteItemErrorMessage: "Sự cố xảy ra trong quá trình xóa Bình luận"
    }
  }
})();
