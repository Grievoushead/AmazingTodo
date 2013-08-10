
angular.module("TodoApp").controller("ListCtrl", ["$scope", "$location", "Todo", function ($scope, $location, Todo) {

    $scope.search = function () {
        Todo.query({
            q: $scope.query,
            limit: $scope.limit,
            offset: $scope.offset,
            sort: $scope.sort_order,
            desc: $scope.sort_desc
        },
            function (items) {
                var cnt = items.length;
                $scope.no_more = cnt < 20;
                $scope.items = $scope.items.concat(items);
            }
        );
    };

    $scope.reset = function () {
        $scope.offset = 0;
        $scope.items = [];
        $scope.search();
    };

    $scope.show_more = function () { return !$scope.no_more; };

    $scope.sort_by = function (ord) {
        if ($scope.sort_order == ord) { $scope.sort_desc = !$scope.sort_desc; }
        else { $scope.sort_desc = false; }
        $scope.sort_order = ord;
        $scope.reset();
    };

    $scope.delete = function () {
        var itemId = this.item.TodoItemId;
        Todo.delete({ id: itemId }, function () {
            $("#item_" + itemId).fadeOut();
        });
    };

    $scope.limit = 20;
    $scope.sort_order = 'Priority';
    $scope.sort_desc = false;

    $scope.reset();
}]);
