(function(){

  angular
    .module('app')
    .controller('createImageWidget', ['$scope', createImageWidget]);

    //////////

    function createImageWidget($scope){
      $scope.template = './template.html'
    };

})();
