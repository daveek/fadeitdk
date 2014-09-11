'use strict';

// Users service used for communicating with the users REST endpoint
angular.module('core').factory('MenuData', function() {
	var menuItems = [{
			title: 'About us',
			link: 'about',
			uiRoute: '/about'
		}, {
			title: 'Services',
			link: 'services',
			uiRoute: '/services'
		}, {
			title: 'Contact',
			link: 'contact',
			uiRoute: '/contact'
		}];

	return menuItems;
});