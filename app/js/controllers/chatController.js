
myApp.controller('chatController',['$scope','$http','$routeParams', function ($scope,$http,$routeParams) {


$scope.messages = [];
//$scope.nickName = "John";
$scope.nickName = $routeParams.nick;

var createMessage = function(msg){
	if(msg.nickName == $scope.nickName){
		msg.ownMessage = true;
	}

	var auxMessages = [];
	
	
	for(var i=0;i<$scope.messages.length;i++){
		auxMessages.push($scope.messages[i]);
	}

	auxMessages.push({
		message : msg.message,
		nickName: msg.nickName,
		ownMessage : msg.ownMessage
		})
	$scope.messages= [];
	$scope.messages= auxMessages;
	$scope.$apply();
	window.scrollTo(0,document.body.scrollHeight)
};

$scope.messages.addMessage = function (messageObject){
	
	$scope.messages.push();
}


console.log(socket);
	socket.on('receive', function(data){
		console.log('client received message');
		console.log(data);
		createMessage(data);
	});

}]);