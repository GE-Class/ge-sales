export default function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/general/home.html'})
  .state('about', {url: '/about', templateUrl: '/views/general/about.html'})
  .state('contact', {url: '/contact', templateUrl: '/views/general/contact.html'})
  .state('users', {url: '/users', templateUrl: '/views/users/list.html', controller: 'UsersController'})
  .state('new_user', {url: '/users/new', templateUrl: '/views/users/new.html', controller: 'NewUserController'})
  .state('products', {url: '/products', templateUrl: '/views/products/list.html', controller: 'ProductsController'})
  .state('new_product', {url: '/products/new', templateUrl: '/views/products/new.html', controller: 'NewProductController'})
  .state('sales', {url: '/sales', templateUrl: '/views/sales/list.html', controller: 'SalesController'})
  .state('new_sale', {url: '/sales/new', templateUrl: '/views/sales/new.html', controller: 'NewSaleController'})
  .state('sale_detail', {url: '/sales/{sale_id}', templateUrl: '/views/sales/detail.html', controller: 'SaleDetailController'});
}
