(function(){
  angular
    .module('app')
    .controller('addCtrl', ['$scope', 'marks', 'AddMark', addCtrl]);

  //////////

  function addCtrl($scope, marks, AddMark){
    var categories = {};

    // Get unique category listing. Returns something like:
    //  {
    //    media:true,
    //    news:true
    //  }
    for(var i in marks){
      var category = marks[i].category;

      if(!categories.hasOwnProperty(category)) {
        categories[category] = true;
      }
    };

    $scope.title = 'Add';
    $scope.categories = Object.keys(categories);
    $scope.marks = marks;

    $scope.label = '';
    $scope.url = '';
    $scope.category = '';

    $scope.save = function(){
      var newEntry = {
        label: $scope.label,
        url: $scope.url,
        category: $scope.category
      }

      $scope.marks.push(newEntry);

      AddMark.init($scope);
    }
    
  };

})(); 