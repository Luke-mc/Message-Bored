angular.module('myApp')
    .controller('topicController',['$scope','$route', 'Topics', 'Messages', 'Users', function($scope, $route, Topics, Messages,Users) {

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

      $scope.current = localStorage.getItem('user');

      $scope.users = [];
        Users.getUsers()
          .then((users) => {
            $scope.users = users;
        });

      $scope.user = {
         username:''
      };

      $scope.time = function(time) {
          // var timeStamp = Date.parse(time);
          // timeStamp.toLocaleDateString();
          console.log(time);
      };

      $scope.author_id = parseInt(localStorage.getItem('userId'));

      $scope.addMessage = function(){
          var topic_id = parseInt(localStorage.getItem('topic_id'));
          var author_id = parseInt(localStorage.getItem('userId'));
          newMessage ={
            body: $scope.message.body,
            topic_id: topic_id,
            author_id: author_id,
            author_name: $scope.current,
          };
          Messages.addMessage(newMessage)
          .then(message => {
            $scope.message.body = '';
          });
          $route.reload();
      };

      $scope.nothing = [];

      $scope.filter = function() {
          return $scope.messages.filter(message => {
            var result = message.topic_id === topicID;
            $scope.messages = result;
          });
      };

       $scope.bindThis = function(id, name) {
          localStorage.setItem('topic_name',name);
          localStorage.setItem('topic_id',id);
          $route.reload();
      };

      $scope.topicName = localStorage.getItem('topic_name');
      $scope.topicID= parseInt(localStorage.getItem('topic_id'));

      $scope.delete = function(id) {
          Messages.deleteMessage(id)
          .then(user => {
             console.log('delete worked');
          })
          .catch(err => {
             console.log(err);
          });
          $route.reload();
      };

      $scope.addTopic = function(){
          var creator = localStorage.getItem('user');
          var creatorId = parseInt(localStorage.getItem('userId'));
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


