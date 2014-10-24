'use strict';

angular.module('core').controller('AboutController', ['$scope', '$log', 'AnimationService', function ($scope, $log, AnimationService) {
	//load services
	$scope.anim = AnimationService;
}]);