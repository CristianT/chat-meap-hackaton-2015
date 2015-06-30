
myApp.controller('loginController',['$scope','$location', function ($scope, $location) {

	$scope.login = function() {
		var thePath = "/chat/"+$scope.nickName;
		$location.path(thePath);
		console.log($scope.nickName);
	};

}]);