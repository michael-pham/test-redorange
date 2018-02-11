<!DOCTYPE html>
<html data-ng-app="app" ng-strict-di>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
    <title data-ng-bind="title"></title>
    <style>
        /* This helps the ng-show/ng-hide animations start at the right place. */
        /* Since Angular has this but needs to load, this gives us the class early. */
        .ng-hide {
            display: none!important;
        }

        [ng\:cloak], [ng-cloak], .ng-cloak {
          display: none !important;
        }
    </style>

    <!-- inject-vendor:css -->
    <link rel="stylesheet" href="/app/bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/bootstrap-table/1.10.0/bootstrap-table.min.css" />
    <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/bootstrap-table/1.10.0/bootstrap-table.min.css" />
    <!-- <link href="https://bootswatch.com/3/lumen/bootstrap.min.css" rel="stylesheet" /> -->

    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link href="/app/bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet" />
    <link href="/app/bower_components/toastr/toastr.css" rel="stylesheet" />
    <link href="/app/bower_components/toastr/toastr.css" rel="stylesheet" />
    <link href="/app/bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.min.css" rel="stylesheet"/>
    <link href="/app/bower_components/sweetalert/dist/sweetalert.css" rel='stylesheet' type="text/css">
    <link href="/app/bower_components/angularjs-datepicker/dist/angular-datepicker.min.css" rel="stylesheet" type="text/css">
    <!-- endinject -->

    <!-- inject:css -->
    <link href="/app/assets/css/light-bootstrap-dashboard.css" rel="stylesheet" />
    <link href="/app/assets/css/login.css" rel="stylesheet" />
    <link href="/app/assets/css/animate.min.css" rel="stylesheet" />
    <link href="/app/assets/css/sidebar.css" rel="stylesheet" />
    <link href="/app/assets/css/sidebar-theme.css" rel="stylesheet" />
    <link href="/app/assets/css/splash.css" rel="stylesheet" />
    <link href="/app/assets/css/atom-loader.css" rel="stylesheet" />
    <link href="/app/assets/css/styles.css" rel="stylesheet" />
    <!-- endinject -->
</head>
<body class="ng-cloak">
    <div>
        <div data-ng-include="'app/layout/shell.html'"></div>
        <div id="splash-page" data-ng-show="false">
          <div class="page-splash">
            <div class="loader">
              <div class="inner one"></div>
              <div class="inner two"></div>
              <div class="inner three"></div>
            </div>
          </div>
        </div>
    </div>

    <!-- inject-vendor:js -->
    <script src="/app/bower_components/jquery/dist/jquery.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="/app/bower_components/angular/angular.js"></script>
    <script src="/app/bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js"></script>
    <script src="/app/bower_components/ng-scrollbars/dist/scrollbars.min.js"></script>
    <script src="/app/bower_components/angular-animate/angular-animate.js"></script>
    <script src="/app/bower_components/angular-route/angular-route.js"></script>
    <script src="/app/bower_components/angular-sanitize/angular-sanitize.js"></script>
    <script src='/app/bower_components/angularjs-datepicker/dist/angular-datepicker.min.js'></script>
    <script src='/app/bower_components/ngstorage/ngStorage.min.js'></script>
    <script src="/app/bower_components/bootstrap/dist/js/bootstrap.js"></script>
    <script src="/app/bower_components/toastr/toastr.js"></script>
    <script src="/app/bower_components/moment/moment.js"></script>
    <script src="/app/bower_components/extras.angular.plus/ngplus-overlay.js"></script>
    <!-- <script src='/app/bower_components/angular-bootstrap/ui-bootstrap.min.js'></script>
    <script src='/app/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js'></script> -->
    <script src="http://angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.12.0.js"></script>
    <script src='/app/bower_components/angular-file-saver/dist/angular-file-saver.bundle.min.js'></script>
    <script src="/app/bower_components/ng-file-upload/ng-file-upload-shim.min.js"></script>
    <script src="/app/bower_components/ng-file-upload/ng-file-upload.min.js"></script>
    <script src="/app/bower_components/sweetalert/dist/sweetalert.min.js"></script>
    <script src='/app/bower_components/ngSweetAlert/SweetAlert.min.js'></script>
    <script src='/app/node_modules/zepto/dist/zepto.min.js'></script>
    <!-- endinject -->

    <!-- inject-assets:js -->
    <script src="/app/assets/js/particles.min.js"></script>
    <!-- endinject -->

    <!-- inject:js -->
    <!-- Bootstrapping -->
    <script src="/app/app.module.js"></script>

    <!-- Reusable Blocks/Modules -->
    <script src="/app/blocks/exception/exception.module.js"></script>
    <script src="/app/blocks/exception/exception-handler.provider.js"></script>
    <script src="/app/blocks/exception/exception.js"></script>
    <script src="/app/blocks/logger/logger.module.js"></script>
    <script src="/app/blocks/logger/logger.js"></script>
    <script src="/app/blocks/router/router.module.js"></script>
    <script src="/app/blocks/router/routehelper.js"></script>
    <script src="/app/blocks/crud/crud.module.js"></script>
    <script src="/app/blocks/crud/crud.js"></script>
    <script src="/app/blocks/utils/utils.module.js"></script>
    <script src="/app/blocks/utils/utils.js"></script>

    <!-- core module -->
    <script src="/app/core/core.module.js"></script>
    <script src="/app/core/constants.js"></script>
    <script src="/app/core/config.js"></script>
    <script src="/app/core/dataservice.js"></script>

    <!-- layout -->
    <script src="/app/layout/layout.module.js"></script>
    <script src="/app/layout/shell.js"></script>
    <script src="/app/layout/sidebar.js"></script>

    <!--widgets-->
    <script src="/app/widgets/widgets.module.js"></script>
    <script src="/app/widgets/ccSidebar.js"></script>
    <script src="/app/widgets/ccSpinner.js"></script>
    <script src="/app/widgets/ccWidgetClose.js"></script>
    <script src="/app/widgets/ccWidgetHeader.js"></script>
    <script src="/app/widgets/ccWidgetMinimize.js"></script>

    <!-- authentication -->
    <script src="/app/authentication/auth.module.js"></script>
    <script src="/app/authentication/config.route.js"></script>
    <script src="/app/authentication/authservice.js"></script>
    <script src="/app/authentication/auth.js"></script>

    <!-- users -->
    <script src="/app/users/users.module.js"></script>
    <script src="/app/users/config.route.js"></script>
    <script src="/app/users/users.js"></script>
    <script src="/app/users/user_model.js"></script>

    <!-- permissions -->
    <script src="/app/permissions/permissions.module.js"></script>
    <script src="/app/permissions/config.route.js"></script>
    <script src="/app/permissions/permissions.js"></script>
    <script src="/app/permissions/permission_model.js"></script>

    <!-- roles -->
    <script src="/app/roles/roles.module.js"></script>
    <script src="/app/roles/config.route.js"></script>
    <script src="/app/roles/roles.js"></script>
    <script src="/app/roles/role_model.js"></script>

    <!-- projects -->
    <script src="/app/projects/projects.module.js"></script>
    <script src="/app/projects/config.route.js"></script>
    <script src="/app/projects/projects.js"></script>
    <script src="/app/projects/project_model.js"></script>

    <!-- Bài viết -->
    <script src="/app/bai_viets/bai_viets.module.js"></script>
