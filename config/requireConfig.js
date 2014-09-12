require.config({
	paths: {
		/*3rd party libraries that should be loaded before ng*/
		moment: '../lib/momentjs/min/moment.min',
		jquery: '../lib/jquery/dist/jquery.min',
		/*AngularJS*/
		angular: '../lib/angular/angular',
		angularResource: '../lib/angular-resource/angular-resource',
		angularCookies: '../lib/angular-cookies/angular-cookies',
		angularAnimate: '../lib/angular-animate/angular-animate',
		/*Angular UI*/
		angularUIbootstrap: '../lib/angular-bootstrap/ui-bootstrap',
		angularUIutils: '../lib/angular-ui-utils/ui-utils',
		angularUIrouter: '../lib/angular-ui-router/release/angular-ui-router',
		angularNG_upload: '../lib/ngUpload/ng-upload.min',
		angularMoment: '../lib/angular-moment-fadeit/angular-moment',
		angularLinkify: '../lib/angular-linkify-fadeit/angular-linkify.min',
		angularWow: '../lib/wowjs/dist/wow.min',
		angularScroll: '../lib/angular-scroll/angular-scroll.min',
		angularParallax: '../lib/ng-parallax/angular-parallax.min',
		otherJS: '../scripts/js.min',
		/*Application Config*/
		appConfig: '../config/config',
		/*Application Modules*/
		modulesCoreRegister: '../modules/core/core',
		moduleCoreConfigRoutes: '../modules/core/config/routes',
		moduleCoreControllersHome:	'../modules/core/controllers/home',
		moduleCoreControllersProject:	'../modules/core/controllers/project',
		moduleCoreServicesCore:	'../modules/core/services/core'
	},
	shim: {
		'moment': {
			deps: ['jquery']
		},
		'angular' : {'exports' : 'angular'},
		'angularResource': ['angular'],
		'angularCookies': ['angular'],
		'angularAnimate': ['angular'],
		'angularUIbootstrap': {
			deps: ['angular', 'angularResource', 'angularCookies', 'angularAnimate']
		},
		'angularUIutils': {
			deps: ['angular', 'angularResource', 'angularCookies', 'angularAnimate']
		},
		'angularUIrouter': {
			deps: ['angular', 'angularResource', 'angularCookies', 'angularAnimate']
		},
		'angularNG_upload': {
			deps: ['angular', 'angularResource', 'angularCookies', 'angularAnimate']
		},
		'angularMoment': {
			deps: ['angular', 'moment', 'angularResource', 'angularCookies', 'angularAnimate']
		},
		'angularLinkify': {
			deps: ['angular', 'angularResource', 'angularCookies', 'angularAnimate']
		},
		'angularWow': {
			deps: ['angular', 'angularResource', 'angularCookies', 'angularAnimate']
		},
		'angularScroll': {
			deps: ['angular', 'angularResource', 'angularCookies', 'angularAnimate']
		},
		'angularParallax': {
			deps: ['angular', 'angularResource', 'angularCookies', 'angularAnimate']
		},
		'appConfig': {
			deps: ['angular', 'angularResource', 'angularCookies', 'angularAnimate', 'angularUIbootstrap', 'angularUIutils', 'angularUIrouter', 'angularNG_upload', 'angularMoment', 'angularLinkify', 'angularWow', 'angularScroll', 'angularParallax']
		},
		'modulesCoreRegister': {
			deps: ['angular', 'appConfig']
		},
		'moduleCoreConfigRoutes': {
			deps: ['angular', 'appConfig', 'modulesCoreRegister']
		},
		'moduleCoreControllersHome': {
			deps: ['angular', 'appConfig', 'modulesCoreRegister']
		},
		'moduleCoreControllersProject': {
			deps: ['angular', 'appConfig', 'modulesCoreRegister']
		},
		'moduleCoreServicesCore': {
			deps: ['angular', 'appConfig', 'modulesCoreRegister']
		}
	},
	priority: [
		'jquery', 'moment', 'angular', 'angularResource', 'angularCookies', 'angularAnimate', 'angularUIbootstrap', 'angularUIutils', 'angularUIrouter', 'angularNG_upload', 'angularMoment', 'angularLinkify', 'angularWow', 'angularScroll', 'angularParallax', 'appConfig'
	]
});

window.name = "NG_DEFER_BOOTSTRAP!";

require([
	'jquery',
	'moment',
	'angular',
	'angularResource',
	'angularCookies',
	'angularAnimate',
	'angularUIbootstrap',
	'angularUIutils',
	'angularUIrouter',
	'angularNG_upload',
	'angularMoment',
	'angularLinkify',
	'angularWow',
	'angularScroll',
	'angularParallax',
	'appConfig'
], function(){
		//Start by defining the main module and adding the module dependencies
		angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

		// Setting HTML5 Location Mode
		angular.module(ApplicationConfiguration.applicationModuleName).config(['$locationProvider',
			function($locationProvider) {
				$locationProvider.hashPrefix('!');
			}
		]);

		angular.element(document).ready(function() {
			//Fixing facebook bug with redirect
			if (window.location.hash === '#_=_') window.location.hash = '#!';

			//Then init the app
			angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
		});

		require([
			'moduleCoreServicesCore',
			'modulesCoreRegister',
			'moduleCoreConfigRoutes',
			'moduleCoreControllersHome',
			'moduleCoreControllersProject',
			'otherJS'
		], function(){
			angular.resumeBootstrap();
		});
});