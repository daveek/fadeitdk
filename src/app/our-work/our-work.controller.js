angular.module('fadeit.ourWorkPage').controller('OurWorkController', ourWorkController);

ourWorkController.$inject = ['ProjectsService'];
function ourWorkController(ProjectsService){
  var vm = this;

  //TODO: promise rejects are not handled
  ProjectsService.projectIndex().then(function projectListResponse(response){
    vm.projects = response;
  });
}