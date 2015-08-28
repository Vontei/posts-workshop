var app = angular.module('posts-workshop', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'applicationController'
    })
    .when('/posts', {
      templateUrl: 'partials/posts.html',
      controller: 'applicationController'
    })
});
