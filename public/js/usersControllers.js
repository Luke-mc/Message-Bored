// angular.module('myApp')
//     .controller('usersController', ['$scope' , 'userService', function($scope, userService) {
//       $scope.users = userService;
//     }]);




angular.module('myApp')
  .controller('usersController', ['$scope' , 'Users','$filter', function($scope, Users,$filter) {
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

      $scope.test = '';

      $scope.current = localStorage.getItem('currentUser');

      $scope.logIn = function () {
        var user = $filter('filter')($scope.users,{ 'name':`${$scope.test}` });
        if(user[0]){
          var currentUser = user[0].name;
          localStorage.removeItem('log');
          localStorage.setItem('log', 'true');
          localStorage.removeItem('currentUser');
          localStorage.setItem('currentUser', currentUser);
          window.location.reload();
          window.location.href = 'http://localhost:8000/';
          console.log($scope.current);
        }else{
          var wrongUsername = `Sorry, ${$scope.test} is not a registered User.`;
          window.alert(wrongUsername);
        }
      };
}]);