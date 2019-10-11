 var app = angular.module("app", []);
    app.controller("myCltrl", function ($scope, $http) {

        $scope.SendData = function () {
           // use $.param jQuery function to serialize data from JSON 
            var data = {
                fName: $scope.latitude,
                           lName: $scope.longitude
            };
        
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }

            var req = {
                        method: 'POST',
                        url: '/Users/LENOVO/MEAN/server.js',
                    headers: {
                        'Content-Type': undefined
                    },
                        data: { location: $scope.latitude,
                                 location2: $scope.longitude    }
            }
            $http(req).then(function successCallback(response){
                            $scope.PostDataResponse= response;
            }, function errorCallback(response){
                            $scope.ResponseDetails = response;
             });

              };

    });