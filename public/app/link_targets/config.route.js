(function() {
    'use strict';

    angular
        .module('app.linkTargets')
        .run(appRun);

    /* @ngInject */
    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/link_targets',
                config: {
                    templateUrl: 'app/link_targets/link_targets.html',
                    controller: 'LinkTargets',
                    controllerAs: 'vm',
                    title: 'link_target',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> link_target'
                    }
                }
            },
            {
                url: '/link_targets/:id',
                config: {
                    templateUrl: 'app/link_targets/details.html',
                    controller: 'LinkTargetDetails',
                    controllerAs: 'vm',
                    title: 'link_target details',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-lock"></i> details'
                    }
                }
            }
        ];
    }
})();
