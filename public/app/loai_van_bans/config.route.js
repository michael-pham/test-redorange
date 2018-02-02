(function() {
    'use strict';

    angular
        .module('app.loaiVanBans')
        .run(appRun);

    /* @ngInject */
    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/loai_van_bans',
                config: {
                    templateUrl: 'app/loai_van_bans/loai_van_bans.html',
                    controller: 'LoaiVanBans',
                    controllerAs: 'vm',
                    title: 'Loại văn bản',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> loai_van_ban'
                    }
                }
            }
        ];
    }
})();
