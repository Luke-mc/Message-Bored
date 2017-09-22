angular.module('myApp')
  .provider('Users', function() {
    this.users = [];

    this.$get = ['$http', function($http) {
      return {
        getUsers: function() {
          return $http.get('/users')
          .then((users) => {
            console.log(users.data);
            return users.data;
          });
        },

        addUser: function(data) {
          console.log('POST:',  data);
          return  $http.post('/users', data)
          .then((user) => {
            console.log('POST 2:',user);
            console.log('USERS:',user);
            return user.data;
          });
        }

      };
    }];


});
