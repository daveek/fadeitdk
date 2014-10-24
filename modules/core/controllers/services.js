'use strict';

angular.module('core').controller('ServicesController', ['$scope', '$log', 'AnimationService', function ($scope, $log, parallaxHelper, AnimationService) {
	//load services
	$scope.anim = AnimationService;
}]);