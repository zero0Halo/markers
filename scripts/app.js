angular
  .module('app', [
    'ui.router', 'ang-drag-drop', 'toolset-navigation'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/');

    var listState = {
      name: 'list',
      url: '/',
      templateUrl: 'scripts/templates/list.html',
      controller: 'listCtrl',
      resolve: {
        marks: ['Marks', function(Marks){
          return Marks.getMarks();
        }]
      }
    };

    var addState = {
      name: 'add',
      url: '/add',
      templateUrl: 'scripts/templates/add.html',
      controller: 'addCtrl',
      resolve: {
        marks: ['Marks', function(Marks){
          return Marks.getMarks();
        }]
      }      
    };

    var imageState = {
      name: 'image',
      url: '/image',
      templateUrl: 'scripts/templates/image.html',
      controller: 'imageCtrl'      
    };

    var newWidgetState = {
      name: 'image.new',
      url: '/',
      templateUrl: 'scripts/controllers/createImageWidget/template.html',
      controller: 'createImageWidget'
    }

    //////////

    $stateProvider.state(listState);
    $stateProvider.state(addState);
    $stateProvider.state(imageState);    
    $stateProvider.state(newWidgetState);    

  }]);