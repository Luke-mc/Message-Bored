angular.module('myApp')
  .filter('topicId', [function() {
    return function(messages, id) {
      return messages.filter((message) => {
        return message.topic_id === id;
      });
    };
}]);

