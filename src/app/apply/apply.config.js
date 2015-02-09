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
      pageTitle: 'APPLY_PAGE_TITLE'
    }
  }).state('thanks', {
    url: '/thanks',
    controller: 'ApplyController',
    controllerAs: 'vm',
    templateUrl: 'views/thanks-page.html',
    data:{
      pageTitle: 'THANKS_PAGE_TITLE'
    }
  });
}