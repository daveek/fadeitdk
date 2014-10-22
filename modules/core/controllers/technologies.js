'use strict';

angular.module('core').controller('TechnologiesController', ['angularLoad', '$rootScope', '$scope', 'TechnologiesService',function (angularLoad, $rootScope, $scope, TechnologiesService) {

	function addTechnologies(){
		var technologies = TechnologiesService.getTechnologies();
		angular.forEach(technologies,function(tech){
			createTech(tech.name,tech.size,tech.circles,tech.font,tech.bold);
		});
	}

	if(!$rootScope.ballsLoaded){
		angularLoad.loadScript('scripts/technologies.min.js').then(function() {
			init();
			addTechnologies();
			play();
			$rootScope.ballsLoaded = true;
		}).catch(function() {
			//TODO: list technologies differently?
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
