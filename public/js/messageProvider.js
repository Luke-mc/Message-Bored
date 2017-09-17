angular.module('myApp')
  .provider('Messages', function() {
    this.messages = [];

    this.$get = ['$http', function($http) {
      return {
        getMessages: function() {
          return $http.get('http://localhost:8000/messages')
          .then((messages) => {
            console.log('PROVIDER:',messages);
            return messages.data;
          });
        }
      };
    }];
});