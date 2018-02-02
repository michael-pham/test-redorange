(function() {
    'use strict';

    angular
        .module('app.pageSizes')
        .run(appRun);

    /* @ngInject */
    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/page_sizes',
                config: {
                    templateUrl: 'app/page_sizes/page_sizes.html',
                    controller: 'PageSizes',
                    controllerAs: 'vm',
                    title: 'Loại giấy in',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> page_size'
                    }
                }
            }
        ];
    }
})();
