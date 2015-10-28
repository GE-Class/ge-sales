import angular from 'angular';
import router from 'angular-ui-router';
import config from './config/route.js';
import NewUserController from './controllers/users/new.js';
import UsersController from './controllers/users/list.js';
import NewProductController from './controllers/products/new.js';
import ProductsController from './controllers/products/list.js';
import User from './models/user.js';
import Product from './models/product.js';

let app = angular.module('geSales', ['ui.router']);

app
.config(config)
.controller('NewUserController', NewUserController)
.controller('UsersController', UsersController)
.controller('NewProductController', NewProductController)
.controller('ProductsController', ProductsController)
.factory('User', User)
.factory('Product', Product);
