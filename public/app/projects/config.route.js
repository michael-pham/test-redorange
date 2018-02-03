(function() {
    'use strict';

    angular
        .module('app.projects')
        .run(appRun);

    /* @ngInject */
    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/projects',
                config: {
                    templateUrl: 'app/projects/projects.html',
                    controller: 'Projects',
                    controllerAs: 'vm',
                    title: 'project',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> project'
                    }
                }
            },
            {
                url: '/projects/:id',
                config: {
                    templateUrl: 'app/projects/detail.html',
                    controller: 'ProjectDetails',
                    controllerAs: 'vm',
                    title: 'project details',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-lock"></i> details'
                    }
                }
            }
        ];
    }
})();
