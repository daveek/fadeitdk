fadeitConfig.pushAfterBootstrap('fadeit.contact');

angular.module('fadeit.contact').config(contactConfig);

contactConfig.$inject = ['$stateProvider'];
function contactConfig($stateProvider){
  $stateProvider.state('app.contact', {
    url: '/contact',
    templateUrl: 'views/contact-page.html',
    controller: 'ContactController',
    controllerAs: 'vm',
    data:{
      pageTitle: 'CONTACT_PAGE_TITLE',
      pageDesc: 'ABOUT_SUMMARY'
    }
  });
}