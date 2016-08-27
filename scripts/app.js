angular
  .module('app', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('list',{
        url: '/',
        templateUrl: 'scripts/templates/home.html',
        controller: 'homeCtrl',
        resolve: {
          skills: ['Skills', function(Skills){
            return Skills.getSkills();
          }]
        }
      })
      .state('add',{
        url: '/add',
        templateUrl: 'scripts/templates/about.html',
        controller: 'aboutCtrl'
      });    
  }]);