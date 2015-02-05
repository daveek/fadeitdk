absConfig.pushAfterBootstrap('fadeit.servicesPage');

angular.module('fadeit.servicesPage').config(servicesPageConfig);

servicesPageConfig.$inject = ['$stateProvider'];
function servicesPageConfig($stateProvider){
  $stateProvider.state('services', {
    url: '/services',
    templateUrl: 'views/services-page.html',
    data:{
      pageTitle: 'Our services'
    }
  });
}