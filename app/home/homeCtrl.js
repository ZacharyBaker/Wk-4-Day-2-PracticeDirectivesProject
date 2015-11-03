var app = angular.module('directivePractice')

.controller('homeCtrl', function($scope){
	
	$scope.user = {
		name: 'Geoff Mammy',
		age: 43,
		email: 'geofDude@gmail.com'
	}
	
	$scope.showStuff = true;
	
});