angular.module('myApp')
.service('userService', ['$http', function($http) {
  var users = [];

  $http.get('/users')
    .then((dbUsers) => {
      console.log(dbUsers);
      users = dbUsers.data;
      console.log('service;', users);
  });

    function getUsers(){
      return users;
    }


  return {
    getUsers: getUsers(),
    // getUsers: function() { return users; },
    // getUser: function(index) { return users[index]; },
    // addUser: function(user) { users.push(user); }
  };
}]);