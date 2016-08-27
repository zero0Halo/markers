(function(){

  angular
    .module('app')
    .controller('homeCtrl', ['$scope','skills', homeCtrl]);

    //////////

    function homeCtrl($scope, skills){
      $scope.title = 'Home';
      $scope.skills = skills;

      $scope.update = function(){
        alert();
      }
    };

})();
