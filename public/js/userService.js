angular.module('myApp')
.service('userService', ['$http', function($http) {
  var users = [];

  $http.get('/api/users')
  .then((dbUsers) => {
    console.log(dbUsers);
    users = dbUsers;
  });


  return {
    users: users,
    getUsers: function() { return user; },
    getUser: function(index) { return users[index]; },
    addUser: function(user) { users.push(user); }
  };
}]);