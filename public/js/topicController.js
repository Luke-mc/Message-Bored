angular.module('myApp')
    .controller('topicController',['$scope','$route', 'Topics', 'Messages', function($scope, $route, Topics, Messages) {
       $scope.topics = [];
          Topics.getTopics()
          .then((topics) => {
            $scope.topics = topics;
       });

      $scope.messages = [];
          Messages.getMessages()
          .then((messages) => {
            $scope.messages = messages;
      });

      $scope.topic = {
        topicname:''
      };

        $scope.message = {
        body:''
      };

      $scope.addMessage = function(){
        var topic_id = parseInt(localStorage.getItem('topic_id'));
        var author_id = parseInt(localStorage.getItem('userId'));
        newMessage ={
          body: $scope.message.body,
          topic_id: topic_id,
          author_id: author_id,
        };
        Messages.addMessage(newMessage)
        .then(message => {
          console.log('REGISTER',message);
          $scope.message.body = '';
        });
        $route.reload();
      };

      $scope.nothing = [];

      $scope.filter = function() {
        return $scope.messages.filter(message => {
            var result = message.topic_id === topicID;
            console.log(result);
          $scope.messages = result;
        });
      };


       $scope.bindThis = function(id, name) {
        console.log(id);
        localStorage.setItem('topic_name',name);
        localStorage.setItem('topic_id',id);
        $route.reload();
      };

     $scope.topicName = localStorage.getItem('topic_name');
     $scope.topicID= parseInt(localStorage.getItem('topic_id'));


      $scope.addTopic = function(){
        var creator = localStorage.getItem('user');
        var creatorId = localStorage.getItem('userId');
        console.log('CREATOR',creator);
        newTopic ={
          name: $scope.topic.topicname,
          created_by:  creatorId
        };
        Topics.addTopic(newTopic)
        .then(user => {
          $scope.topic.topicname = '';
        });
        $route.reload();
      };


     $scope.current = localStorage.getItem('user');

     $scope.log = localStorage.getItem('log');

     $scope.logOff = function () {
        localStorage.removeItem('log');
        localStorage.setItem('log', 'false');
        localStorage.removeItem('user');
        $route.reload();
        window.location.href = 'http://localhost:8000/';
      };

     $scope.logOn = function (){
      localStorage.removeItem('log');
      localStorage.setItem('log', 'true');
     };

}]);