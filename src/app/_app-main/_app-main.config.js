/*
 * Configuration block for the root module.
 * This module is the only one that does not require pushAfterBootstrap
 * (it is already registered in _app-main.init.js)
 *
 */

angular.module(fadeitConfig.appRootModuleName).config(rootConfig);

angular.module(fadeitConfig.appRootModuleName).controller('NotFoundController', notFoundController);
notFoundController.$inject = ['$rootScope'];
function notFoundController($rootScope) {
    $rootScope.responseStatus = 404;
}

rootConfig.$inject = ['$locationProvider', '$urlRouterProvider', '$stateProvider'];
function rootConfig($locationProvider, $urlRouterProvider, $stateProvider){
  $stateProvider.state('404', {
    url: '/404',
    templateUrl: 'views/404.html',
    controller: 'NotFoundController',
    data:{
      pageTitle: '404_PAGE_TITLE',
      multiLang: false
    }
  });
  $stateProvider.state('app', {
    abstract: true,
    url: '/{lang:(?:da|en)}',
    template: '<ui-view/>'
  });
  $stateProvider.state('app.root', {
  url: '',
    templateUrl: 'views/home-page.html',
    data:{
      darkMode: true,
      pageTitle: 'FRONT_PAGE_TITLE',
      pageDesc: 'SEO_META_DESC'
    }
  });

  $urlRouterProvider.when('/', '/da');
  $urlRouterProvider.otherwise('/404');

  //Turn ON 'html5mode' (true) for prod - if you forget you need to buy beers for everybody in the office
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');
}
