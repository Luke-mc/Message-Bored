angular.module('myApp', ['ngRoute']);

angular.module('myApp')
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
      $routeProvider
      .when('/', {
        templateUrl: 'index.html',
        controller: 'myController'
      })
      .when('/users', {
        templateUrl: 'users.html',
        controller: 'usersController'
      })
      .when('/latest', {
        templateUrl: 'latest.html',
        controller: 'latestController'
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




