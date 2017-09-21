angular.module('myApp')
  .provider('Topics', function() {
    this.topics = [];

    this.$get = ['$http', function($http) {
      return {
        getTopics: function() {
          return $http.get('http://localhost:8000/topics')
          .then((topics) => {
            console.log('PROVIDER:',topics);
            return topics.data;
          });
        },

        addTopic: function(data) {
          console.log('POST TOPIC:',  data);
          return  $http.post('/topics', data)
          .then((topic) => {
            console.log('POST 2:',topic);
            return topic.data;
          });
        }

      };
    }];

});