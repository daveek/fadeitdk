'use strict';

angular.module('core').controller('ServicesController', ['$scope', '$log', 'parallaxHelper', 'AnimationService', function ($scope, $log, parallaxHelper, AnimationService) {
	var s;
	//load services
	$scope.anim = AnimationService;

	$scope.initSkrollr = function initSkrollr(){
		s = skrollr.init({
			forceHeight:false,
			constants: {
				h: 300
			}
		});
	};

	//init methods
	$scope.initSkrollr();
	s.refresh();
}]);