<script src="/app/bai_viets/config.route.js"></script>
<script src="/app/bai_viets/bai_viets.js"></script>
<script src="/app/bai_viets/bai_viet_model.js"></script>
<!-- File đính kèm trong bài viết -->
    <script src="/app/file_dinh_kem_bai_viets/file_dinh_kem_bai_viets.module.js"></script>
<script src="/app/file_dinh_kem_bai_viets/config.route.js"></script>
<script src="/app/file_dinh_kem_bai_viets/file_dinh_kem_bai_viets.js"></script>
<script src="/app/file_dinh_kem_bai_viets/file_dinh_kem_bai_viet_model.js"></script>
<!-- Đường dẫn -->
    <script src="/app/links/links.module.js"></script>
<script src="/app/links/config.route.js"></script>
<script src="/app/links/links.js"></script>
<script src="/app/links/link_model.js"></script>
<!-- Đối tượng trỏ tới của đường dẫn -->
    <script src="/app/link_targets/link_targets.module.js"></script>
<script src="/app/link_targets/config.route.js"></script>
<script src="/app/link_targets/link_targets.js"></script>
<script src="/app/link_targets/link_target_model.js"></script>
<!-- Chủng loại bài viết -->
    <script src="/app/chung_loai_bais/chung_loai_bais.module.js"></script>
<script src="/app/chung_loai_bais/config.route.js"></script>
<script src="/app/chung_loai_bais/chung_loai_bais.js"></script>
<script src="/app/chung_loai_bais/chung_loai_bai_model.js"></script>
<!-- Tình trạng bình luận -->
    <script src="/app/tinh_trang_binh_luans/tinh_trang_binh_luans.module.js"></script>
<script src="/app/tinh_trang_binh_luans/config.route.js"></script>
<script src="/app/tinh_trang_binh_luans/tinh_trang_binh_luans.js"></script>
<script src="/app/tinh_trang_binh_luans/tinh_trang_binh_luan_model.js"></script>
<!-- Tình trạng bài viết -->
    <script src="/app/tinh_trang_bai_viets/tinh_trang_bai_viets.module.js"></script>
<script src="/app/tinh_trang_bai_viets/config.route.js"></script>
<script src="/app/tinh_trang_bai_viets/tinh_trang_bai_viets.js"></script>
<script src="/app/tinh_trang_bai_viets/tinh_trang_bai_viet_model.js"></script>
<!-- Bình luận -->
    <script src="/app/binh_luans/binh_luans.module.js"></script>
<script src="/app/binh_luans/config.route.js"></script>
<script src="/app/binh_luans/binh_luans.js"></script>
<script src="/app/binh_luans/binh_luan_model.js"></script>
<!-- modeljs -->
    
    <!-- endinject -->
</body>
</html>
