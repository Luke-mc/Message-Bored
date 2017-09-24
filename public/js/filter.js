angular.module('myApp')
  .filter('topicId', [function() {
    return function(messages, id) {
      return messages.filter((message) => {
        return message.topic_id === id;
      });
    };
}])

  .filter('authorId', [function() {
    return function(users, id) {
      return users.filter((user) => {
        return user.author_id === id;
      });
    };
}]);

