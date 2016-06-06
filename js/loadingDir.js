angular.module('app').directive('loadingDir', function() {
    return {
        restrict: 'E',
        template: '<div class="loading-img" ng-if="loading"><div class="cssload-thecube"><div class="cssload-cube cssload-c1"></div><div class="cssload-cube cssload-c2"></div><div class="cssload-cube cssload-c4"></div><div class="cssload-cube cssload-c3"></div></div></div>',

    }

})
