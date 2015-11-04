var app = angular.module('directivePractice');

app.directive('dirWeather', function () {

	return {
		templateUrl: 'app/weather/dirWeather.html',
		scope: {
			currentUser: '=',
			weatherCall: '&'
		},
		controller: function ($scope) {
			$scope.weatherCall({
				city: $scope.currentUser.city
			}).then(function (response) {
				$scope.temp = response.temp;
				$scope.description = response.description;
			})
		}
	}
})