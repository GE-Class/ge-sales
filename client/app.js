import angular from 'angular';
import router from 'angular-ui-router';
import config from './config/route.js';
import NewUserController from './controllers/users/new.js';
import UsersController from './controllers/users/list.js';
import NewProductController from './controllers/products/new.js';
import ProductsController from './controllers/products/list.js';
import NewSaleController from './controllers/sales/new.js';
import SalesController from './controllers/sales/list.js';
import SaleDetailController from './controllers/sales/detail.js';
import UserDetailController from './controllers/users/detail.js';
import User from './models/user.js';
import Product from './models/product.js';
import Sale from './models/sale.js';

let app = angular.module('geSales', ['ui.router']);

app
.config(config)
.controller('NewUserController', NewUserController)
.controller('UsersController', UsersController)
.controller('NewProductController', NewProductController)
.controller('ProductsController', ProductsController)
.controller('NewSaleController', NewSaleController)
.controller('SalesController', SalesController)
.controller('SaleDetailController', SaleDetailController)
.controller('UserDetailController', UserDetailController)
.factory('User', User)
.factory('Product', Product)
.factory('Sale', Sale);
