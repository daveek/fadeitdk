fadeitConfig.pushAfterBootstrap('fadeit.teamPage');

angular.module('fadeit.teamPage').config(teamPageConfig);

teamPageConfig.$inject = ['$stateProvider'];
function teamPageConfig($stateProvider){
  $stateProvider.state('team', {
    url: '/team',
    templateUrl: 'views/team-page.html',
    data:{
      pageTitle: 'TEAM_PAGE_TITLE',
      pageDesc: 'TEAM_SUMMARY'
    }
  });
}