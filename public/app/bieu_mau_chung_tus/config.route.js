(function() {
    'use strict';

    angular
        .module('app.bieuMauChungTus')
        .run(appRun);

    /* @ngInject */
    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/bieu_mau_chung_tus',
                config: {
                    templateUrl: 'app/bieu_mau_chung_tus/bieu_mau_chung_tus.html',
                    controller: 'BieuMauChungTus',
                    controllerAs: 'vm',
                    title: 'Loại biểu mẫu chứng từ',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> bieu mau chung tu'
                    }
                }
            },
            {
                url: '/bieu_mau_chung_tus/:id',
                config: {
                    templateUrl: 'app/bieu_mau_chung_tus/thiet_ke_bieu_mau_chung_tus.html',
                    controller: 'ThietKeBieuMauChungTus',
                    controllerAs: 'vm',
                    title: 'thiet_ke_bieu_mau_chung_tu',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> thiet ke bieu mau chung tu'
                    }
                }
            }
        ];
    }
})();
