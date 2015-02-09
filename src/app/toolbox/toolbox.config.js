fadeitConfig.pushAfterBootstrap('fadeit.toolbox');

angular.module('fadeit.toolbox').config(toolboxConfig);

toolboxConfig.$inject = ['$stateProvider'];
function toolboxConfig($stateProvider){
  $stateProvider.state('toolbox', {
    url: '/toolbox',
    controller: 'ToolboxController',
    controllerAs: 'vm',
    templateUrl: 'views/toolbox-page.html',
    data:{
      pageTitle: 'TOOLBOX_PAGE_TITLE'
    }
  });
}