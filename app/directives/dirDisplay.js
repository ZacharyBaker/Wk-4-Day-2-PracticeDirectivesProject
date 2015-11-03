var app = angular.module('directivePractice');

app.directive('dirDisplay', function(){
	
	return {
		templateUrl: 'app/directives/dirDisplay.html',
		link: function(scope, elem, attr){
			// console.log(scope, elem, attr);
			elem.on('click', function(){
				
				scope.showStuff = !scope.showStuff;
				scope.$apply();
			})
		}
	};
	
});