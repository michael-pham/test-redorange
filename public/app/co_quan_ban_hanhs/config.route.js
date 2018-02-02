(function() {
    'use strict';

    angular
        .module('app.coQuanBanHanhs')
        .run(appRun);

    /* @ngInject */
    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/co_quan_ban_hanhs',
                config: {
                    templateUrl: 'app/co_quan_ban_hanhs/co_quan_ban_hanhs.html',
                    controller: 'CoQuanBanHanhs',
                    controllerAs: 'vm',
                    title: 'Cơ quan ban hành',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> co_quan_ban_hanh'
                    }
                }
            }
        ];
    }
})();
