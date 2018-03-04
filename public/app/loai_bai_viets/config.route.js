(function() {
    'use strict';

    angular
        .module('app.loaiBaiViets')
        .run(appRun);

    /* @ngInject */
    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/loai_bai_viets',
                config: {
                    templateUrl: 'app/loai_bai_viets/loai_bai_viets.html',
                    controller: 'LoaiBaiViets',
                    controllerAs: 'vm',
                    title: 'loai_bai_viet',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> loai_bai_viet'
                    }
                }
            },
            {
                url: '/loai_bai_viets/:id',
                config: {
                    templateUrl: 'app/loai_bai_viets/details.html',
                    controller: 'LoaiBaiVietDetails',
                    controllerAs: 'vm',
                    title: 'loai_bai_viet details',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-lock"></i> details'
                    }
                }
            }
        ];
    }
})();
