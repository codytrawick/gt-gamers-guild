angular.module('gt-gamers-guild.games-ctrl',[])
.factory('selectedGameData', function($http) {
  return {
    currentlySelectedGame : null
  }
})
.controller('GamesCtrl', function($scope, $state, $http, selectedGameData) {

  $scope.selectGame = function(d) {
    selectedGameData.currentlySelectedGame = d;
    $state.go('layout.games.upload')
    $scope.selectedGame = d;
  }

  $scope.games = [];


  $http({
    method:"GET",
    url:"/api"
  }).then(function successCallback(response) {
    $scope.games = response.data;
  }, function errorCallback(response) {
    console.error(response);
  })


  $scope.selectedGame = false;


});
