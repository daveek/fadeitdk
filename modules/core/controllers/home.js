'use strict';

angular.module('core').controller('HomeController', ['$scope', 'UsersData', function ($scope, UsersData) {
    //home controller logic
    $scope.userdata = UsersData;

    //mobile hamburger transform
    $scope.isCollapsed = false;
		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};
}]);