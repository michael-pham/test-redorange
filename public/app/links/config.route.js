(function() {
    'use strict';

    angular
        .module('app.links')
        .run(appRun);

    /* @ngInject */
    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/links',
                config: {
                    templateUrl: 'app/links/links.html',
                    controller: 'Projects',
                    controllerAs: 'vm',
                    title: 'link',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> link'
                    }
                }
            },
        ];
    }
})();
