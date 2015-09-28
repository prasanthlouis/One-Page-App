
var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);

animateApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'page-home.html',
            controller: 'mainController'
        })
         .when('/work', {
            templateUrl: 'page-work.html',
            controller: 'workController'
        })
        .when('/about', {
            templateUrl: 'page-about.html',
            controller: 'aboutController'
        })
        .when('/contact', {
            templateUrl: 'page-contact.html',
            controller: 'contactController'
        })
        
       

});

animateApp.controller('mainController', function($scope) {
    $scope.pageClass = 'page-home';
    $scope.message = 'Prasanth Louis';
        $scope.age = 'Twenty Two';
        $scope.place='USA';
});

animateApp.controller('aboutController', function($scope) {
    $scope.pageClass = 'page-about';
      $scope.message = 'Programming Enthusiast';
         $scope.linkedin = 'https://www.linkedin.com/in/prasanthlouis';
        $scope.github = 'https://github.com/prasanthlouis';
        $scope.quora='https://www.quora.com/Prasanth-Louis';
        $scope.stackoverflow='http://stackoverflow.com/users/3293761/prasanth-louis'
});

animateApp.controller('contactController', function($scope) {
    $scope.pageClass = 'page-contact';
           $scope.message = 'prasanthlouis21@gmail.com';
        $scope.twitter = 'https://twitter.com/prasanthlouis';
        $scope.instagram = 'https://instagram.com/prasanthlouis/';
});
animateApp.controller('workController', function($scope) {
    $scope.pageClass = 'page-work'; 
    $scope.weather='http://testingprasanth.site50.net/Service/';
    $scope.message='http://testingprasanth.site50.net/programplanet/';
    $scope.channel='http://testingprasanth.site50.net/Bolt/';
    $scope.broad='http://testingprasanth.site50.net/broadway';
       $scope.cloud='http://testingprasanth.site50.net/cloud';
       $scope.sports='http://testingprasanth.site50.net/sports';  
       $scope.railmsg="https://powerful-bastion-3820.herokuapp.com/messages" ;
         $scope.music="https://afternoon-inlet-9197.herokuapp.com/albums"; 

          
});

