(function() {
    'use strict';

    angular
        .module('app.tinhTrangBaiViets')
        .run(appRun);

    /* @ngInject */
    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/tinh_trang_bai_viets',
                config: {
                    templateUrl: 'app/tinh_trang_bai_viets/tinh_trang_bai_viets.html',
                    controller: 'Projects',
                    controllerAs: 'vm',
                    title: 'tinh_trang_bai_viet',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> tinh_trang_bai_viet'
                    }
                }
            },
        ];
    }
})();
