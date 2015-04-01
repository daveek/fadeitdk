angular.module('fadeit.projects').controller('ProjectsController', projectsController);

projectsController.$inject = ['$scope', '$stateParams','ProjectsService', '$state'];
function projectsController($scope, $stateParams, ProjectsService, $state) {
  //read the project id from the state
  var vm = this,
      pageTitle,
      pageDesc;

  vm.project = {};
  vm.requestUrl = $stateParams.projectId;

  if(!$stateParams.projectId){
    $state.go('projects', {projectId: 'wrong-project-page'});
  }

  //TODO: promise rejects are not handled
  ProjectsService.singleProject(vm.requestUrl)
    .then(function singleProjectResponse(response){
      vm.project = response;
      pageTitle = vm.project.title;
      pageDesc = vm.project.content.shortDescription;

      $scope.$emit('changedPage', pageTitle);
      $scope.$emit('changedDesc', pageDesc);
  }, function singleProjectErrorResponse(error){
    vm.project.error = error;
    pageTitle = pageDesc = 'Sorry, this project does not exist';

    $scope.$emit('changedPage', pageTitle);
    $scope.$emit('changedDesc', pageDesc);
  });
}
