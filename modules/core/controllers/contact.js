'use strict';

angular.module('core').controller('ContactController', ['$scope', '$log', 'parallaxHelper', 'MenuData', function ($scope, $log, parallaxHelper, MenuData) {

  //load services
  $scope.menuItems = MenuData;
}]);