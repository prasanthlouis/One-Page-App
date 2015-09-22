var scotchApp = angular.module('scotchApp', ['ngRoute']);
    scotchApp.config(function($routeProvider) {
        $routeProvider
        //providing the routes so no refreshes are needed. That's why you added the ngRoute in the beginning
        //depending on the arugment, it'll call the respective page and the controller.

          
            .when('/', {
                templateUrl : 'home.html',
                controller  : 'mainController'
            })
            .when('/about', {
                templateUrl : 'about.html',
                controller  : 'aboutController'
            })
            .when('/contact', {
                templateUrl : 'contact.html',
                controller  : 'contactController'
            });
    });

//the controller will be responsible for what's being added to the page.
    
    scotchApp.controller('mainController', function($scope) {
        $scope.message = 'Prasanth Louis';
        $scope.age = 'Twenty Two';
        $scope.place='USA';
    });

    scotchApp.controller('aboutController', function($scope) {
        $scope.message = 'Programming Enthusiast';
         $scope.linkedin = 'https://www.linkedin.com/in/prasanthlouis';
        $scope.github = 'https://github.com/prasanthlouis';
        $scope.quora='https://www.quora.com/Prasanth-Louis';
        $scope.stackoverflow='http://stackoverflow.com/users/3293761/prasanth-louis'
    });

    scotchApp.controller('contactController', function($scope) {
        $scope.message = 'prasanthlouis21@gmail.com';
        $scope.twitter = 'https://twitter.com/prasanthlouis';
        $scope.instagram = 'https://instagram.com/prasanthlouis/';



    });