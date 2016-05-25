//This is where application config goes
angular.module('imdbApp', ['ngRoute', 'services']);

angular.module('imdbApp')
  .config(['$routeProvider', function($routeProvider) {
    //add routes named list, gallery and details
    //application should route back to list if anything else is entered
    $routeProvider.when('/gallery', {
      templateUrl: 'templates/gallery.html'
    })
    .when('/list', {
      templateUrl: 'templates/list.html',
      controller: 'listController'
    })
    .when('/details', {
      templateUrl:'templates/details.html'
    })
    .when('/', {
      templateUrl:'templates/list.html'
    })
    .otherwise({
      redirectTo: '/list'
    })
  }])
