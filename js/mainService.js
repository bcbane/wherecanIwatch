angular.module('app').service("movieStatsService", function($http, $q) {



    this.getMovieID = function(search) {

      var deferred = $q.defer();

      $http({
        method: 'GET',
          //get movie ID.
        url:'http://api-public.guidebox.com/v1.43/US/rKf2rpVzASvF51E4Nt2IHEBrg4HcFA17/search/movie/title/'+search


      }).then(function(response){

        if (!response.data.results[0])
          var info = "No Results Found";
        else
          var info = response.data.results;

          deferred.resolve(info);
      })


      return deferred.promise;
    }

    this.getShowID = function(search) {

      var deferred = $q.defer();



      $http({
        method: 'GET',
        //get show ID. spaces are dashes!!!! https://api.guidebox.com/apidocs
        url:'http://api-public.guidebox.com/v1.43/US/rKf2rpVzASvF51E4Nt2IHEBrg4HcFA17/search/title/'+search

        // url:'http://api-public.guidebox.com/v1.43/US/rKf2rpVzASvF51E4Nt2IHEBrg4HcFA17/search/movie/title/jaws'

      }).then(function(response){

        if (!response.data.results[0])
          var info = "No Results Found";
        else
          var info = response.data.results;

          deferred.resolve(info);
      })


      return deferred.promise;
    }

    this.getMovieSources = function(id) {

      var deferred = $q.defer();

      $http({
        method: 'GET',

        //get source data
        // url:'http://api-public.guidebox.com/v1.43/US/rKf2rpVzASvF51E4Nt2IHEBrg4HcFA17/show/'+id+'/available_content'

        url:'http://api-public.guidebox.com/v1.43/US/rKf2rpVzASvF51E4Nt2IHEBrg4HcFA17/movie/'+id

      }).then(function(response){
          deferred.resolve(response);
      })


      return deferred.promise;
    }

    this.getShowSources = function(id) {

      var deferred = $q.defer();

      $http({
        method: 'GET',

        //get source data
        url:'http://api-public.guidebox.com/v1.43/US/rKf2rpVzASvF51E4Nt2IHEBrg4HcFA17/show/'+id+'/available_content'

      }).then(function(response){
          deferred.resolve(response);
      })


      return deferred.promise;
    }

    this.getShowInfo = function(id) {

      var deferred = $q.defer();

      $http({
        method: 'GET',

        //get source data
        url:'https://api-public.guidebox.com/v1.43/US/Uj0hrgTn1bACZvIlxuhkS53ui13NTi/show/'+id

      }).then(function(response){
          deferred.resolve(response);
      })


      return deferred.promise;
    }

})
