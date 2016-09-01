(function(){

  angular
    .module('app')
    .controller('imageCtrl', ['$scope', '$state', imageCtrl]);

    //////////

    function imageCtrl($scope, $state){
      $scope.title = 'Image';

      $scope.dogs = [
        {
          id: 1,
          name: 'Spot',
          image: '/images/dog-01.jpeg',
          caption: "Spot is such a good dog. He hardly ever bites anyone.",
          captionPos: "left"
        },
        {
          id: 2,
          name: 'Rex',
          image: '/images/dog-02.jpeg',
          caption: "You know what happens when a dog catches a car? Neither does he.",
          captionPos: "bottom"
        }        
      ]

      $scope.log = function(x){
        console.log('Logged: ' + x)
      }

      $scope.dropped = function($event,$data){
        // console.log($event, $data)
        $state.go('image.new', {data: $data});
      }
    };

})();
