angular.module('imdb.services',[]);

angular.module('imdb.services')
  .factory('imdbService', function($http){
    return {
      getImdbJson: function(){
        return $http.get('/data/imdb250.json');
      }
  }
});
