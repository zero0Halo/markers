(function(){

  angular
    .module('app')
    .controller('imageCtrl', ['$scope', imageCtrl]);

    //////////

    function imageCtrl($scope, marks){
      $scope.title = 'Image';

      $scope.update = function(){
        alert();
      }
    };

})();
