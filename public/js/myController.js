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


     $scope.log = localStorage.getItem('log');

     // $scope.log = function() {
     //  if($scope.log === 'true'){
     //    return $scope.logOff();
     //  }else{
     //    $scope.logOff();
     //  }
     // };

     $scope.logOff = function () {
        localStorage.removeItem('log');
        localStorage.setItem('log', 'false');
      };

     $scope.logOn = function (){
      localStorage.removeItem('log');
      localStorage.setItem('log', 'true');
     };


    $scope.navLoad = function(){
      if($scope.log === 'true'){
         $scope.logged = 'Log Out';
         $scope.register = null;
      }else{
       $scope.logged = 'Log On';
      $scope.register = 'Register';
     }

    };






}]);