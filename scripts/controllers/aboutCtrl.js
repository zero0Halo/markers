(function(){
  angular
    .module('app')
    .controller('aboutCtrl', ['$scope', aboutCtrl]);

  //////////

  function aboutCtrl($scope){
    $scope.title = 'About';
  };

})(); 