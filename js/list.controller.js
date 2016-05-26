angular.module('app.movie',['imdbService']);

agular.module('list.controller')
  .controller('listController', function($scope, imdbService){
    $scope.GetMovies = function(){
      imdbService.getImdbJson().success(function(data) {
        $scope.movies = data;
      });
    };
  });
