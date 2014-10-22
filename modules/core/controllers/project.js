'use strict';

angular.module('core').controller('ProjectController', ['$scope', '$stateParams','amMoment', '$sce', '$log', 'parallaxHelper', 'ProjectData', 'AnimationService', function ($scope, $stateParams, amMoment, $sce, $log, parallaxHelper, ProjectData, AnimationService) {
	//load services
	$scope.anim = AnimationService;

	//read the project id from the state
	$scope.projectId = $stateParams.projectId;

	$scope.loadProjectData = function loadProjectData(){
		var i = 0,
				projectExists = false;

		for(i; i<=ProjectData.length-1; i++){
			if(ProjectData[i].id === $scope.projectId){
				$scope.project = ProjectData[i];
				$scope.$emit('changedPage', $scope.project.title);
				projectExists = true;

				//refresh wow to add the newly added elements
				$scope.wowRefresh = true;
				return false;
			}
		}

		if(!projectExists){
			//emit info to the parent application module to update the title
			$scope.$emit('changedPage', $scope.projectId);
		}
	};

	//init controller
	$scope.loadProjectData();
}]);