'use strict';

angular.module('core').controller('ServicesController', ['$scope', '$log', 'parallaxHelper', 'MenuData', function ($scope, $log, parallaxHelper, MenuData) {

  //load services
  $scope.menuItems = MenuData;
}]);