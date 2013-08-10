

angular.module("TodoApp").directive('sorted', ["$templateCache", function ($templateCache) {
    
    return {
        scope: true,
        transclude: true,
        template: $templateCache.get("sorted"),

        controller: function($scope, $element, $attrs) {
            $scope.sort = $attrs.sorted;

            $scope.do_sort = function() { $scope.sort_by($scope.sort); };

            $scope.do_show = function(asc) {
                return (asc != $scope.sort_desc) && ($scope.sort_order == $scope.sort);
            };
        }
    };
    
}]);
