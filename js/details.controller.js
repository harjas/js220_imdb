angular.module('app.movie')
  .controller('DetailsController', function($scope, ImdbMovies, $routeParams){

    //load movies on page load
    ImdbMovies.getMovies().success(function(data) {
      $scope.movie = data[$routeParams.movieId-1];
      $scope.listSize = data.length;
    });


  });//controller
