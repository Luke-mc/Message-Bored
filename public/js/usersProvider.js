angular.module('myApp')
  .provider('Users', function() {


    this.$get = ['$http', function($http) {
       this.users = [];
      return {
        getUsers: function() {
          return $http.get('/users')
          .then((users) => {


              return users.data;
          });
        },
           getUserApiInfo: function() {
          return $http.get('/api/users?page=2')
          .then((users) => {

              console.log('FAKE;',users.data);
              return users.data;
          });
        },

        addUser: function(data) {
          console.log('POST:',  data);
          return  $http.post('/users', data)
          .then((user) => {
            return user.data;
          });
        }

      };
    }];


});
