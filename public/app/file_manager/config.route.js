(function() {
    'use strict';

    angular
        .module('app.fileManager')
        .run(appRun);

    /* @ngInject */
    appRun.$inject = ['routehelper'];
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/file_manager',
                config: {
                    templateUrl: 'app/file_manager/file_manager.html',
                    controller: 'FileManager',
                    controllerAs: 'vm',
                    title: 'Quản lý files',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Quản lý files'
                    }
                }
            }
        ];
    }
})();
