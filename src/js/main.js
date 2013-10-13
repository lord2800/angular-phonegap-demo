angular.module('AngularPhonegapDemo', [])
	.config(function ($logProvider) {
		$logProvider.debugEnabled(true);
	})

	.controller('MainController', function ($scope, $log, GeolocationService) {
		$scope.errors = [];
		$scope.position = null;

		GeolocationService.getCurrentPosition(
			function (position) {
				$log.debug('Got position from Cordova: ' + angular.toJson(position));
				$scope.$apply(function () { $scope.position = position; });
			},
			function (error) {
				$log.debug('Got error from Cordova: ' + angular.toJson(position));
				$scope.$apply(function () { $scope.errors.push(error); });
			},
			{ enableHighAccuracy: true }
		);
	})

	.factory('GeolocationService', function () {
		return navigator.geolocation;
	});
