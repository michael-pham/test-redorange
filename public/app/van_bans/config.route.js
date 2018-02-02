(function() {
    'use strict';

    angular
        .module('app.vanBans')
        .run(appRun);

    /* @ngInject */
    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/van_bans',
                config: {
                    templateUrl: 'app/van_bans/van_bans.html',
                    controller: 'VanBans',
                    controllerAs: 'vm',
                    title: 'Văn bản',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> van_ban'
                    }
                }
            }
        ];
    }
})();
