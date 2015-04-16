fadeitConfig.pushAfterBootstrap('fadeit.expertise');

angular.module('fadeit.expertise').config(expertiseConfig);

expertiseConfig.$inject = ['$stateProvider'];
function expertiseConfig($stateProvider){
  $stateProvider.state('app.expertise', {
    url: '/expertise',
    templateUrl: 'views/expertise-page.html',
    data:{
      pageTitle: 'EXPERTISE_PAGE_TITLE',
      pageDesc: 'EXPERTISE_SUMMARY'
    }
  })
  .state('app.tech', {
    url: '/expertise/:tech',
    templateUrl: 'views/expertise-page.html',
    controller: 'ExpertiseConroller',
    controllerAs: 'vm',
    data:{
      pageTitle: 'EXPERTISE_PAGE_TITLE',
      pageDesc: 'EXPERTISE_SUMMARY',
      scrollTop: false
    }
  });
}
