'use strict';
/*global moment:false, WOW:false; */
//ignoring the above globals, moment() is available through the amMoment service

angular.module('core').controller('ProjectController', ['$scope', '$stateParams','amMoment', '$sce', '$log', 'parallaxHelper', 'ProjectData', 'AnimationService', function ($scope, $stateParams, amMoment, $sce, $log, parallaxHelper, ProjectData, AnimationService) {
	//load services
	$scope.anim = AnimationService[0];

  //read the project id from the state
  $scope.projectId = $stateParams.projectId;

  //emit info to the parent application module to update the title
	$scope.$emit('changedPage', $scope.projectId.toUpperCase());
}]);