fadeitConfig.pushAfterBootstrap('fadeit.expertise');

angular.module('fadeit.expertise').config(expertiseConfig);

expertiseConfig.$inject = ['$stateProvider'];
function expertiseConfig($stateProvider){
  $stateProvider.state('expertise', {
    url: '/expertise',
    templateUrl: 'views/expertise-page.html',
    data:{
      pageTitle: 'Our expertise'
    }
  });
}