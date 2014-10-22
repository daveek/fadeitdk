'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
	function($stateProvider, $urlRouterProvider, $locationProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.html',
			data: {
				pageTitle: ''
			}
		}).
		state('about', {
			url: '/about',
			templateUrl: 'modules/core/views/about.html',
			data: {
				pageTitle: 'About'
			}
		}).
		state('services', {
			url: '/services',
			templateUrl: 'modules/core/views/services.html',
			data: {
				pageTitle: 'Services'
			}
		}).
		state('contact', {
			url: '/contact',
			templateUrl: 'modules/core/views/contact.html',
			data: {
				pageTitle: 'Contact'
			}
		}).
		state('projects', {
			url: '/project/:projectId',
			templateUrl: 'modules/core/views/single-project.html',
			data: {
				pageTitle: ''
			}
		}).
		state('thanks', {
			url: '/thanks',
			templateUrl: 'modules/core/views/thanks.html',
			data: {
				pageTitle: 'Internship at fadeit'
			}
		}).
		state('apply', {
			url: '/apply',
			templateUrl: 'modules/core/views/apply.html',
			data: {
				pageTitle: 'Internship at fadeit'
			}
		}).
		state('technologies', {
			url: '/technologies',
			templateUrl: 'modules/core/views/technologies.html',
			data: {
				pageTitle: 'Technologies'
			}
		});
	}
]);
