angular.module('fadeit.projects').controller('ProjectsController', projectsController);

projectsController.$inject = ['$scope', '$stateParams','ProjectsService', '$state', '$translate', '$filter'];
function projectsController($scope, $stateParams, ProjectsService, $state, $translate, $filter) {
  //read the project id from the state
  var vm = this,
      pageTitle,
      pageDesc,
      pageTags = [];

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

      for(var tag in vm.project.tags){
        if(vm.project.tags.hasOwnProperty(tag)){
          pageTags.push(vm.project.tags[tag].name);
        }
      }

      $scope.$emit('changedPage', pageTitle);
      $scope.$emit('changedDesc', $filter('translate')(pageDesc) + ' Tags: ' +pageTags.toString().replace(/,/g, ', '));
  }, function singleProjectErrorResponse(error){
    vm.project.error = error;
    pageTitle = pageDesc = 'Sorry, this project does not exist';

    $scope.$emit('changedPage', pageTitle);
    $scope.$emit('changedDesc', pageDesc);
  });
}
