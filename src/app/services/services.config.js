fadeitConfig.pushAfterBootstrap('fadeit.servicesPage');

angular.module('fadeit.servicesPage').config(servicesPageConfig);

servicesPageConfig.$inject = ['$stateProvider'];
function servicesPageConfig($stateProvider){
  $stateProvider.state('our-work', {
    url: '/our-work',
    templateUrl: 'views/services-page.html',
    data:{
      pageTitle: 'Our work'
    }
  });
}