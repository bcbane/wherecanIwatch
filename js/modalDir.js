angular.module('app').directive('modalDir', function() {
    return {
        restrict: 'E',
        templateUrl: '/js/movieModal.html',
        scope: {
          movie: "="
        },
        controller: function($scope, modalSer) {
            $scope.closeModal = function() {
                modalSer.closeModal();
            };
        }

    }

})
