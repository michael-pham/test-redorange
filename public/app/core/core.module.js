(function() {
    'use strict';

    angular.module('app.core', [
        /*
         * Angular modules
         */
        'ngAnimate', 'ngRoute', 'ngSanitize', 'ngStorage', 'ngScrollbars', 'ngFileSaver', 'ngFileUpload',  'oitozero.ngSweetAlert', 'ui.bootstrap', '720kb.datepicker',
        /*
         * Our reusable cross app code modules
         */
        'blocks.exception', 'blocks.logger', 'blocks.router', 'blocks.router', 'blocks.crud', 'blocks.utils',
        /*
         * 3rd Party modules
         */
        'ngplus'
    ]);
})();
