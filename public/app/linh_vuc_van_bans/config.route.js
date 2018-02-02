(function() {
    'use strict';

    angular
        .module('app.linhVucVanBans')
        .run(appRun);

    /* @ngInject */
    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/linh_vuc_van_bans',
                config: {
                    templateUrl: 'app/linh_vuc_van_bans/linh_vuc_van_bans.html',
                    controller: 'LinhVucVanBans',
                    controllerAs: 'vm',
                    title: 'Lĩnh vực văn bản',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> linh_vuc_van_ban'
                    }
                }
            }
        ];
    }
})();
