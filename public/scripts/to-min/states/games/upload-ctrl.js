angular.module('gt-gamers-guild.upload-ctrl',[])
.controller('UploadCtrl', function($scope, $state, $http) {
  $scope.gameID = $scope.$parent.selectedGame;

  $("#fileForm").on("submit", function(e) {
    e.preventDefault();
  })
});
