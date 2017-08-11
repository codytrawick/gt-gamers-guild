angular.module('gt-gamers-guild.state-config', [])
.config(function(
		$stateProvider
	) {
	$stateProvider
			.state('layout', {
				abstract: true,
				url: '',
				views: {
					nav: {
						templateUrl: 'states/nav/nav-tmpl.html',
						controller: 'NavCtrl'
					},
					layout: {
						templateUrl: 'states/layout/layout-tmpl.html',
						controller: 'LayoutCtrl'
					}
				}
			})
			.state('layout.home', {
				url: '/',
				views: {
					page: {
						templateUrl: 'states/home/home-tmpl.html',
						controller: 'HomeCtrl'
					}
				}
			})
			.state('layout.games', {
				url: '/',
				views: {
					page: {
						templateUrl: 'states/games/games-tmpl.html',
						controller: 'GamesCtrl'
					}
				}
			})
			.state('layout.games.upload', {
				parent: 'layout.games',
				views: {
					form: {
						templateUrl: 'states/games/upload-tmpl.html',
						controller: 'UploadCtrl'
					}
				}
			})
			.state('layout.auth', {
				url: '/',
				views: {
					page: {
						templateUrl: 'states/auth/auth-tmpl.html',
						controller: 'AuthCtrl'
					}
				}
			});
	});
