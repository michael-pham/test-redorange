(function() {
  'use strict';

  angular
    .module('app.fileDinhKemBaiViets')
    .factory('fileDinhKemBaiVietModel', fileDinhKemBaiVietModel);


  function fileDinhKemBaiVietModel() {
    return {
      baseUrl: '/file_dinh_kem_bai_viets',
      meta: {
        name: 'fileDinhKemBaiViet',
        url: '/file_dinh_kem_bai_viets',
        domestic: [
          "bai_viet_id","ten_file","file_url",
        ],
        many_to_one: [{name: "baiViets", url: "http://localhost:8000/bai_viets" }, ],
        one_to_many: []
      },
      includes: [],
      updateModalOpenErrorMessage: "Tải biểu mẫu cập nhật không thành công",
      updateModalUrl: '/app/file_dinh_kem_bai_viets/_file_dinh_kem_bai_viet_update_modal.html',
      updateModalName: 'fileDinhKemBaiVietUpdateModal',
      updateModalSize: 'md',
      updateModalItemName: 'oldFileDinhKemBaiViet',
      updateModalWindowClass: "",
      updateItemSuccessMessage: "Cập nhật thành công File đính kèm trong bài viết",
      updateItemErrorMessage: "Lỗi xảy ra trong quá trình cập nhật File đính kèm trong bài viết",

      createModalOpenErrorMessage: "Tải biểu mẫu không thành công",
      createModalUrl: '/app/file_dinh_kem_bai_viets/_file_dinh_kem_bai_viet_create_modal.html',
      createModalName: 'fileDinhKemBaiVietCreateModal',
      createModalSize: 'md',
      createModalItemName: 'newFileDinhKemBaiViet',
      createModalWindowClass: "",
      createItemErrorMessage: "Lỗi xảy ra trong quá trình tạo mới File đính kèm trong bài viết",
      createItemSuccessMessage: "Tạo fileDinhKemBaiViet mới thành công",

      deleteSweetAlertTitle: "Xóa",
      deleteSweetAlertText: "Dữ liệu không thể  khôi phục sau khi xóa",
      deleteItemSuccessMessage: "Xóa File đính kèm trong bài viết thành công",
      deleteItemErrorMessage: "Sự cố xảy ra trong quá trình xóa File đính kèm trong bài viết"
    }
  }
})();
