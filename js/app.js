//This is where application config goes
angular.module('movie', ['ngRoute']);

angular.module('movie')
  .config(['$routeProvider',function($routeProvider) {
    //add routes named list, gallery and details
    //application should route back to list if anything else is entered
    $routeProvider.when('/',{
      templateUrl: '/templates/list.html'
    })
    .when('/list',{
      templateUrl: '/templates/list.html'
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
  }])
