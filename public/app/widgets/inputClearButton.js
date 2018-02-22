(function() {
  'use strict';

  angular
    .module('app.widgets')
    .directive('clearIcon', ['$compile',
      function($compile) {
        return {
          restrict : 'A',
          link : function(scope, elem, attrs) {
            var model = attrs.ngModel;
            var template = '<span class="clear-icon form-control-clear fa fa-close" ng-click=\"clearText(\'' + model + '\')\" style="display:none"></span>';
            elem.parent().append($compile(template)(scope));
            var clearIconToggle = function(toggleParam) {
              if(elem.val().trim().length)
                elem.next().css("display", "inline");
              else {
                if(elem.next().css("display") != "none")
                  elem.next().css("display", "none");
              }
            };
            var clearText = function(clearParam) {
              elem.val('');
              clearIconToggle(clearParam);
            };
            elem.on("focus", function(event) {
              clearIconToggle(model);
            });
            elem.on("keyup", function(event) {
              clearIconToggle(model);
            });
            elem.next().on("click", function(event) {
              elem.val('');
              elem.next().css("display", "none");
            });
          }
        }; 
      }
    ]
  );
})();
