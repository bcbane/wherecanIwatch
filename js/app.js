angular.module('app', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/');


$stateProvider.state('home',{

  url: '/',
  templateUrl: "ui-views/home.html",
  controller: "mainCtrl"

})

$stateProvider.state('movieSearcher',{

  url: '/movie',
  templateUrl: "ui-views/movieSearchTmpl.html",
  controller: "movieCtrl"

})

$stateProvider.state('tvSearcher',{

  url: '/tv',
  templateUrl: "ui-views/tvShowSearchTmpl.html",
  controller: "tvCtrl"

})

$stateProvider.state('privacy',{

  url: '/privacy',
  templateUrl: "ui-views/privacy.html",
  controller: "mainCtrl"

})

$stateProvider.state('terms',{

  url: '/terms',
  templateUrl: "ui-views/tos.html",
  controller: "mainCtrl"

})

});
