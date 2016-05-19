//This is where application config goes
angular.module('imdbApp', ['ngRoute']);

angular.module('imdbApp')
  .config(['$routeProvider', function($routeProvider) {
    //add routes named list, gallery and details
    $routeProvider.when('/list', {
    	templateUrl: 'templates/list.html'
    })
    .when('/gallery', {
    	templateUrl: 'templates/gallery.html'
    })
    .when('/details', {
    	templateUrl: 'templates/details.html'
    })

    //application should route back to list if anything else is entered 
    .otherwise({
    	redirectTo: '/'
    });
  }]);
