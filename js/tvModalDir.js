angular.module('app').directive('tvModalDir', function() {
    return {
        restrict: 'E',
        templateUrl: '/js/showModal.html',
        scope: {
          show: "="
        },
        controller: function($scope, modalSer) {
            $scope.closeModal = function() {
                modalSer.closeModal();
            };
        }

    }

})
