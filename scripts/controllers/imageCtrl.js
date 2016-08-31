(function(){

  angular
    .module('app')
    .controller('imageCtrl', ['$scope', imageCtrl]);

    //////////

    function imageCtrl($scope){
      $scope.title = 'Image';

      $scope.dogs = [
        {
          name: 'Spot',
          image: '/images/dog-01.jpeg',
          caption: "Spot is such a good dog. He hardly ever bites anyone.",
          captionPos: "left"
        },
        {
          name: 'Rex',
          image: '/images/dog-02.jpeg',
          caption: "You know what happens when a dog catches a car? Neither does he.",
          captionPos: "bottom"
        }        
      ]

      $scope.dropped = function($event,$data){
        console.log($event, $data)
      }
    };

})();
