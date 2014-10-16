/*global skrollr:false; s:false; */
'use strict';

angular.module('core').controller('AboutController', ['$scope', '$log', 'parallaxHelper', function ($scope, $log, parallaxHelper) {
	var s;
	$scope.anim = [];
	$scope.anim.delay = '0.7s';
	$scope.anim.duration = '1s';

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