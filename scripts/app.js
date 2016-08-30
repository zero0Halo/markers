angular
  .module('app', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('list',{
        url: '/',
        templateUrl: 'scripts/templates/list.html',
        controller: 'listCtrl',
        resolve: {
          marks: ['Marks', function(Marks){
            return Marks.getMarks();
          }]
        }
      })

      .state('add',{
        url: '/add',
        templateUrl: 'scripts/templates/add.html',
        controller: 'addCtrl',
        resolve: {
          marks: ['Marks', function(Marks){
            return Marks.getMarks();
          }]
        }
      })

      .state('image',{
        url: '/image',
        templateUrl: 'scripts/templates/image.html',
        controller: 'imageCtrl'
      })
  }]);