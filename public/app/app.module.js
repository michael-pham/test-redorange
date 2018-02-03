(function() {
    'use strict';

    angular.module('app', [
        /*
         * Order is not important. Angular makes a
         * pass to register all of the modules listed
         * and then when app.dashboard tries to use app.data,
         * its components are available.
         */

        /*
         * Everybody has access to these.
         * We could place these under every feature area,
         * but this is easier to maintain.
         */
        'app.core',
        'app.widgets',

        /*
         * Feature areas
         */
        'app.layout',
        'app.authentication',
        'app.coQuanBanHanhs',
        'app.tinhTrangVanBans',
        'app.linhVucVanBans',
        'app.loaiVanBans',
        'app.phamViVanBans',
        'app.mayIns',
        'app.nganhs',
        'app.vanBans',
        'app.duLieuDangKys',
        'app.bieuMauChungTus',
        'app.truongDuLieus',
        'app.pageSizes',
        'app.users',
        'app.permissions',
        'app.roles',
        'app.fontFamilys',
        'app.projects'
    ]);
})();
