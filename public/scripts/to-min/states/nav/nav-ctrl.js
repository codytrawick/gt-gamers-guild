angular.module('gt-gamers-guild.nav-ctrl', [])
.controller('NavCtrl', function($scope, $state) {
	$scope.go = function(route) {
		$state.go(route);
	}
});
