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
      $scope.user = {
        username:''
      };
      $scope.register = function(){
        console.log('USER', $scope.user.username);
        newUser ={
          username: $scope.user.username
        };
        console.log('NEW USER', newUser);
        Users.addUser(newUser)
        .then(user => {
          console.log('post success', user);
          $scope.user.username = '';
        });
      };
}]);