var app = angular.module('directivePractice');

app.directive('dirWeather', function(){
	
	return {
		templateUrl: 'app/weather/dirWeather.html',
		scope: {
			currentUser: '=',
			weatherCall: '&'
		}//,
		// controller: 
	}
	
})