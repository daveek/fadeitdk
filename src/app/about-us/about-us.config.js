fadeitConfig.pushAfterBootstrap('fadeit.aboutUs');

angular.module('fadeit.aboutUs').config(aboutUsConfig);

aboutUsConfig.$inject = ['$stateProvider'];
function aboutUsConfig($stateProvider){
  $stateProvider.state('about-us', {
    url: '/about-us',
    templateUrl: 'views/about-us-page.html',
    data:{
      pageTitle: 'About us'
    }
  });
}