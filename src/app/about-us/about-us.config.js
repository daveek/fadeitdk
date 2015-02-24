fadeitConfig.pushAfterBootstrap('fadeit.aboutUs');

angular.module('fadeit.aboutUs').config(aboutUsConfig);

aboutUsConfig.$inject = ['$stateProvider'];
function aboutUsConfig($stateProvider){
  $stateProvider.state('about-us', {
    url: '/about',
    templateUrl: 'views/about-us-page.html',
    data:{
      pageTitle: 'ABOUT_PAGE_TITLE',
      pageDesc: 'ABOUT_SUMMARY'
    }
  });
}