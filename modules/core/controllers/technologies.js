'use strict';

angular.module('core').controller('TechnologiesController', ['angularLoad', '$rootScope', '$scope', 'TechnologiesService', '$window', function (angularLoad, $rootScope, $scope, TechnologiesService, $window) {

	$scope.addTechnologies = function addTechnologies(){
		var technologies = TechnologiesService.getTechnologies();
		angular.forEach(technologies,function(tech){
			createTech(tech.name,tech.size,tech.circles,tech.font,tech.bold);
		});
	};

	$scope.initBalls = function initBalls(){
		if(!$rootScope.ballsLoaded){
			angularLoad.loadScript('scripts/technologies.min.js').then(function() {
				init();
				$scope.addTechnologies();
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
			$scope.addTechnologies();
		}
	};

	$scope.removeBalls = function removeBalls(){
		var unbind = function(){};
		document.onmousedown = unbind;
		document.onmouseup = unbind;
		document.onmousemove = unbind;
		document.ondblclick = unbind;
		$rootScope.ballsLoaded = false;
	};

	//start the balls
	$scope.initBalls();

	//cleanup when going to another state
	$scope.$on('$destroy', function(){
		clear();
		$scope.removeBalls();
	});

	//re-init when resizing window
	angular.element(window).resize(function(){
		if($rootScope.ballsLoaded){
			clear();
			$scope.initBalls();
		}
	});
}]);
