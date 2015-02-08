angular.module('fadeit.projects').controller('ProjectsController', projectsController);

projectsController.$inject = ['$scope', '$stateParams','ProjectsService'];
function projectsController($scope, $stateParams, ProjectsService) {
  //read the project id from the state
  var vm = this;
  vm.requestUrl = $stateParams.projectId;

  ProjectsService.singleProject(vm.requestUrl)
    .then(function singleProjectResponse(response){
      var pageTitle;

      vm.project = response;
      pageTitle = !response.error ? vm.project.title : 'Sorry, this project does not exist';
      $scope.$emit('changedPage', pageTitle);
  });
}
