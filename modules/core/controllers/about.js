/*global skrollr:false; s:false; */
'use strict';

angular.module('core').controller('AboutController', ['$scope', '$log', 'parallaxHelper', function ($scope, $log, parallaxHelper) {
	var s;

	$scope.initSkrollr = function initSkrollr(){
		s = skrollr.init({
			forceHeight:false,
			constants: {
				h: 300
			}
		});
	};


	$scope.initSkrollr();
	s.refresh();
}]);