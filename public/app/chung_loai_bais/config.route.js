(function() {
    'use strict';

    angular
        .module('app.chungLoaiBais')
        .run(appRun);

    /* @ngInject */
    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/chung_loai_bais',
                config: {
                    templateUrl: 'app/chung_loai_bais/chung_loai_bais.html',
                    controller: 'Projects',
                    controllerAs: 'vm',
                    title: 'chung_loai_bai',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> chung_loai_bai'
                    }
                }
            },
        ];
    }
})();
