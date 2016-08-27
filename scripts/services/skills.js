(function(){

  angular
    .module('app')
    .service('Skills', ['$http', getSkills]);

  //////////

  function getSkills($http){
    var vm = this;

    vm.getSkills = function(){ 
      return $http.get('data.json').then(function(response){
        return response.data;
      });
    };
  };

  
})();