'use strict';

angular

.module('Service', [ 'ngResource' ])

.factory('RestService', [ '$resource', 'sharedProperties', function($resource, sharedProperties) {
	return $resource(sharedProperties.getHost() + 'rest/:uuid', {
		uuid : '@uuid'
	});
} ])

.factory('MashingService', [ '$resource', 'sharedProperties', function($resource, sharedProperties) {
	return $resource(sharedProperties.getHost() + 'mashing/:name', {}, {
		start : {
			method : 'GET',
			url : sharedProperties.getHost() + 'mashing/start'
		},
		continue : {
			method : 'GET',
			url : sharedProperties.getHost() + 'mashing/continue'
		},
		graph : {
			method : 'GET',
			url : sharedProperties.getHost() + 'mashing/graph'
		}
	});
} ]);
