angular.module('myApp')
    .controller('myController',['$scope', 'Topics', 'Messages', function($scope, Topics, Messages) {
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


     $scope.current = localStorage.getItem('user');


     $scope.log = localStorage.getItem('log');

     $scope.logOff = function () {
        localStorage.removeItem('log');
        localStorage.setItem('log', 'false');
        localStorage.removeItem('user');
        localStorage.removeItem('userId');
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