'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
	function($stateProvider, $urlRouterProvider, $locationProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		/*
		 * Routes pass pageTitle [data] that is used for template titles
		 * (will be emited to the 'fadeit' parent module)
		 *
		 * An imageUrl [data] param can be passed
		 * which will result in rendering an image instead of the text
		 *
		 * data: {pageTitle} is MANDATORY
		 */
		$stateProvider.
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.html',
			data: {
				pageTitle: 'Stories',
				imageUrl: 'img/brand/logo_full.svg'
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
		state('stories', {
			url: '/story/:projectId',
			templateUrl: 'modules/core/views/single-project.html',
			data: {
				pageTitle: ''
			}
		}).
		state('thanks', {
			url: '/thanks',
			templateUrl: 'modules/core/views/thanks.html',
			data: {
				pageTitle: 'Thanks',
				hideNews: true
			}
		}).
		state('apply', {
			url: '/apply',
			templateUrl: 'modules/core/views/apply.html',
			data: {
				pageTitle: 'Internship at fadeit',
				hideNews: true
			}
		}).
		state('toolbox', {
			url: '/toolbox',
			templateUrl: 'modules/core/views/technologies.html',
			data: {
				pageTitle: 'Toolbox',
				hideNews: true
			}
		});
	}
]);
