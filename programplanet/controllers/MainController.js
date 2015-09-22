app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Angular JS',
      description: 'A touch of HTML, CSS and garnished with Javascript.',
      price: 4.95
    },
    {
      name: 'SQL',
      description: 'Cream of jellied queries entwined with sauteed databases',
      price: 3.95
    },
     {
   name: 'JQuery',
description: 'Curd of animations embedded in crispy webpages.',
price: 4.95
    }
  ];
  
  
    $scope.mains = [
    {
      name: 'C++',
      description: 'Carpaccio of salt crusted objected oriented objects.',
      price: 4.95
    },
    {
      name: 'Java',
      description: 'With an essence of sprinkled green bots (Android)',
      price: 3.95
    },
     {
   name: 'Python',
description: 'Slow cooked automation processes.',
price: 4.95
    }
  ];
  
      $scope.extras = [
    {
      name: 'Prasanth Louis',
      description: 'Kickass developer.',
      price: 4.95
    },
    {
      name: 'Strengths',
      description: 'Gets things done. Period.',
      price: 3.95
    },
     {
   name: 'Likes',
description: 'Singing in the shower. Stealing toilet paper.',
price: 4.95
    }
  ];

}]);