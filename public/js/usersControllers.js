
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
        }else{
          var wrongUsername = `Sorry, ${$scope.test} is not a registered User.`;
          window.alert(wrongUsername);
        }
      };
}]);