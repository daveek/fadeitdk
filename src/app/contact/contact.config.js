fadeitConfig.pushAfterBootstrap('fadeit.contact');

angular.module('fadeit.contact').config(contactConfig);

contactConfig.$inject = ['$stateProvider'];
function contactConfig($stateProvider){
  $stateProvider.state('contact', {
    url: '/contact',
    templateUrl: 'views/contact-page.html',
    data:{
      pageTitle: 'Contact page'
    }
  });
}