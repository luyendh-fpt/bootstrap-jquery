var app = angular.module('loginApp', []);
var authenticationAPI = "https://youtube-api-challenger2.appspot.com/authentication";

app.controller('loginController', function loginController($scope, $http) {

	$scope.dataToSend = {
		"data":{
		    "type":"MemberLogin",
		    "attributes":{
		        "username": "",
		        "password": ""
		    }
	    }
	};
	$scope.doLogin = function(){		
		console.log(JSON.stringify($scope.dataToSend));
		$http({
          method: 'POST',
          url: authenticationAPI,
          data: $scope.dataToSend
        }).then(function successCallback(response) {
        	console.log(response);
        	localStorage.setItem("youtubeToken", response.data.data.attributes.secretToken);          	
        }, function errorCallback(errorResponse) { 
        	console.log(errorResponse);
          	alert(errorResponse.data.errors[0].title + '. ' + errorResponse.data.errors[0].detail);
        });   
	}

	$scope.testLogin = function(){				
		$http({ 	
          method: 'GET',
          url: authenticationAPI,
          headers: {
          	'Content-Type': 'application/json',	
          	'Authorization': localStorage.getItem("youtubeToken"),
          }
        }).then(function successCallback(response) {
        	console.log(response);        	
        }, function errorCallback(errorResponse) { 
        	console.log(errorResponse);
          	alert(errorResponse.data.errors[0].title + '. ' + errorResponse.data.errors[0].detail);
        });   
	}
})