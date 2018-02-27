(function() {
    'use strict';

    angular
        .module('app.baiViets')
        .run(appRun);

    /* @ngInject */
    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/bai_viets',
                config: {
                    templateUrl: 'app/bai_viets/bai_viets.html',
                    controller: 'BaiViets',
                    controllerAs: 'vm',
                    title: 'bai_viet',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> bai_viet'
                    }
                }
            },
            {
                url: '/bai_viets/:id',
                config: {
                    templateUrl: 'app/bai_viets/details.html',
                    controller: 'BaiVietDetails',
                    controllerAs: 'vm',
                    title: 'bai_viet details',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-lock"></i> details'
                    }
                }
            }
        ];
    }
})();
