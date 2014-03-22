'use strict';

EmailApp.controller('MainCtrl', function ($scope, $location, Email) {
    //$scope.emails = Email.query();

    $scope.search = function() {
        Email.query({
                q: $scope.query,
                sort: $scope.sort_order,
                desc: $scope.is_desc,
                offset: $scope.offset,
                limit: $scope.limit
            },
            function(data) {
                $scope.more = data.length === $scope.limit;
                $scope.members = $scope.members.concat(data);
            });
    };

    $scope.sort = function(col) {
        if($scope.sort_order === col) {
            $scope.is_desc = !$scope.is_desc;
        }
        else {
            $scope.sort_order = col;
            $scope.is_desc = false;
        }
        $scope.reset();
    };

    $scope.show_more = function() {
        $scope.offset += $scope.limit;
        $scope.search();
    };

    $scope.has_more = function() {
        return $scope.more;
    };

    $scope.reset = function() {
        //debugger;
        $scope.limit = 20;
        $scope.offset = 0;
        $scope.members = [];
        $scope.more = true;
        $scope.search();
    }

    //eId, Id, or id?
    $scope.delete = function() {
        var id = this.member._id;
        Email.delete({id: id }, function() {
            $('#email_'+id).fadeOut(200);
        });
    };

    $scope.sort_order = 'email';
    $scope.is_desc = false;

    $scope.reset();
});
