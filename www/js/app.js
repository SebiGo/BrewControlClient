'use strict';

// Declare app level module which depends on views, and components
angular.module('BrewControl', [
  'ngRoute',
  'BrewControl.status',
  'BrewControl.config',
  'BrewControl.version',
  'mobile-angular-ui',
  'mobile-angular-ui.gestures'  
])

.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.otherwise({redirectTo: '/config'});
}]);
