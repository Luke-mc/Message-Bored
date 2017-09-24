angular.module('myApp', ['ngRoute']);

angular.module('myApp')
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
      $routeProvider
      .when('/', {
        templateUrl: 'home.html',
        controller: 'myController'
      })
      .when('/user', {
        templateUrl: 'users.html',
        controller: 'usersController'
      })
      .when('/latest', {
        templateUrl: 'latest.html',
        controller: 'topicController'
      })
      .when('/register', {
        templateUrl: 'register.html',
        controller: 'usersController'
      })
      .when('/login', {
        templateUrl: 'logIn.html',
        controller: 'usersController'
      })
      .when('/topic/:id', {
        templateUrl: 'topic_id.html',
        controller: 'topicController'
      })
      .when('/topic', {
        templateUrl: 'topic.html',
        controller: 'topicController'
      })
       .when('/others', {
        templateUrl: 'other.html',
        controller: 'othersController'
      })
      .otherwise({
        template: '<h1>Sorry nothing here!</h1>'
      });


      $locationProvider.html5Mode(true);
  }])
  .run();




