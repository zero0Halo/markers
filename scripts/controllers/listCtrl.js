(function(){

  angular
    .module('app')
    .controller('listCtrl', ['$scope','marks', listCtrl]);

    //////////

    function listCtrl($scope, marks){
      $scope.title = 'List';
      $scope.marks = marks;

      $scope.update = function(){
        alert();
      }
    };

})();
