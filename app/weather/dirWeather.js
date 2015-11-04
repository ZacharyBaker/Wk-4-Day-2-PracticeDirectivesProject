var app = angular.module('directivePractice');

app.directive('dirWeather', function () {

	return {
		templateUrl: 'app/weather/dirWeather.html',
		scope: {
			currentUser: '=',
			weatherCall: '&'
		},
		controller: function ($scope) {

			var getWeatherInDirective = function () {
				
				$scope.weatherCall({
					city: $scope.currentUser.city
				}).then(function (response) {
					// $scope.temp = response.temp;
					// $scope.description = response.description;
					$scope.weatherData = response;
					console.log('this is the $scope.weatherData', $scope.weatherData);
				})
			}
			getWeatherInDirective();
			
			$scope.$watch('currentUser', function (value) {
				getWeatherInDirective();
			})
		}
	}
})