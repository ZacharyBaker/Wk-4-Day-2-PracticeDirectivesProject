var app = angular.module('directivePractice', ['ui.router']);

app.config(function($urlRouterProvider, $stateProvider){
	
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'app/home/homeTmpl.html',
			controller: 'homeCtrl'
		})
		
		
	$urlRouterProvider
		.otherwise('/home');
	
});
