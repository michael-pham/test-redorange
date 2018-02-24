(function() {
  'use strict';

  angular
    .module('app.{{item_name_in_camel_case}}s')
    .controller('{{item_name_in_pascal_case}}s', {{item_name_in_pascal_case}}s)
    .controller('{{item_name_in_pascal_case}}Details', {{item_name_in_pascal_case}}Details);

  {{item_name_in_pascal_case}}s.$inject = ['$scope', 'logger', 'utils', '{{item_name_in_camel_case}}Service'];

  /* @ngInject */
  function {{item_name_in_pascal_case}}s($scope, logger, utils, {{item_name_in_camel_case}}Service) {

    /* Get {{item_name_in_camel_case}}s */
    $scope.init{{item_name_in_pascal_case}}Params = init{{item_name_in_pascal_case}}Params;
    $scope.get{{item_name_in_pascal_case}}s = get{{item_name_in_pascal_case}}s;
    $scope.get{{item_name_in_pascal_case}}sWithInitialParams = get{{item_name_in_pascal_case}}sWithInitialParams;
    $scope.getLeftMostPage = utils.makePagingNavigator.getLeftMostPage;
    $scope.getRightMostPage = utils.makePagingNavigator.getRightMostPage;

    /* Create {{item_name_in_camel_case}}s */
    $scope.open{{item_name_in_pascal_case}}CreateModal = open{{item_name_in_pascal_case}}CreateModal;
    $scope.close{{item_name_in_pascal_case}}CreateModal = close{{item_name_in_pascal_case}}CreateModal;
    $scope.create{{item_name_in_pascal_case}} = create{{item_name_in_pascal_case}};

    /* Update {{item_name_in_camel_case}}s */
    $scope.open{{item_name_in_pascal_case}}UpdateModal = open{{item_name_in_pascal_case}}UpdateModal;
    $scope.close{{item_name_in_pascal_case}}UpdateModal = close{{item_name_in_pascal_case}}UpdateModal;
    $scope.update{{item_name_in_pascal_case}} = update{{item_name_in_pascal_case}};

    /* Delete {{item_name_in_camel_case}}s */
    $scope.delete{{item_name_in_pascal_case}} = delete{{item_name_in_pascal_case}};

    $scope.get{{item_name_in_pascal_case}}sWithInitialParams();

    //////////////////////////////////////////////////////////////////////////
    function init{{item_name_in_pascal_case}}Params() {
      $scope.{{item_name_in_camel_case}}Params = {{item_name_in_camel_case}}Service.init{{item_name_in_pascal_case}}Params();
    }

    function get{{item_name_in_pascal_case}}s() {
      {{item_name_in_camel_case}}Service.get{{item_name_in_pascal_case}}s($scope.{{item_name_in_camel_case}}Params).then(function(response) {
        $scope.{{item_name_in_camel_case}}s = response.data.{{item_name_in_camel_case}}s;
      });
    }

    function get{{item_name_in_pascal_case}}sWithInitialParams() {
      $scope.init{{item_name_in_pascal_case}}Params();
      $scope.get{{item_name_in_pascal_case}}s();
    }

    function open{{item_name_in_pascal_case}}CreateModal() {
      {{item_name_in_camel_case}}Service.open{{item_name_in_pascal_case}}CreateModal($scope);
    }

    function close{{item_name_in_pascal_case}}CreateModal() {
      $scope.{{item_name_in_camel_case}}CreateModal.dismiss();
    }

    function create{{item_name_in_pascal_case}}(new{{item_name_in_pascal_case}}) {
      {{item_name_in_camel_case}}Service.create{{item_name_in_pascal_case}}(new{{item_name_in_pascal_case}}).then(function(response) {
        $scope.{{item_name_in_camel_case}}CreateModal.dismiss();
        $scope.get{{item_name_in_pascal_case}}s();
      });
    }

    function open{{item_name_in_pascal_case}}UpdateModal({{item_name_in_camel_case}}Id) {
      {{item_name_in_camel_case}}Service.open{{item_name_in_pascal_case}}UpdateModal($scope, {{item_name_in_camel_case}}Id);
    }

    function close{{item_name_in_pascal_case}}UpdateModal() {
      $scope.{{item_name_in_camel_case}}UpdateModal.dismiss();
    }

    function update{{item_name_in_pascal_case}}() {
      {{item_name_in_camel_case}}Service.update{{item_name_in_pascal_case}}($scope.old{{item_name_in_pascal_case}})
        .then(function(response) {
        $scope.get{{item_name_in_pascal_case}}s();
        $scope.close{{item_name_in_pascal_case}}UpdateModal();
      });
    }

    function delete{{item_name_in_pascal_case}}({{item_name_in_camel_case}}) {
      {{item_name_in_camel_case}}Service.delete{{item_name_in_pascal_case}}({{item_name_in_camel_case}}, function() {
        $scope.get{{item_name_in_pascal_case}}s();
      });
    }
  }

  {{item_name_in_pascal_case}}Details.$inject = ['$scope', '$routeParams'];

  /* @ngInject */
  function {{item_name_in_pascal_case}}Details($scope, $routeParams) {
  }
})();
