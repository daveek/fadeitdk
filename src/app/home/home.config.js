absConfig.pushAfterBootstrap('fadeit.home');

angular.module('fadeit.home').config(homeConfig);

homeConfig.$inject = ['$stateProvider'];
function homeConfig($stateProvider){
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'views/home-page.html',
    data:{
      pageTitle: 'Home page'
    }
  });
}