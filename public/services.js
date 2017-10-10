angular.module('newModule')
    .factory('getAppData', function ($http) {
        return {
            getAPIData: function () {
                return $http.get('https://jsonplaceholder.typicode.com/users');
            }
        };
    });



// var app = require('app.js');

// describe('testing the main controller', function () {
//     var $scope, $http, newModule, $defer;
//     beforeEach(function () {
//         var app = angular.app('app');
//         angular.mock.$inject(_$scope_, _$http_, _$q_){
//             $scope = $scope;
//             $http = $http;
//             $defer = $q.defer();
//         }

//         newModule.then(function () {
//             return $defer.resolve({
//                 data: [{
//                     "id": 1,
//                     "name": "Leanne Graham",
//                     "username": "Bret",
//                     "email": "Sincere@april.biz",
//                 },
//                 {
//                     "id": 2,
//                     "name": "Ervin Howell",
//                     "username": "Antonette",
//                     "email": "Shanna@melissa.tv",
//                 }];
//             }, function () {
//                 return $defer.reject({});
//             });


//         });
//         describe('testing the first controller', function () {

//             it('testing the scope value', function () {

//             })
//         }
//         describe('testing the second controller', function () { }
//         describe('testing the main controller', function () { }
//         describe('testing the main controller', function () { }
//         describe('testing the main controller', function () { }
//     })