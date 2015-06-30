var myApp =  angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/login', {
        templateUrl: 'Register_Login.html',
        controller: 'loginController'
      }).
      when('/chat/:nick', {
        templateUrl: 'Chat.html',
        controller: 'chatController',

      }).
      otherwise({
        templateUrl: 'Register_Login.html',
        controller: 'loginController'
      });
  }]);




