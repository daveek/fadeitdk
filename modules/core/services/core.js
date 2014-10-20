'use strict';

// Menu service used for creating the main menu
angular.module('core').factory('MenuData', function() {
	var menuItems = [{
			title: 'projects',
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

// Project preview service used for displaying data in the grid preview
angular.module('core').factory('ProjectPreview', function() {
	var projectPreviewData = [{
			id: 'portal',
			background: '#AFB1B4',
			title: 'Portal',
			link: 'project/portal',
			uiRoute: '/project/portal',
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
			link: 'project/ymobile',
			uiRoute: '/project/ymobile',
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
			link: 'project/ols',
			uiRoute: '/project/ols',
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
			link: 'project/aleris-hamlet',
			uiRoute: '/project/aleris-hamlet',
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
			link: 'project/portal',
			uiRoute: '/project/portal',
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
			link: 'project/ols',
			uiRoute: '/project/ols',
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
			link: 'project/ymobile',
			uiRoute: '/project/ymobile',
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


// Project service used for individual project
angular.module('core').factory('ProjectData', function() {
	var projectData = [{
			id: 'portal',
			color: {
				base: '#A91400',
				accent: '#8C0000',
				text: '#FFFFFF'
			},
			title: 'Portal',
			link: 'project/portal',
			uiRoute: '/project/portal',
			tags: {
				0: 'Drupal',
				1: 'UX Design',
				2: 'Responsive'
			},
			content: {
				shortDescription: 'A management and overview tool for telcos',
        paragraphs: {
          0: 'We started this project in order to help IPVision to build a tool that allows them to manageme user subscriptions, data packages and accounts within internally. The application offers overview of client consumption and allows gives the administrators tools to quickly switch between users, view reports and do changes to their accounts.',
          1: 'We\'ve built the system on a base Drupal instance, creating everything else from scratch. A special focus was put on experience design and mobile device optimazitation.',
          2: 'The challenge behind this project was to create a responsive front-end application that gives overview and control over a company\'s users. It had to offer a detailed representation of call, SMS, MMS and data consumption and allow users to quickly switch between subscriptions and addon plans.'
        }
			}
		}];

	return projectData;
});

// Animation service used for defining consistent animations
angular.module('core').factory('AnimationService', function(){
	var animationData = [{
		header: {
			duration: '0.3s',
			delay: '0.3s',
			durationMedium: '0.3s'
		},
		base: {
			shortDuration: '0.5s',
			duration: '1s',
      longDuration: '1.5s',
      shortDelay: '0.2s',
			delay: '0.5s',
			longDelay: '1s'
		},
		custom: {}
	}];

	return animationData;
});

