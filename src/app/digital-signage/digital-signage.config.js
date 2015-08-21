/* Migration tasks
 * - remove 'digital-signage-container' class conditional from navigation
 * - split LESS
 * - uninstall angular-mousewheel / remove it + hamster.js from grunt config
 * - clean-up the routes below
 * - remove ngAnimate from play (grunt conf)
 */

playConfig.pushAfterBootstrap('play.digitalSignage', ['monospaced.mousewheel', 'ngAnimate']);

angular.module('play.digitalSignage').config(digitalSignageConfig);

digitalSignageConfig.$inject = ['$stateProvider'];
function digitalSignageConfig($stateProvider){
  $stateProvider.state('app.info-display', {
    url: '',
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
      pageTitle: 'DS_TRY_NOW_PAGE_TITLE',
      pageDesc: 'DS_TRY_NOW_SUMMARY',
      noMenu: true, //TODO: delete when moved
      digitalSignage: true //TODO: delete when moved
    }
  }).state('app.info-display.features.supported', {
    url: '/supported-devices',
    templateUrl: 'views/ds-supported-devices-page.html',
    data:{
      pageTitle: 'DS_SUPPORTED_DEVICES_PAGE_TITLE',
      pageDesc: 'DS_SUPPORTED_DEVICES_SUMMARY',
      noMenu: true, //TODO: delete when moved
      digitalSignage: true //TODO: delete when moved
    }
  }).state('app.info-display.features.media', {
    url: '/features-and-supported-media',
    templateUrl: 'views/ds-features-and-media-page.html',
    data:{
      pageTitle: 'DS_FEATURES_PAGE_TITLE',
      pageDesc: 'DS_FEATURES_SUMMARY',
      noMenu: true, //TODO: delete when moved
      digitalSignage: true //TODO: delete when moved
    }
  }).state('app.info-display.features.pricing', {
    url: '/pricing',
    templateUrl: 'views/ds-pricing-page.html',
    data:{
      pageTitle: 'DS_PRICING_PAGE_TITLE',
      pageDesc: 'DS_PRICING_SUMMARY',
      noMenu: true, //TODO: delete when moved
      digitalSignage: true //TODO: delete when moved
    }
  }).state('app.info-display.features.contact', {
    url: '/help',
    templateUrl: 'views/ds-contact-page.html',
    data:{
      pageTitle: 'DS_CONTACT_PAGE_TITLE',
      pageDesc: 'DS_CONTACT_SUMMARY',
      noMenu: true, //TODO: delete when moved
      digitalSignage: true //TODO: delete when moved
    }
  });
}