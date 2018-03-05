(function() {
  'use strict';

  angular
    .module('app.baiViets')
    .factory('baiVietModel', baiVietModel);


  function baiVietModel() {
    return {
      baseUrl: '/bai_viets',
      meta: {
        name: 'baiViet',
        url: '/bai_viets',
        domestic: [
          "tac_gia_bai_viet_id","noi_dung","tieu_de","trich_yeu","tinh_trang_bai_viet_id","tinh_trang_binh_luan_id","bai_viet_cha_id","thu_tu_tren_menu","loai_bai_viet_id","so_luong_binh_luan","hinh_anh_dai_dien_url","hinh_anh_dai_dien_thumbnail_url",
        ],
        many_to_one: [{name: "users", url: "http://localhost:8000/users" }, {name: "tinhTrangBaiViets", url: "http://localhost:8000/tinh_trang_bai_viets" }, {name: "tinhTrangBinhLuans", url: "http://localhost:8000/tinh_trang_binh_luans" }, {name: "baiViets", url: "http://localhost:8000/bai_viets" }, {name: "loaiBaiViets", url: "http://localhost:8000/loai_bai_viets" }, ],
        one_to_many: []
      },
      includes: [],
      updateModalOpenErrorMessage: "Tải biểu mẫu cập nhật không thành công",
      updateModalUrl: '/app/bai_viets/_bai_viet_update_modal.html',
      updateModalName: 'baiVietUpdateModal',
      updateModalSize: 'md',
      updateModalItemName: 'oldBaiViet',
      updateModalWindowClass: "",
      updateItemSuccessMessage: "Cập nhật thành công Bài viết",
      updateItemErrorMessage: "Lỗi xảy ra trong quá trình cập nhật Bài viết",

      createModalOpenErrorMessage: "Tải biểu mẫu không thành công",
      createModalUrl: '/app/bai_viets/_bai_viet_create_modal.html',
      createModalName: 'baiVietCreateModal',
      createModalSize: 'md',
      createModalItemName: 'newBaiViet',
      createModalWindowClass: "",
      createItemErrorMessage: "Lỗi xảy ra trong quá trình tạo mới Bài viết",
      createItemSuccessMessage: "Tạo baiViet mới thành công",

      deleteSweetAlertTitle: "Xóa",
      deleteSweetAlertText: "Dữ liệu không thể  khôi phục sau khi xóa",
      deleteItemSuccessMessage: "Xóa Bài viết thành công",
      deleteItemErrorMessage: "Sự cố xảy ra trong quá trình xóa Bài viết"
    }
  }
})();
