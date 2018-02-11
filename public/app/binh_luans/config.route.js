(function() {
    'use strict';

    angular
        .module('app.binhLuans')
        .run(appRun);

    /* @ngInject */
    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/binh_luans',
                config: {
                    templateUrl: 'app/binh_luans/binh_luans.html',
                    controller: 'Projects',
                    controllerAs: 'vm',
                    title: 'binh_luan',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> binh_luan'
                    }
                }
            },
        ];
    }
})();
