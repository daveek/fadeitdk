'use strict';

angular.module('core').controller('ContactController', ['$scope', '$log', 'AnimationService', function ($scope, $log, AnimationService) {
	//load services
	$scope.anim = AnimationService;
}]);
