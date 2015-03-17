fadeitConfig.pushAfterBootstrap('fadeit.ourWorkPage');

angular.module('fadeit.ourWorkPage').config(ourWorkPageConfig);

ourWorkPageConfig.$inject = ['$stateProvider'];
function ourWorkPageConfig($stateProvider){
  $stateProvider.state('app.our-work', {
    url: '/our-work',
    templateUrl: 'views/our-work-page.html',
    controller: 'OurWorkController',
    controllerAs: 'vm',
    data:{
      pageTitle: 'WORK_PAGE_TITLE',
      pageDesc: 'WORK_SUMMARY'
    }
  });
}
