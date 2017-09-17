angular.module('myApp')
  .provider('Users', function() {
    this.users = [];

    this.$get = ['$http', function($http) {
      return {
        getUsers: function() {
          return $http.get('http://localhost:8000/users')
          .then((users) => {
            console.log('PROVIDER:',users);
            return users.data;
          });
        },

        addUser: function(data) {
          console.log('POST:',data);
          return  $http({
                    method: 'POST',
                    url: 'http://localhost:8000/users',
                    data: data,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                  })
          .then((user) => {
            console.log('POST 2:',user);
            return user.data;
          });
        }

      };
    }];


});

  // $http.post('http://localhost:8000/users',data, config)