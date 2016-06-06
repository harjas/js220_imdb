angular.module('app.movie')
  .controller('ListController', function($scope, ImdbMovies){

    //load movies on page load
    ImdbMovies.getMovies().success(function(data) {
      $scope.movies = data;
    });

    //call to refecth list of movies
    $scope.getMovies = function() {
          ImdbMovies.getMovies().success(function(data) {
            $scope.movies = data;
          });
    };//$scope.movies = ImdbMovies;


  });//controller
