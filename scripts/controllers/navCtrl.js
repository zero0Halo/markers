(function(){
  angular
    .module('app')
    .controller('navCtrl', ['$scope', '$location', navCtrl]);

  //////////

  function navCtrl($scope, $location){
    $scope.isActive = function (viewLocation) {
      var active = (viewLocation === $location.path());
      return active;
    };
  };

})(); 