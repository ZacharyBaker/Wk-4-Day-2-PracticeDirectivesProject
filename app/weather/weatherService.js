var app = angular.module('directivePractice');

app.service('weatherService', function ($http, $q) {

	this.getWeather = function (city) {
		var deferred = $q.defer();

		$http({
			method: 'GET',
			url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=4a4a83ae19e8d14eb7c142668724f4d8'
		}).then(function (response) {
			console.log('this is the temp', response.data.main.temp);
			console.log('this is the description', response.data.weather[0].description)
			deferred.resolve();
		})

		return deferred.promise;
	}

})