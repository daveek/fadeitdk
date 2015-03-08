fadeitConfig.pushAfterBootstrap('fadeit.projects');

angular.module('fadeit.projects').config(projectsConfig);

projectsConfig.$inject = ['$stateProvider'];
function projectsConfig($stateProvider){
  $stateProvider.state('projects', {
    url: '/project/:projectId',
    controller: 'ProjectsController',
    controllerAs: 'vm',
    templateUrl: 'views/projects-page.html',
    data:{
      pageTitle: 'Our projects',
      pageDesc: 'A fadeit project'
    }
  });
}