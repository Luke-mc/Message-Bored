angular.module('myApp')
  .provider('Users', function() {


    this.$get = ['$http', function($http) {
       this.users = [];
      return {
        getUsers: function() {
          return $http.get('/users')
          .then((users) => {

              this.users =  users.data;
              console.log('PROV;',this.users);
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
