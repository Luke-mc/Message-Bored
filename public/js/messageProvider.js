angular.module('myApp')
  .provider('Messages', function() {
    this.messages = [];

    this.$get = ['$http', function($http) {
      return {
        getMessages: function() {
          return $http.get('/messages')
          .then((messages) => {
            return messages.data;
          });
        },

         addMessage: function(data) {
          console.log('POST:',  data);
          return  $http.post('/messages', data)
          .then((message) => {
            console.log('POST 2:',message);
            console.log('messageS:',message);
            return message.data;
          });
        }

      };
    }];
});