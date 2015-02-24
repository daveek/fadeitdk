fadeitConfig.pushAfterBootstrap('fadeit.apply');

angular.module('fadeit.apply').config(applyConfig);

applyConfig.$inject = ['$stateProvider'];
function applyConfig($stateProvider){
  $stateProvider.state('apply', {
    url: '/apply',
    controller: 'ApplyController',
    controllerAs: 'vm',
    templateUrl: 'views/apply-page.html',
    data:{
      pageTitle: 'APPLY_PAGE_TITLE',
      pageDesc: 'APPLY_TEXT_1'
    }
  }).state('thanks', {
    url: '/thanks',
    controller: 'ApplyController',
    controllerAs: 'vm',
    templateUrl: 'views/thanks-page.html',
    data:{
      pageTitle: 'THANKS_PAGE_TITLE',
      pageDesc: 'THANKS_TEXT_1'
    }
  });
}