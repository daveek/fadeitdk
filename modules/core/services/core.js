'use strict';

// Users service used for communicating with the users REST endpoint
angular.module('core').factory('MenuData', function() {
	var menuItems = [{
			title: 'Projects',
			link: '',
			uiRoute: '/'
		},
		{
			title: 'About us',
			link: 'about',
			uiRoute: '/about'
		},
		{
			title: 'Services',
			link: 'services',
			uiRoute: '/services'
		},
		{
			title: 'Contact',
			link: 'contact',
			uiRoute: '/contact'
		}];

	return menuItems;
});

// Users service used for communicating with the users REST endpoint
angular.module('core').factory('ProjectPreview', function() {
	var projectPreviewData = [{
			id: 'portal',
			background: '#AFB1B4',
			title: 'Portal',
			link: 'projects/portal',
			uiRoute: '/projects/portal',
			activeCover: 'lg',
			shortDescription: '',
			tags: {
				0: 'Drupal',
				1: 'UX Design',
				2: 'Responsive'
			} //max 3 tags
		},
		{
			dummy: true,
			activeCover: 'sm'
		},
		{
			dummy: true,
			activeCover: 'sm'
		},
		{
			id: 'ymobile',
			background: '#590B0B',
			title: 'yMobile',
			link: 'projects/ymobile',
			uiRoute: '/projects/ymobile',
			activeCover: 'sm',
			shortDescription: '',
			tags: {
				0: 'Drupal',
				1: 'CMS',
				2: 'Responsive'
			} //max 3 tags
		},
		{
			dummy: true,
			activeCover: 'sm'
		},
		{
			id: 'ols',
			background: '#0C7A93',
			title: 'OLS',
			link: 'projects/ols',
			uiRoute: '/projects/ols',
			activeCover: 'md',
			shortDescription: '',
			tags: {
				0: 'Python',
				1: 'AngularJS',
				2: 'iOS'
			} //max 3 tags
		},
		{
			dummy: true,
			activeCover: 'sm'
		},
		{
			dummy: true,
			activeCover: 'sm'
		},
		{
			dummy: true,
			activeCover: 'sm'
		},
		{
			id: 'aleris-hamlet',
			background: '#319E8F',
			title: 'Aleris/Hamlet',
			link: 'projects/aleris-hamlet',
			uiRoute: '/projects/aleris-hamlet',
			activeCover: 'sm',
			shortDescription: '',
			tags: {
				0: 'Drupal',
				1: 'Responsive',
				2: 'AngularJS'
			} //max 3 tags
		},
		{
			dummy: true,
			activeCover: 'sm'
		},
		{
			dummy: true,
			activeCover: 'sm'
		},
		{
			id: 'portal',
			background: '#AFB1B4',
			title: 'Portal',
			link: 'projects/portal',
			uiRoute: '/projects/portal',
			activeCover: 'sm',
			shortDescription: '',
			tags: {
				0: 'Drupal',
				1: 'UX Design',
				2: 'Responsive'
			} //max 3 tags
		},
		{
			dummy: true,
			activeCover: 'sm'
		},
		{
			id: 'ols',
			background: '#0C7A93',
			title: 'OLS',
			link: 'projects/ols',
			uiRoute: '/projects/ols',
			activeCover: 'sm',
			shortDescription: '',
			tags: {
				0: 'Python',
				1: 'AngularJS',
				2: 'iOS'
			} //max 3 tags
		},
		{
			dummy: true,
			activeCover: 'sm'
		},
		{
			dummy: true,
			activeCover: 'sm'
		},
		{
			dummy: true,
			activeCover: 'sm'
		},
		{
			dummy: true,
			activeCover: 'sm'
		},
		{
			id: 'ymobile',
			background: '#590B0B',
			title: 'yMobile',
			link: 'projects/ymobile',
			uiRoute: '/projects/ymobile',
			activeCover: 'md',
			shortDescription: '',
			tags: {
				0: 'Drupal',
				1: 'CMS',
				2: 'Responsive'
			} //max 3 tags
		},
	];

	return projectPreviewData;
});


// Users service used for communicating with the users REST endpoint
angular.module('core').factory('ProjectData', function() {
	var projectData = [{
			id: 'portal',
			background: '#AFB1B4',
			title: 'Portal',
			link: 'projects/portal',
			uiRoute: '/projects/portal',
			shortDescription: '',
			tags: {
				0: 'Drupal',
				1: 'UX Design',
				2: 'Responsive'
			} //max 3 tags
		}];

	return projectData;
});