// angular.module('myApp')
//     .controller('usersController', ['$scope' , 'userService', function($scope, userService) {
//       $scope.users = userService;
//     }]);




angular.module('myApp')
  .controller('usersController', ['$scope' , 'Users', function($scope, Users) {
     $scope.users = [];
        Users.getUsers()
        .then((users) => {
          $scope.users = users;
        });
}]);