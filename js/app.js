var youtubeApp = angular.module('youtubeApp', []);
var playlistAPI = 'https://youtube-api-challenger.appspot.com/playlist';    

// Define the `PhoneListController` controller on the `phonecatApp` module
youtubeApp.controller('PlaylistController',
  function PlaylistController($scope, $http) {            
  $scope.init = function () {
      $scope.dataToSend = {
        "data":{
          "type":"Playlist",
           "attributes":{
              "name": "",
              "description": "",
              "thumbnailUrl": "A"
            }
          }
        }
   };

    $scope.doSubmit = function(){
        $http({
          method: 'POST',
          url: playlistAPI,
          data: $scope.dataToSend
        }).then(function successCallback(response) {
          
        }, function errorCallback(response) {
          
        });                
    }    
});


youtubeApp.controller('ListPLController', function ListPLController($scope,$http) {
    $http({
        method: 'GET',
        url: playlistAPI          
      }).then(function successCallback(response) {        
          $scope.arrayObject = response.data.data;
      }, function errorCallback(response) {
        
      });    
});

