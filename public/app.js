angular.module('newModule', ['ui.router'])
    .config(routingMethod)
    .controller('newController', myController)
    .controller('scotchController', function ($scope, getAppData, megPromise) {

        $scope.message = 'test';
        var response = getAppData.getAPIData().then(
            function (response) {
                console.log(response);
                $scope.scotches = response.data;
            }, function (error) {
                console.log(error);
            });
    });


function myController($scope) {
    console.log('------------------------------------');
    console.log("Loaded!!");
    console.log('------------------------------------');
    $scope.mydata = 'meghana';
}


function routingMethod($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })

        .state('home.list', {
            url: '/list',
            templateUrl: 'partial-home-list.html',
            controller: function ($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })

        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {

                // the main template will be placed here (relatively named)
                '': {
                    templateUrl: 'partial-about.html',
                    controller: function ($scope, megPromise) {

                        megPromise.get('meghana').then(function (response) {
                            $scope.megService = response;
                        }, function (error) {
                            $scope.megService = error;
                        });
                    }
                },

                // the child views will be defined here (absolutely named)
                'columnOne@about': { template: 'Look I am a column!' },

                // for column two, we'll define a separate controller 
                'columnTwo@about': {
                    templateUrl: 'table-data.html',
                    controller: 'scotchController'
                }
            },

        });
}
