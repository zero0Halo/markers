(function(){

  angular
    .module('app')
    .service('Marks', ['$http', getMarks]);

  //////////

  function getMarks($http){
    var vm = this;

    vm.getMarks = function(){ 
      return $http.get('data.json').then(function(response){
        return response.data;
      });
    };
  };

  
})();