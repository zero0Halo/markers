(function(){

  angular
    .module('app')
    .service('AddMark', ['$http', AddMark]);

  //////////

  function AddMark($http, data){
    this.init = function(data){
      return $http.post('data.json', data).then(
        function(response){
          console.log(response)
        },
        function(response){
          console.log(response)
        });
    }

  };

  
})();