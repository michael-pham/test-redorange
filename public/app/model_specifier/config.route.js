(function() {
    'use strict';

    angular
        .module('app.modelSpecifiers')
        .run(appRun);

    /* @ngInject */
    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/model_specifiers',
                config: {
                    templateUrl: 'app/model_specifiers/model_specifiers.html',
                    controller: 'ModelSpecifiers',
                    controllerAs: 'vm',
                    title: 'Máy in',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> model_specifier'
                    }
                }
            }
        ];
    }
})();
