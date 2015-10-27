export default function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/general/home.html'})
  .state('about', {url: '/about', templateUrl: '/views/general/about.html'})
  .state('contact', {url: '/contact', templateUrl: '/views/general/contact.html'})
  .state('users', {url: '/users', templateUrl: '/views/users/list.html'})
  .state('new_user', {url: '/users/new', templateUrl: '/views/users/new.html', controller: 'NewUserController'});
}
