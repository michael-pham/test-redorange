(function() {
  'use strict';

  angular
    .module('app.projects')
    .factory('projectModel', projectModel);

      
  function projectModel() {
    return {
      baseUrl: '/projects',
      meta: {
        name: 'project',
        url: '/projects',
        domestic: [
          "name", "generating_data",
          "generating_data_refined", "is_valid"
        ],
        many_to_one: [],
        many_to_one: []
      },

      updateModalOpenErrorMessage: "Tải biểu mẫu cập nhật không thành công",
      updateModalUrl: '/app/projects/_cap_nhat_project_modal.html',
      updateModalName: 'projectUpdateModal',
      updateModalSize: 'md', 
      updateModalItemName: 'oldProject', 
      updateModalWindowClass: "",
      updateItemSuccessMessage: "Cập nhật thành công project",
      updateItemErrorMessage: "Lỗi xảy ra trong quá trình cập nhật project",

      createModalOpenErrorMessage: "Tải biểu mẫu không thành công",
      createModalUrl: '/app/projects/_them_project_modal.html',
      createModalName: 'projectCreateModal',
      createModalSize: 'md', 
      createModalItemName: 'newProject', 
      createModalWindowClass: "",
      createItemErrorMessage: "Lỗi xảy ra trong quá trình tạo mới project",
      createItemSuccessMessage: "Tạo project mới thành công",

      deleteSweetAlertTitle: "Xóa",
      deleteSweetAlertText: "Dữ liệu không thể  khôi phục sau khi xóa",
      deleteItemSuccessMessage: "Xóa project thành công",
      deleteItemErrorMessage: "Sự cố xảy ra trong quá trình xóa project"
    }
  }
})();
