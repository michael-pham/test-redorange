(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('Sidebar', Sidebar);

    Sidebar.$inject = ['$route', 'routehelper', '$location'];

    function Sidebar($route, routehelper, $location) {
        /*jshint validthis: true */
        var vm = this;
        var routes = routehelper.getRoutes();
        vm.isCurrent = isCurrent;
        vm.config = {
          axis: "y",
        	autoHideScrollbar: true,
        	theme: 'minimal',
      		scrollInertia: 300
      	}
        vm.goToPage = goToPage;

        activate();

        function activate() { getNavRoutes(); }

        function getNavRoutes() {
            vm.navRoutes = routes.filter(function(r) {
                return r.settings && r.settings.nav;
            }).sort(function(r1, r2) {
                return r1.settings.nav - r2.settings.nav;
            });
        }

        function isCurrent(route) {
            if (!route.title || !$route.current || !$route.current.title) {
                return '';
            }

            var menuName = route.title;
            return $route.current.title.substr(0, menuName.length) === menuName ? 'current' : '';
        }

        function goToPage(url) {
          $location.url(url);
        }

        // Jquery event registerings
        $(".sidebar-dropdown > a").click(function() {
          $(".sidebar-submenu").slideUp(200);
          if ($(this).parent().hasClass("active")){
               $(".sidebar-dropdown").removeClass("active");
               $(this).parent().removeClass("active");
          }else{
            $(".sidebar-dropdown").removeClass("active");
            $(this).next(".sidebar-submenu").slideDown(200);
            $(this).parent().addClass("active");
          }
        });

        $("#toggle-sidebar").click(function() {
         $(".page-wrapper").toggleClass("toggled");
        });
    }
})();
