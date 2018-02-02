(function() {
    'use strict';

    angular
        .module('app.tinhTrangVanBans')
        .run(appRun);

    /* @ngInject */
    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/tinh_trang_van_bans',
                config: {
                    templateUrl: 'app/tinh_trang_van_bans/tinh_trang_van_bans.html',
                    controller: 'TinhTrangVanBans',
                    controllerAs: 'vm',
                    title: 'Tình trạng văn bản',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> tinh_trang_van_ban'
                    }
                }
            }
        ];
    }
})();
