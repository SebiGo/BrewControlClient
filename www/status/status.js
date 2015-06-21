'use strict';

angular.module('BrewControl.status', [ 'ngRoute', 'ngResource', 'Service' ])

.config([ '$routeProvider', function($routeProvider) {
	  $routeProvider.when('/status', {templateUrl: 'status/status.html', reloadOnSearch: false, controller: 'StatusCtrl'});	
}])

.controller(
		'StatusCtrl',
		[ '$scope', '$timeout', 'RestService', 'MashingService', 'sharedProperties',
				function($scope, $timeout, RestService, Mashing, sharedProperties) {

					// bind all rests to $scope.rests[]
					RestService.get(function(data) {
						$scope.rests = data["brewcontrol.rest"];
					});

					// updates all rests in the $scope.rests[] array
					$scope.updateRests = function() {
						for (var i = 0; i < $scope.rests.length; i++) {
							RestService.save({
								uuid : $scope.rests[i].uuid
							}, {
								"brewcontrol.rest" : $scope.rests[i]
							});
						}
					}

					// add a new rest and update $scope.rests[] from server
					$scope.newRest = {};
					$scope.saveNewRest = function() {
						RestService.save({
							"brewcontrol.rest" : $scope.newRest
						}).$promise.then(function() {
							RestService.get(function(data) {
								$scope.rests = data["brewcontrol.rest"];
							});
						});
					}

					// delete a rest and update $scope.rests[] from server
					$scope.deleteRest = function(uuid) {
						RestService.delete({uuid : uuid}).$promise.then(function() {
							RestService.get(function(data) {
								$scope.rests = data["brewcontrol.rest"];
							});
						});
					}

					// bind mashing to $scope.mashing
					Mashing.get(function(data) {
						$scope.mashing = data["brewcontrol.mashing"];
					});
					
					// bind mashing start function to $scope
					$scope.mashingStart = function() {
						Mashing.start().$promise.then(function() {
							Mashing.get(function(data) {
								$timeout(function() {
									$scope.mashing = data["brewcontrol.mashing"];
								}, 1200);
							});
						})							
						
					}
					// bind mashing start function to $scope
					$scope.mashingContinue = function() {
						Mashing.continue();
					}
					// bind graph function to $scope
					$scope.mashingGraph = sharedProperties.getHost() + 'mashing/graph';
					
					// poll for status (rest & mashing services)
					function tick(millis) {
						$timeout(function() {
							$scope.mashingGraph = sharedProperties.getHost() + 'mashing/graph?'+new Date().getTime();
							Mashing.get(function(data) {
								$scope.mashing = data["brewcontrol.mashing"];
							});
							RestService.get(function(data) {
								$scope.rests = data["brewcontrol.rest"];
							});
							tick(millis);
						}, millis)
					}
					tick(1000);
				} ]);