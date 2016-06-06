//This is where application config goes
angular.module('app.movie', ['ngRoute','imdb.service']);

angular.module('app.movie')
  .config(['$routeProvider', function($routeProvider) {
    //add routes named list, gallery and details
    //application should route back to list if anything else is entered
    $routeProvider.when('/',{
      templateUrl: '/templates/list.html',
      controller: 'ListController'
    })
    .when('/list',{
      templateUrl: '/templates/list.html',
      controller: 'ListController'
    })
    .when('/gallery',{
      templateUrl: '/templates/gallery.html'
    })
    .when('/details',{
      templateUrl: '/templates/details.html'
    })
    .otherwise({
      redirectTo: '/'
    })
  }]);//end config
