(function() {
    'use strict';

    angular
        .module('app.roles')
        .run(appRun);

    /* @ngInject */
    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/roles',
                config: {
                    templateUrl: 'app/roles/roles.html',
                    controller: 'Roles',
                    controllerAs: 'vm',
                    title: 'Vai trò',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> role'
                    }
                }
            }
        ];
    }
})();
