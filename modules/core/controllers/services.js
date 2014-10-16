'use strict';

angular.module('core').controller('ServicesController', ['$scope', '$log', 'parallaxHelper', 'AnimationService', function ($scope, $log, parallaxHelper, AnimationService) {
	//load services
	$scope.anim = AnimationService[0];
}]);