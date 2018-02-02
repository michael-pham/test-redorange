(function() {
    'use strict';

    angular
        .module('app.truongDuLieus')
        .run(appRun);

    /* @ngInject */
    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/truong_du_lieus',
                config: {
                    templateUrl: 'app/truong_du_lieus/truong_du_lieus.html',
                    controller: 'TruongDuLieus',
                    controllerAs: 'vm',
                    title: 'truong_du_lieu',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> truong_du_lieu'
                    }
                }
            }
        ];
    }
})();
