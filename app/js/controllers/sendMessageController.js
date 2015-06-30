
myApp.controller('sendMessageController',['$scope','$http', function ($scope,$http) {

	$scope.message = '';

	$scope.sendMessage = function() {
       	console.log("submited : User --> "+ $scope.nickName  + "  message : " + $scope.message);
       	console.log(socket);

       	if($scope.message.length>0)
       	{
	       	var message = {nickName: $scope.nickName, message:$scope.message};
       		socket.emit('sendMessage', message);
		}
		$scope.message = '';  //Clear input      
		//Send Message to server
		//////////////////////////////////////////////


    };

}]);