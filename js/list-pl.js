var app = angular.module('listplayApp', []);
var playlistAPI = "https://youtube-api-challenger2.appspot.com/playlists";

app.controller('listPLController', function listPLController($scope, $http) {
	 $http({   
      method: 'GET',
      url: playlistAPI,
      headers: {
        'Content-Type': 'application/json', 
        'Authorization': localStorage.getItem("youtubeToken"),
      }
    }).then(function successCallback(response) {
        $scope.playlist = response.data.data;        
    }, function errorCallback(errorResponse) { 
      console.log(errorResponse);
        alert(errorResponse.data.errors[0].title + '. ' + errorResponse.data.errors[0].detail);
    }); 
})