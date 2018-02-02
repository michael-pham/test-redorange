(function() {
    'use strict';

    angular
        .module('app.duLieuDangKys')
        .run(appRun);

    /* @ngInject */
    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/du_lieu_dang_kys',
                config: {
                    templateUrl: 'app/du_lieu_dang_kys/du_lieu_dang_kys.html',
                    controller: 'DuLieuDangKys',
                    controllerAs: 'vm',
                    title: 'Giấy tờ tiếp nhận',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> du_lieu_dang_ky'
                    }
                }
            }
        ];
    }
})();
