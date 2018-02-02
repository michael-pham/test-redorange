(function() {
    'use strict';

    angular
        .module('app.mayIns')
        .run(appRun);

    /* @ngInject */
    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/may_ins',
                config: {
                    templateUrl: 'app/may_ins/may_ins.html',
                    controller: 'MayIns',
                    controllerAs: 'vm',
                    title: 'Máy in',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> may_in'
                    }
                }
            }
        ];
    }
})();
