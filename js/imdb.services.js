var imdbServerice = angular.module('imdb.service',[]);
imdbServerice.factory('ImdbMovies', function($http) {
    return {
      getMovies: function(){
        return $http.get('/data/imdb250.json');
      }
    }

//return 'David';

});
