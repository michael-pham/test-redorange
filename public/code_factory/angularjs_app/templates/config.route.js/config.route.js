(function() {
    'use strict';

    angular
        .module('app.{{item_name_in_camel_case}}s')
        .run(appRun);

    /* @ngInject */
    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/{{item_name_in_snake_case}}s',
                config: {
                    templateUrl: 'app/{{item_name_in_snake_case}}s/{{item_name_in_snake_case}}s.html',
                    controller: '{{item_name_in_pascal_case}}s',
                    controllerAs: 'vm',
                    title: '{{item_name_in_snake_case}}',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> {{item_name_in_snake_case}}'
                    }
                }
            },
            {
                url: '/{{item_name_in_snake_case}}s/:id',
                config: {
                    templateUrl: 'app/{{item_name_in_snake_case}}s/details.html',
                    controller: '{{item_name_in_pascal_case}}Details',
                    controllerAs: 'vm',
                    title: '{{item_name_in_snake_case}} details',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-lock"></i> details'
                    }
                }
            }
        ];
    }
})();
