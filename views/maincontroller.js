/**
 * Created by david on 10/05/2015.
 */

//var myModule = angular.module('myModule', []);
angular.module('myModule', []);
function mainController($scope, $http) {
    $scope.formData = {};
    $http.get('/users/')
        .success(function(data){
            $scope.users=data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error:' + data);
        });

}
