(function() {
    'use strict';

    angular
        .module('app.phamViVanBans')
        .run(appRun);

    /* @ngInject */
    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/pham_vi_van_bans',
                config: {
                    templateUrl: 'app/pham_vi_van_bans/pham_vi_van_bans.html',
                    controller: 'PhamViVanBans',
                    controllerAs: 'vm',
                    title: 'Phạm vi văn bản',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> pham_vi_van_ban'
                    }
                }
            }
        ];
    }
})();
