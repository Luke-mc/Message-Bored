angular.module('myApp')
    .controller('myController',['$scope' , 'Topics', 'Messages', function($scope, Topics, Messages) {
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

}]);