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
			id: 'ipvision',
			background: '#AFB1B4',
			title: 'IPVision',
			link: 'story/ipvision',
			uiRoute: '/story/ipvision',
			activeCover: 'lg',
			shortDescription: '',
			tags: {
				0: 'VoIP',
				1: 'Asterisk',
				2: 'PHP'
			}
		},
		{
			id: 'ipvision',
			background: '#AFB1B4',
			title: 'IPVision',
			link: 'story/ipvision',
			uiRoute: '/story/ipvision',
			activeCover: 'md',
			shortDescription: '',
			tags: {
				0: 'VoIP',
				1: 'Asterisk',
				2: 'PHP'
			}
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
			dummy: true,
			activeCover: 'sm'
		},
		{
			dummy: true,
			activeCover: 'sm'
		},
		{
			id: 'gatesense',
			background: '#0C7A93',
			title: 'Gatesense',
			link: 'story/gatesense',
			uiRoute: '/story/gatesense',
			activeCover: 'sm',
			shortDescription: '',
			tags: {
				0: 'IoT',
				1: 'Big Data',
				2: 'Integration'
			}
		},
		{
			dummy: true,
			activeCover: 'sm'
		},
		{
			id: 'alexandra',
			background: '#A9A7A8',
			title: 'Alexandra Institute',
			link: 'story/alexandra',
			uiRoute: '/story/alexandra',
			activeCover: 'sm',
			shortDescription: '',
			tags: {
				0: 'Open Data',
				1: 'CKAN',
				2: 'Drupal'
			}
		}
	];

	return projectPreviewData;
});


// Project service used for individual project
angular.module('core').factory('ProjectData', function() {
	var projectData = [{
			id: 'ipvision',
			color: {
				links: '#A91400',
				base: '#A91400', //background-base
				accent: '#8C0000', //darker background
				text: '#FFFFFF', //color for the base
				darkText: '#333333', //text for light background
				light: '#F9F9F9',	//light background
				lightAccent: '#E7E8EA', //darker background (for borders maybe)
				coverBackground: '#E7E8EA'
			},
			title: 'IPVision',
			link: 'story/ipvision',
			uiRoute: '/story/ipvision',
			tags: {
				0: 'VoIP',
				1: 'Asterisk',
				2: 'PHP'
			},
			images: {
				heading: 'Project images and further reading',
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
			urls:{
	      0:{
					title: 'IPVision website',
					link: 'http://www.ipvision.dk/',
					text: 'To find out more, take a look at the '
				},
				1:{
					title: 'Portal prototype',
					link: 'http://danmind.ru/portal/main',
					text: 'Below you can see one of the projects that we\'ve built together, Portal. A prototype is also avaialble here: '
				},
			},
			content: {
				shortDescription: 'Integrating PBXs, Cloud services, mail clients and back-office servers',
				intro: {
					heading: 'About IPVision',
					text: 'IPVision A/S is a Copenhagen-based Mobile Virtual Network Operator (MVNO). They are one of the leading IP Telephony providers for B2B customers in Denmark.'
				},
				mainHeading: 'Our collaboration',
				paragraphs: {
					0: 'In IPVision, we work on state of the art self service portals, backoffice tools, phone usage systems, accounting software and automation of various workflows.'
				}
			}
		},
		{
			id: 'alexandra',
			color: {
				links: '#F26436',
				base: '#A9A7A8',
				accent: '#7C7B79',
				text: '#FFFFFF',
				darkText: '#333333',
				light: '#F9F9F9',
				lightAccent: '#E7E8EA',
				coverBackground: '#3F4040'
			},
			title: 'Alexandra Institute',
			link: 'story/alexandra',
			uiRoute: '/story/alexandra',
			tags: {
				0: 'Open Data',
				1: 'CKAN',
				2: 'Drupal'
			},
			images: {
				heading: 'Where to learn more',
				cover: 'cover_sm@2x.jpg',
				screens: {}
			},
      urls: {
      	0:{
					title: 'their website',
					link: 'http://www.alexandra.dk/uk/',
					text: 'To read more about Alexandra, go to '
				},
				1:{
					title: 'here',
					link: 'http://www.alexandra.dk/uk/labs/smart-city-lab/pages/smart-city-lab.aspx',
					text: 'You can find more details about Smart City Lab '
				},
			},
			content: {
				shortDescription: 'Building bridges with research-based innovation',
				intro: {
					heading: 'About Alexandra Institute',
					text: 'Alexandra Institute is an IT research and innovation organization founded in 1999.'
				},
				mainHeading: 'Our collaboration',
				paragraphs: {
					0: 'By merging commercial relevance, the latest IT research, technology and user involvement, Alexandra creates IT-based products that generate social value and contribute to economic growth. In other words, they are a bridge-builder between research, private corporations, public institutions and citizens.',
					1: 'We work with Alexandra\'s Smart City Lab on building modern Open Data portals that are based on CKAN and Drupal.'
				}
			}
		},
		{
			id: 'gatesense',
			color: {
				links: '#87B816',
				base: '#12506E',
				accent: '#0E415A',
				text: '#FFFFFF',
				darkText: '#333333',
				light: '#F9F9F9',
				lightAccent: '#E7E8EA',
				coverBackground: '#1B698F'
			},
			title: 'About Gatesense',
			link: 'story/gatesense',
			uiRoute: '/story/gatesense',
			tags: {
				0: 'IoT',
				1: 'Big Data'
			},
			images: {
				heading: 'Learn more about Gatesense',
				cover: 'cover_sm@2x.jpg',
				screens: {}
			},
      urls: {
      	0:{
					title: 'Gatesense website',
					link: 'http://gatesense.com',
					text: 'This still-evolving project is currently building an international community of developers and other entrepreneurs, cities and organisations with a passion for sustainability. Check out the '
				}
			},
			content: {
				shortDescription: 'Unleashing creativity and creating significant value for society',
				intro: {
					heading: 'Gatesense',
					text: 'Gatesense is a modern Internet of Things platform. Its primary purpose is to build a community and a set of concrete tools for solving today\'s environment problems.'
				},
				mainHeading: 'Our collaboration',
				paragraphs: {
					0: 'We play a major role in research and technical development of the platform. The effort is lead by Grundfos and Alexandra Institute.'
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
				name : 'Docker',
				size : 150,
				circles : 2,
				font : 28,
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

