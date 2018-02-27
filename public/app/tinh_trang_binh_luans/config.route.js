(function() {
    'use strict';

    angular
        .module('app.tinhTrangBinhLuans')
        .run(appRun);

    /* @ngInject */
    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/tinh_trang_binh_luans',
                config: {
                    templateUrl: 'app/tinh_trang_binh_luans/tinh_trang_binh_luans.html',
                    controller: 'TinhTrangBinhLuans',
                    controllerAs: 'vm',
                    title: 'tinh_trang_binh_luan',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> tinh_trang_binh_luan'
                    }
                }
            },
            {
                url: '/tinh_trang_binh_luans/:id',
                config: {
                    templateUrl: 'app/tinh_trang_binh_luans/details.html',
                    controller: 'TinhTrangBinhLuanDetails',
                    controllerAs: 'vm',
                    title: 'tinh_trang_binh_luan details',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-lock"></i> details'
                    }
                }
            }
        ];
    }
})();
