angular.module('fadeit.ourWorkPage').controller('OurWorkController', ourWorkController);

ourWorkController.$inject = ['ProjectsService'];
function ourWorkController(ProjectsService){
  var vm = this;

  ProjectsService.projectIndex().then(function singleProjectResponse(response){
    vm.projects = response;
  });
}