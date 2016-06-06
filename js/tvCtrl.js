angular.module('app').controller("tvCtrl", function($scope, movieStatsService, modalSer) {

  $scope.enterKeyT = function(e){

    if (e.keyCode === 13){
      $scope.getShowID();
    }
  }


    $scope.getShowID  = function() {
          $scope.loading = true;
          $scope.noInfo = '';
          $scope.showInfo = [];

          movieStatsService.getShowID($scope.searchQ)
          .then(function(data) {
              $scope.loading = false;

              if (data === "No Results Found")
                $scope.noInfo = data;
              else
                $scope.showInfo = data;

          })
        }

        $scope.openModal = function(modalName, height, width, show) {
          $scope.selShow = show;
          modalSer.openModal(modalName, height, width);
        };

        // $scope.closeModal = function() {
        //     modalSer.closeModal();
        // };

        $scope.getShowSources = function(idNum) {

          movieStatsService.getShowSources(idNum).then(function (data) {



            $scope.selShow.sources = data.data.results.web.episodes.all_sources;

          })
        }

          $scope.getShowInfo = function(exInfo) {



            movieStatsService.getShowInfo(exInfo).then(function(data) {



              $scope.selShow.info = data;
            })

          }



        })
