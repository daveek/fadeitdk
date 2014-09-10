'use strict';

// Users service used for communicating with the users REST endpoint
angular.module('core').factory('UsersData', function() {
	var users = [
		{
			firstName: 'Dummy',
			lastName: 'User',
			email: 'd@u.com',
			bio: 'Just a dummy user',
			photoURL: 'img/users/default.png',
			level: 'admin',
			updated: '2014-07-28T13:55:54.417+0200',
			created: '2014-07-28T13:55:54.417+0200'
		},
		{
			firstName: 'John',
			lastName: 'Malcom',
			email: 'j@m.com',
			bio: 'Just a dummy user',
			photoURL: 'img/users/default.png',
			level: 'admin',
			updated: '2014-07-28T13:55:54.417+0200',
			created: '2014-07-28T13:55:54.417+0200'
		},
	];

	return users;
});