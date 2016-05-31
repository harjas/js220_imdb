//This is where application config goes
angular.module('imdbApp', ['ngRoute']);

angular.module('imdbApp')
	.config(['$routeProvider', function($routeProvider) {
		//add routes named list, gallery and details
		//application should route back to list if anything else is entered
		$routeProvider.when('/', {
			templateUrl: 'templates/list.html',
			controller: 'listController'
		}).when('/gallery', {
			templateUrl: 'templates/gallery.html'
		}).when('/details', {
			templateUrl: 'templates/details.html'
		}).otherwise({
			redirectTo: '/'
		})
	}]);