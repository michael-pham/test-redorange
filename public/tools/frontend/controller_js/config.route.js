(function() {
    'use strict';

    angular
        .module('app.{{uncapitalised_model_name}}s')
        .run(appRun);

    /* @ngInject */
    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/{{snake_case_model_name}}s',
                config: {
                    templateUrl: 'app/{{snake_case_model_name}}s/{{snake_case_model_name}}s.html',
                    controller: 'Projects',
                    controllerAs: 'vm',
                    title: '{{snake_case_model_name}}',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> {{snake_case_model_name}}'
                    }
                }
            },
        ];
    }
})();
