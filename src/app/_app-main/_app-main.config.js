/*
 * Configuration block for the root module.
 * This module is the only one that does not require pushAfterBootstrap
 * (it is already registered in _app-main.init.js)
 *
 */

angular.module(fadeitConfig.appRootModuleName).config(rootConfig);

rootConfig.$inject = ['$locationProvider', '$urlRouterProvider', '$stateProvider'];
function rootConfig($locationProvider, $urlRouterProvider, $stateProvider){
   $stateProvider.state('404', {
    url: '/404',
    templateUrl: 'views/404.html',
    data:{
      pageTitle: 'OMG WE COULDN\'T FIND THIS PAGE'
    }
  });

  $locationProvider.hashPrefix('!');
  $urlRouterProvider.otherwise('/');
}
