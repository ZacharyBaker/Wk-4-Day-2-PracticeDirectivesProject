var app = angular.module('directivePractice');

app.directive('dirDisplay', function () {

	return {
		templateUrl: 'app/directives/dirDisplay.html',
		link: function (scope, elem, attr) {

			elem.on('click', function () {
				scope.setUser(scope.user);
				scope.showStuff = !scope.showStuff;
				scope.$apply();
			})
			// console.log(scope);
		},
		scope: {
			user: '=userInfo',
			setUser: '&',
			showStuff: '='
		}
	};

});