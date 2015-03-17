fadeitConfig.pushAfterBootstrap('fadeit.contact');

angular.module('fadeit.contact').config(contactConfig);

contactConfig.$inject = ['$stateProvider'];
function contactConfig($stateProvider){
  $stateProvider.state('app.contact', {
    url: '/contact',
    templateUrl: 'views/contact-page.html',
    data:{
      pageTitle: 'CONTACT_PAGE_TITLE',
      pageDesc: 'CONTACT_FULL'
    }
  });
}
