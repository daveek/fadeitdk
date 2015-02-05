angular.module('fadeit.projects').controller('ProjectsController', projectsController);

projectsController.$inject = ['$scope', '$stateParams','ProjectsService'];
function projectsController($scope, $stateParams, ProjectsService) {
  //read the project id from the state
  var vm = this;

  ProjectsService.singleProject($stateParams.projectId)
    .then(function singleProjectResponse(response){
      var pageTitle;

      vm.provider = response;
      pageTitle = !response.error ? vm.provider.name + '\'s Project' : 'Sorry, this project profile does not exist';
      $scope.$emit('changedPage', pageTitle);
  });
}
