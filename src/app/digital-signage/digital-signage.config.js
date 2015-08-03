/* Migration tasks
 * - remove 'digital-signage-container' class conditional from navigation
 * - split LESS
 * - uninstall angular-mousewheel / remove it + hamster.js from grunt config
 * - clean-up the routes below
 * - remove ngAnimate from fadeit (grunt conf)
 */

fadeitConfig.pushAfterBootstrap('fadeit.digitalSignage', ['monospaced.mousewheel', 'ngAnimate']);

angular.module('fadeit.digitalSignage').config(digitalSignageConfig);

digitalSignageConfig.$inject = ['$stateProvider'];
function digitalSignageConfig($stateProvider){
  $stateProvider.state('app.info-display', {
    url: '/information-display',
    templateUrl: 'views/digital-signage-page.html',
    controller: 'IntroController',
    controllerAs: 'vm',
    data:{
      pageTitle: 'DS_PAGE_TITLE',
      pageDesc: 'DS_SUMMARY',
      noMenu: true, //TODO: delete when moved
      digitalSignage: true //TODO: delete when moved
    }
  }).state('app.info-display.features', {
    url: '/features',
    templateUrl: 'views/ds-features-page.html',
    data:{
      pageTitle: 'DS_PAGE_TITLE',
      pageDesc: 'DS_SUMMARY',
      noMenu: true, //TODO: delete when moved
      digitalSignage: true //TODO: delete when moved
    }
  });
}