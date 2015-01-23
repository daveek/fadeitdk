'use strict';

// Setting up route
angular.module('core').config(['$translateProvider', function($translateProvider) {
  $translateProvider.translations('en-us', {
    BACKGROUND: 'Background'
  });
  $translateProvider.translations('da-dk', {
    BACKGROUND: 'Baggrund'
  });
  $translateProvider.preferredLanguage('en-us');
}]);