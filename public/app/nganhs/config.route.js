(function() {
    'use strict';

    angular
        .module('app.nganhs')
        .run(appRun);

    /* @ngInject */
    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/nganhs',
                config: {
                    templateUrl: 'app/nganhs/nganhs.html',
                    controller: 'Nganhs',
                    controllerAs: 'vm',
                    title: 'Ngành',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> nganhs'
                    }
                }
            }
        ];
    }
})();
