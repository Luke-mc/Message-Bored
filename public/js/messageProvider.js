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
          return  $http.post('/messages', data)
          .then((message) => {
            return message.data;
          });
        },
        deleteMessage: function(id) {
          console.log(`message/${id}`);
          return  $http.delete(`/messages/${id}`)
          .then((message) => {
            return message.data;
          });
        }
      };
    }];
});