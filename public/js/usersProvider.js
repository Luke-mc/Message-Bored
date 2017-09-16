angular.module('myApp')
  .provider('Users', function() {
    this.users = [];

    this.$get = ['$http', function($http) {
      return {
        getUsers: function() {
          return $http.get('/api/users')
          .then((users) => {
            console.log('PROVIDER:',users);
            return users.data;
          });
        }
      };
    }];
});