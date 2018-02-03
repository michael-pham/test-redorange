(function() {
    'use strict';

    angular
        .module('app.modelNames')
        .run(appRun);

    /* @ngInject */
    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/model_names',
                config: {
                    templateUrl: 'app/model_names/model_names.html',
                    controller: 'ModelNames',
                    controllerAs: 'vm',
                    title: 'Model name',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> model_name'
                    }
                }
            }
        ];
    }
})();
