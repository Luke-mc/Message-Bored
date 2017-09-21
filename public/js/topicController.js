angular.module('myApp')
    .controller('topicController',['$scope', 'Topics', 'Messages', function($scope, Topics, Messages) {
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

      $scope.addTopic = function(){
        var creator = localStorage.getItem('currentUser');
        console.log(creator);
        newTopic ={
          name: $scope.topic.topicname,
          created_by: creator
        };
        Topics.addTopic(newTopic)
        .then(user => {
          $scope.topic.topicname = '';
        });
      };


     $scope.current = localStorage.getItem('currentUser');

     $scope.log = localStorage.getItem('log');

     $scope.logOff = function () {
        localStorage.removeItem('log');
        localStorage.setItem('log', 'false');
        localStorage.removeItem('currentUser');
        window.location.reload();
        window.location.href = 'http://localhost:8000/';
      };

     $scope.logOn = function (){
      localStorage.removeItem('log');
      localStorage.setItem('log', 'true');
      // window.location.reload();
      // window.location.href = 'http://localhost:8000/';
     };

}]);