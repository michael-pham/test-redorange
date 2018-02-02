(function() {
    'use strict';

    angular
        .module('app.authentication')
        .run(appRun);

    /* @ngInject */
    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/login',
                config: {
                    templateUrl: 'app/authentication/login.html',
                    controller: 'Login',
                    controllerAs: 'vm',
                    title: 'Login',
                    isLoginPage: true,
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Avengers'
                    }
                }
            }
        ];
    }
})();
