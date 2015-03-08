angular.module('fadeit.projects').controller('ProjectsController', projectsController);

projectsController.$inject = ['$scope', '$stateParams','ProjectsService', '$state'];
function projectsController($scope, $stateParams, ProjectsService, $state) {
  //read the project id from the state
  var vm = this;
  vm.requestUrl = $stateParams.projectId;

  if(!$stateParams.projectId){
    $state.go('projects', {projectId: 'wrong-project-page'});
  }

  //TODO: promise rejects are not handled
  ProjectsService.singleProject(vm.requestUrl)
    .then(function singleProjectResponse(response){
      var pageTitle, pageDesc;

      vm.project = response;
      pageTitle = !response.error ? vm.project.title : 'Sorry, this project does not exist';
      pageDesc = !response.error ? vm.project.content.shortDescription : 'Sorry, this project does not exist';

      $scope.$emit('changedPage', pageTitle);
      $scope.$emit('changedDesc', pageDesc);
  });
}
