'use strict';

// Menu service used for creating the main menu
angular.module('core').factory('MenuData', function() {
	var menuItems = [{
			title: 'stories',
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
		},
		{
			title: 'Toolbox',
			link: 'toolbox',
			uiRoute: '/toolbox'
		}];

	return menuItems;
});

// Project preview service used for displaying data in the grid preview
angular.module('core').factory('ProjectPreview', function() {
	var projectPreviewData = [
		{
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
		}
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
				text: '#FFFFFF',
				darkText: '#333333',
				light: '#F9F9F9',
				lightAccent: '#E7E8EA'
			},
			title: 'Portal',
			link: 'project/portal',
			uiRoute: '/project/portal',
			tags: {
				0: 'Drupal',
				1: 'UX Design',
				2: 'Responsive'
			},
			images: {
				cover: 'cover_sm@2x.jpg',
				screens: {
					0: {
						filename: '0.png',
						title: 'Dashboard / App home',
						desc: 'The front page of the application, displaying the user consumption for the selected period of time.'
					},
					1: {
						filename: '1.png',
						title: 'Consumption Overview (line chart)',
						desc: 'A detailed view of the "talk" consumption for the selected period.'
					},
					2: {
						filename: '2.png',
						title: 'Subscription Management',
						desc: 'A detailed subscription view for the selected user.'
					},
					3: {
						filename: '3.png',
						title: 'User Account Overview',
						desc: 'The user account main page, displaying general user info.'
					},
					4: {
						filename: '4.png',
						title: 'Mobile Views',
						desc: 'An overview of the responsive implementation.'
					}
				}
			},
      url: {
				title: 'Portal prototype',
				link: 'http://danmind.ru/portal/main',
				text: 'To view the initial prototype for this application, go here: '
			},
			content: {
				shortDescription: 'A management and overview tool for telcos',
				intro: {
					heading: 'Optimizing processes',
					text: 'We helped IPVision build a tool that they can use to manage user subscriptions, data packages and accounts. The application offers overview of client consumption and allows quick switching between user and company accounts.'
				},
				mainHeading: 'Project description',
				paragraphs: {
					0: 'We built the system on a base Drupal system, creating everything else from scratch. A special focus was put on experience design and mobile device optimazitation.',
					1: 'The challenge behind this project was to create a robust, extensible application that aligns with the rapid changes in telcos. It had to offer a detailed representation of call, SMS, MMS and data consumption and allow users to quickly switch between subscriptions and addon plans.'
				}
			}
		}];

	return projectData;
});

// Animation service used for defining consistent animations
angular.module('core').factory('StyleService', function(){
	this.getStyles = function getStyles(){
		/*
		 * Contains less variables - (duplicated from CSS)
		 * NEED to match the global_styles LESS file when changing
		 *
		 */
		var styles = {

			cssClasses: {},
			projectOffset: 0,
			newsSectionHeight: 300
		};

		return styles;
	};

	return this;
});

// Style service used for defining classes, sizes
angular.module('core').factory('AnimationService', function(){
	var animationData = {
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
	};

	return animationData;
});

// Balls service (Sander's ballz)
angular.module('core').factory('TechnologiesService', function(){
	this.getTechnologies = function getTechnologies(){
		var technologies = [{
				name : 'AngularJS',
				size : 250,
				circles : 3,
				font : 35,
				bold : true
			},
			{
				name : 'Python',
				size : 250,
				circles : 3,
				font : 43,
				bold : true
			},
			{
				name : 'PHP',
				size : 80,
				circles : 1,
				font : 25,
				bold : false
			},
			{
				name : 'nginx',
				size : 170,
				circles : 4,
				font : 35,
				bold : false
			},
			{
				name : 'Flask',
				size : 150,
				circles : 2,
				font : 33,
				bold : false
			},
			{
				name : 'Drupal',
				size : 170,
				circles : 2,
				font : 35,
				bold : false
			},
			{
				name : 'JavaScript',
				size : 260,
				circles : 3,
				font : 35,
				bold : true
			},
			{
				name : 'Apache',
				size : 200,
				circles : 1,
				font : 35,
				bold : false
			},
			{
				name : 'Java',
				size : 180,
				circles : 3,
				font : 40,
				bold : true
			},
			{
				name : 'Solr',
				size : 150,
				circles : 4,
				font : 30,
				bold : false
			},
			{
				name : 'Linux',
				size : 240,
				circles : 3,
				font : 45,
				bold : true
			},
			{
				name : 'Git',
				size : 160,
				circles : 4,
				font : 37,
				bold : false
			},
			{
				name : 'Vagrant',
				size : 225,
				circles : 2,
				font : 35,
				bold : false
			},
			{
				name : 'Puppet',
				size : 190,
				circles : 2,
				font : 34,
				bold : false
			},
			{
				name : 'PostgreSQL',
				size : 210,
				circles : 2,
				font : 27,
				bold : false
			},
			{
				name : 'MySQL',
				size : 170,
				circles : 4,
				font : 30,
				bold : false
			},
		];

		return technologies;
	};

	return this;
});

