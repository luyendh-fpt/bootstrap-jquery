var playlistApp = angular.module('playlistApp', []);
// var playlistAPI = "https://youtube-api-challenger.appspot.com/playlists";
var playlistAPI = "https://youtube-api-challenger2.appspot.com/playlists";

playlistApp.controller('playlistController', function playlistController($scope, $http) {

	$scope.dataToSend = {
		"data":{
		    "type":"Playlist",
		    "attributes":{
		        "name": "",
		        "description": "",
		        "thumbnailUrl": ""
		    }
	    }
	};

	$scope.doSubmit = function(){		
		$http({
          method: 'POST',
          url: playlistAPI,
          headers: {
          	'Content-Type': 'application/json',	
          	'Authorization': localStorage.getItem("youtubeToken"),
          },
          data: $scope.dataToSend
        }).then(function successCallback(response) {
        	alert('Tạo mới playlist thành công.');    	
        }, function errorCallback(errorResponse) { 
        	console.log(errorResponse);
          	alert(errorResponse.data.errors[0].title + '. ' + errorResponse.data.errors[0].detail);
        });   
	}
})