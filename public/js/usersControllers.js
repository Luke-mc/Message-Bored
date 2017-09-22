
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
        newUser ={
          username: $scope.user.username
        };
        Users.addUser(newUser)
        .then(user => {
          console.log('REGISTER',user);
          $scope.user.username = '';
        });
      };



      $scope.test = '';

      $scope.current = localStorage.getItem('user');

      $scope.logIn = function () {
        var user = $filter('filter')($scope.users,{ 'name':`${$scope.test}` });
        if(user[0] && $scope.test !== ''){
          var currentUser = user[0].name;
          var answer = $scope.users.filter(user => { return user.name === $scope.test ;});
          localStorage.removeItem('log');
          localStorage.setItem('log', 'true');
          localStorage.removeItem('user');
          localStorage.removeItem('userId');
          localStorage.setItem('user', currentUser);
          localStorage.setItem('userId', answer[0].id);
          window.location.reload();
          window.location.href = 'http://localhost:8000/';
        }else if($scope.test === ''){
          var emptyUsername = `All fields must be filled.`;
          window.alert(emptyUsername);
        }
        else{
          var wrongUsername = `Sorry, ${$scope.test} is not a registered User.`;
          window.alert(wrongUsername);
        }
      };
}]);