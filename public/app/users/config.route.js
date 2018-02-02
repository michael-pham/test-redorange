(function() {
    'use strict';

    angular
        .module('app.users')
        .run(appRun);

    /* @ngInject */
    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/users',
                config: {
                    templateUrl: 'app/users/users.html',
                    controller: 'Users',
                    controllerAs: 'vm',
                    title: 'Người sử dụng',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> user'
                    }
                }
            }
        ];
    }
})();
