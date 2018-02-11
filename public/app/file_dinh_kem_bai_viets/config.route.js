(function() {
    'use strict';

    angular
        .module('app.fileDinhKemBaiViets')
        .run(appRun);

    /* @ngInject */
    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/file_dinh_kem_bai_viets',
                config: {
                    templateUrl: 'app/file_dinh_kem_bai_viets/file_dinh_kem_bai_viets.html',
                    controller: 'Projects',
                    controllerAs: 'vm',
                    title: 'file_dinh_kem_bai_viet',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> file_dinh_kem_bai_viet'
                    }
                }
            },
        ];
    }
})();
