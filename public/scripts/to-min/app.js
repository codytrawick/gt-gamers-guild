angular.module('gt-gamers-guild', [
	'ui.bootstrap',
	'ui.router',

	'gt-gamers-guild.state-config',
	'gt-gamers-guild.templates',

	'gt-gamers-guild.layout-ctrl',
	'gt-gamers-guild.auth-ctrl',
	'gt-gamers-guild.home-ctrl',
	'gt-gamers-guild.games-ctrl',
	'gt-gamers-guild.upload-ctrl',
	'gt-gamers-guild.d3',
	'gt-gamers-guild.nav-ctrl'
])
.config(function($locationProvider) {
	$locationProvider.html5Mode({ enabled: true, requireBase: false });
})
.run(function() {
});
