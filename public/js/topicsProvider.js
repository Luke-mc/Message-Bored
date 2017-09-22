angular.module('myApp')
  .provider('Topics', function() {
    this.topics = [];

    this.$get = ['$http', function($http) {
      return {
        getTopics: function() {
          return $http.get('http://localhost:8000/topics')
          .then((topics) => {
            return topics.data;
          });
        },

        addTopic: function(data) {
          return  $http.post('/topics', data)
          .then((topic) => {
            return topic.data;
          });
        }

      };
    }];

});