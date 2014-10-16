'use strict';

// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function() {
	// Init module configuration options
	var applicationModuleName = 'fadeit';
	var applicationModuleVendorDependencies = ['ngResource', 'ngCookies', 'ngAnimate', 'ui.router', 'ui.bootstrap', 'ui.utils', 'angularMoment', 'linkify', 'duParallax'];

	// Add a new vertical module
	var registerModule = function(moduleName) {
		// Create angular module
		angular.module(moduleName, []);

		// Add the module to the AngularJS configuration file
		angular.module(applicationModuleName).requires.push(moduleName);
	};

	return {
		applicationModuleName: applicationModuleName,
		applicationModuleVendorDependencies: applicationModuleVendorDependencies,
		registerModule: registerModule
	};
})();

//Start by defining the main module and adding the module dependencies
angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

// Setting HTML5 Location Mode
angular.module(ApplicationConfiguration.applicationModuleName).config(['$locationProvider',
	function($locationProvider) {
		$locationProvider.hashPrefix('!');
		//$locationProvider.html5Mode(true);
	}
]);

angular.module(ApplicationConfiguration.applicationModuleName).controller('AppCtrl', ['$scope', '$location', function AppCtrl ( $scope, $location ) {
	//global variables
	$scope.wow = '';
	$scope.pageTitle = '';
	$scope.currentDate = new Date();

	$scope.initWow = function initWow(){
		$scope.wow = '';

		$scope.wow = new WOW({
			live: false
		});

		$scope.wow.init();
	};

  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
		window.scrollTo(0,0);

		if ( angular.isDefined( toState.data.pageTitle ) ) {
			$scope.pageTitle = toState.data.pageTitle ;
		}
	});

	$scope.$on('changedPage', function changedPage(event, pageTitle){
		$scope.pageTitle = pageTitle;
	});
}]);

//Then define the init function for starting up the application
angular.element(document).ready(function() {
	//Fixing facebook bug with redirect
	if (window.location.hash === '#_=_') window.location.hash = '#!';

	//Then init the app
	angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
});