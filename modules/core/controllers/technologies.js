'use strict';

angular.module('core').controller('TechnologiesController', ['angularLoad', '$rootScope', '$scope', 'TechnologiesService',function (angularLoad, $rootScope, $scope, TechnologiesService) {
	/*global play*/
	/*global init*/
	/*global clear*/
	/*global createTech*/
	function addTechnologies(){
		var technologies = TechnologiesService.getTechnologies();
		angular.forEach(technologies,function(tech){
			createTech(tech.name,tech.size,tech.circles,tech.font,tech.bold);
		});
	}

	if(!$rootScope.ballsLoaded){
		angularLoad.loadScript('balls/balls.js').then(function() {
			init();
			addTechnologies();
			play();
			$rootScope.ballsLoaded = true;
		}).catch(function() {
			console.log('failed to load');
		});
	}
	else{
		//using existing script, no need to re-download
		init();
		addTechnologies();
	}
	$scope.$on('$destroy', function(){
		clear();
	});
}]);
