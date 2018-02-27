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
                    controller: 'BinhLuans',
                    controllerAs: 'vm',
                    title: 'binh_luan',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> binh_luan'
                    }
                }
            },
            {
                url: '/binh_luans/:id',
                config: {
                    templateUrl: 'app/binh_luans/details.html',
                    controller: 'BinhLuanDetails',
                    controllerAs: 'vm',
                    title: 'binh_luan details',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-lock"></i> details'
                    }
                }
            }
        ];
    }
})();
