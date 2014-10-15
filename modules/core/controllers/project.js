'use strict';
/*global moment:false, WOW:false; */
//ignoring the above globals, moment() is available through the amMoment service

angular.module('core').controller('ProjectController', ['$scope', '$stateParams','amMoment', '$sce', '$log', 'parallaxHelper', 'MenuData', 'ProjectData', function ($scope, $stateParams, amMoment, $sce, $log, parallaxHelper, MenuData, ProjectData) {
  //read the project id from the state
  $scope.projectId = $stateParams.projectId;

  //load services
  $scope.menuItems = MenuData;
	$scope.$emit('changedPage', $scope.projectId.toUpperCase());
}]);