(function() {
    'use strict';

    angular
        .module('app.permissions')
        .run(appRun);

    /* @ngInject */
    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/permissions',
                config: {
                    templateUrl: 'app/permissions/permissions.html',
                    controller: 'Permissions',
                    controllerAs: 'vm',
                    title: 'Quyền',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> permission'
                    }
                }
            }
        ];
    }
})();
