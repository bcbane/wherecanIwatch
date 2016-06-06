angular.module('app').controller("movieCtrl", function($scope, movieStatsService, modalSer) {

  $scope.enterKeyM = function(e){

    if (e.keyCode === 13){
      $scope.getMovieID();
    }
  }

  $scope.getMovieID  = function() {
        $scope.loading = true;
        $scope.noInfo = '';
        $scope.movieInfo = [];

        movieStatsService.getMovieID($scope.searchQ)
        .then(function(data) {
            $scope.loading = false;

            if (data === "No Results Found")
              $scope.noInfo = data;
            else
              $scope.movieInfo = data;

          })
      }

      $scope.openModal = function(modalName, height, width, movie) {
        $scope.selMovie = movie;
        modalSer.openModal(modalName, height, width);
      };

      // $scope.closeModal = function() {
      //     modalSer.closeModal();
      // };

      $scope.getMovieSources = function(idNum) {

        movieStatsService.getMovieSources(idNum).then(function (data) {

          $scope.selMovie.ext = data;
          $scope.selMovie.subSources = data.data.subscription_web_sources;
          $scope.selMovie.paySources = data.data.purchase_web_sources;

        })

      }


      })
