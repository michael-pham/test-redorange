(function() {
  'use strict';

  angular
    .module('app.bieuMauChungTus')
    .controller('BieuMauChungTus', BieuMauChungTus)
    .controller('ThietKeBieuMauChungTus', ThietKeBieuMauChungTus);

  BieuMauChungTus.$inject = ['$scope', 'crud', 'logger', 'bieuMauChungTuModel',
    '$modal', 'utils', '$location', 'pageSizeModel'];

  /* @ngInject */
  function BieuMauChungTus($scope, crud, logger, bieuMauChungTuModel, $modal,
    utils, $location, pageSizeModel) {

    /*jshint validthis: true */
    $scope.bieuMauChungTuModel = bieuMauChungTuModel.init($scope);
    $scope.bieuMauChungTuCrud = crud.make($scope.bieuMauChungTuModel);
    $scope.bieuMauChungTuCrud.getList("");
    $scope.openUpdateForm = openUpdateForm;
    $scope.submitUpdateForm = submitUpdateForm;
    $scope.fileBieuMauChungTu = {};
    $scope.submitCreateForm = submitCreateForm;
    $scope.designBieuMau = designBieuMau;

    function designBieuMau(bieuMauChungTuId) {
      $location.url('/bieu_mau_chung_tus/' + bieuMauChungTuId);
    }

    function submitCreateForm(newBieuMauChungTu, file) {
      if (!file) {
        $scope.errMsg = "File là trường bắt buộc."
      } else {
        utils.uploadFile(file, function(successResponse) {
          newBieuMauChungTu.image_uri = successResponse.data.file.file_uri;
          newBieuMauChungTu.image_id =  successResponse.data.file.file_id;
          $scope.bieuMauChungTuCrud.submitCreateForm(newBieuMauChungTu, '');
        });
      }
    }

    function openUpdateForm(bieuMauChungTuId) {
      $scope.bieuMauChungTuCrud.openUpdateForm(bieuMauChungTuId, function(data)
        {$scope.oldBieuMauChungTu = data}, 'md');
    }

    function submitUpdateForm(bieuMauChungTuId, oldBieuMauChungTu) {
      $scope.bieuMauChungTuCrud.updateModel(oldBieuMauChungTu.id,
        oldBieuMauChungTu, submitUpdateFormComplete);

      function submitUpdateFormComplete() {
        $scope.bieuMauChungTuCrud.getList("");
        $scope.bieuMauChungTuCrud.dismissCreateForm();
      }
    }
  }

  ThietKeBieuMauChungTus.$inject = ['$scope', '$routeParams', 'crud', 'logger',
    'bieuMauChungTuModel', 'truongDuLieuModel', '$modal', 'utils'];

  /* @ngInject */
  function ThietKeBieuMauChungTus($scope, $routeParams, crud, logger,
    bieuMauChungTuModel, truongDuLieuModel, $modal, utils) {

    var positions = JSON.parse(localStorage.positions || "{}");

    var divsize =
      angular.element(document.getElementById('fun_div')).prop('offsetWidth');

    var fixmeTop = $('.fixme').offset().top;
    $(window).scroll(function() {
      var currentScroll = $(window).scrollTop();
      if (currentScroll >= fixmeTop) {
        $('.fixme').css({
          position: 'fixed',
          top: '0',
          width: '82.7%',
        });
      } else {
        $('.fixme').css({
          position: 'static',
          width: '100%',
        });
      }
    });

    var toMillimeters = function(leTrai, leTren, designFrameWidth) {
      var left = leTrai / designFrameWidth * $scope.bieuMauChungTu.page_size.width;

      var designFrameHeight =
        designFrameWidth * $scope.bieuMauChungTu.page_size.height /
          $scope.bieuMauChungTu.page_size.width;

      var top = leTren / designFrameHeight * $scope.bieuMauChungTu.page_size.height;
      return {left: left, top: top};
    }

    var toPixels = function(leTrai, leTren, designFrameWidth) {
      var designFrameHeight =
        designFrameWidth * $scope.bieuMauChungTu.page_size.height /
          $scope.bieuMauChungTu.page_size.width;
      var left = leTrai * designFrameWidth / $scope.bieuMauChungTu.page_size.width;
      var top = leTren * designFrameHeight / $scope.bieuMauChungTu.page_size.height;
      return {left: left, top: top};
    }

    // Cal design container width in viewport and in pixesl
    var contentWidth = angular.element(document.getElementById("design-container"));
    $scope.designContainerVw =
      contentWidth[0].clientWidth / document.documentElement.clientWidth * 100;
    $scope.designContainerPx = contentWidth[0].clientWidth;

    var bieuMauChungTuId = $routeParams.id;
    $scope.bieuMauChungTuModel = bieuMauChungTuModel.init($scope);
    $scope.bieuMauChungTuCrud = crud.make($scope.bieuMauChungTuModel);
    $scope.truongDuLieuModel = truongDuLieuModel.init($scope);
    $scope.truongDuLieuCrud = crud.make($scope.truongDuLieuModel);

    $scope.getTruongDuLieus = function() {
      var params = utils.makeParams.filters([['bieu_mau_chung_tu_id',
        bieuMauChungTuId, 'eq']]);

      $scope.truongDuLieuCrud.getList("?" + params, function(response) {

        $("#containment-wrapper").empty();

        // Draw truong du lieus on desing container
        for (var i = 0; i < $scope.truongDuLieus.length; ++i) {
          var truongDuLieu = $scope.truongDuLieus[i];
          var pos = toPixels(truongDuLieu.le_trai, truongDuLieu.le_tren,
            $scope.designContainerPx);

          $("#containment-wrapper").append(
            $('<span id="draggable_' + truongDuLieu.id +
              '" class="input-fields"></span>')
            .html(truongDuLieu.ky_hieu)
            .css('background-color', 'red')
            .css(pos)
            .draggable(
              {
                containment: "#containment-wrapper",
                scroll: true,
                stop: stop,
                drag: drag
              }
            ));
        }

        function stop(event, ui) {
          var truongDuLieuId = this.id.replace("draggable_", "");
          var childPos = $(this).offset();
          var parentPos = $(this).parent().offset();

          var left = childPos.left - parentPos.left;
          var top = childPos.top - parentPos.top;

          var newPosition= toMillimeters(left, top, $scope.designContainerPx);
          var newData = {le_trai: newPosition.left, le_tren: newPosition.top};

          $scope.truongDuLieuCrud.updateModelV2(truongDuLieuId,
            newData, function() {
              $scope.getTruongDuLieus();
            });
        }

        function drag(event, ui) {
          $scope.truongDuLieuActiveId = this.id.replace("draggable_", "");
          var childPos = $(this).offset();
          var parentPos = $(this).parent().offset();
          $("#leTrai").text(parseInt(childPos.left - parentPos.left));
          $("#leTren").text(parseInt(childPos.top - parentPos.top));
        }
      });
    }

    $scope.deleteTruongDuLieuActive = function() {
      if (!$scope.truongDuLieuActiveId) return;
      $scope.truongDuLieuCrud.deleteModelV2($scope.truongDuLieuActiveId,
        function() {
        $scope.getTruongDuLieus();
      });
    }

    $scope.submitCreateFormTruongDuLieu = function(truongDuLieu) {
      if (!truongDuLieu.le_trai) truongDuLieu.le_trai = 0;
      if (!truongDuLieu.le_phai) truongDuLieu.le_phai = 0;

      truongDuLieu.bieu_mau_chung_tu_id = bieuMauChungTuId;
      $scope.truongDuLieuCrud.submitCreateFormV2(truongDuLieu,
        function(result) {
          $scope.getTruongDuLieus();
        });
    }

    $scope.bieuMauChungTuCrud.getSingle(bieuMauChungTuId, function(result) {
      $scope.bieuMauChungTu = result;
      $scope.getTruongDuLieus();
    });
  }
})();
