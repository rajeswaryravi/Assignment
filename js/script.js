var myApp = angular.module('myApp', ['ui.router']);
myApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/index.html");
  $stateProvider
  .state('index',{
    url: '/index.html'
  })
  .state('home', 
  {
    url: '/home/:value',
    views: {
    '': {
    templateUrl: 'home.html',
    controller: 'myAppController'
    }}
    })
});
myApp.controller('myAppController',['$scope','$http','$stateParams','$location',function($scope,$http,$stateParams,$location){
 $scope.data;
 $http.get('js/data.json').success(function(response){ 
 $scope.data=response;
 var a=$stateParams.value;
   if(a!=undefined){
      $scope.artname=response.artforms[a].name;
      $scope.arturl=response.artforms[a].url;
      $scope.artdescription=response.artforms[a].Description;
   } 
  });
}]);