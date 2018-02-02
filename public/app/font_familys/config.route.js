(function() {
    'use strict';

    angular
        .module('app.fontFamilys')
        .run(appRun);

    /* @ngInject */
    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/font_familys',
                config: {
                    templateUrl: 'app/font_familys/font_familys.html',
                    controller: 'FontFamilys',
                    controllerAs: 'vm',
                    title: 'Font family',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> font_family'
                    }
                }
            }
        ];
    }
})();
