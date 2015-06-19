'use strict';

angular.module('BrewControl.config', ['ngRoute'])

.config([ '$routeProvider', function($routeProvider) {
	  $routeProvider.when('/config', {templateUrl: 'config/config.html', reloadOnSearch: false, controller: 'ConfigCtrl'});
}])

.service('sharedProperties', function () {
	return {
    	getHost: function () {
    		if (localStorage.getItem("BrewControl.server") == null) {
    			return "http://raspberrypi:8080/";
    		}
    		return localStorage.getItem("BrewControl.server");
    	},
    	setHost: function(value) {
    		localStorage.setItem("BrewControl.server", value);    	
    	}
    };
})

.controller('ConfigCtrl', 		[ '$scope', 'RestService', 'MashingService', 'sharedProperties',
                  				function($scope, RestService, MashingService, sharedProperties) {

	// connection
	$scope.host = {url: sharedProperties.getHost()};

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
	MashingService.get(function(data) {
		$scope.mashing = data["brewcontrol.mashing"];
	});
	
	$scope.saveMashing = function () {
		if ($scope.host.url != sharedProperties.getHost()) {
			sharedProperties.setHost($scope.host.url);
			location.reload();
		}
		MashingService.save({
			name : $scope.mashing.name
		}, {
			"brewcontrol.mashing" : $scope.mashing
		})
		console.log(MashingService);
	}
} ]);