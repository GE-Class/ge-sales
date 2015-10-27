import angular from 'angular';
import router from 'angular-ui-router';
import config from './config/route.js';
import NewUserController from './controllers/users/new.js';

let app = angular.module('geSales', ['ui.router']);

app
.config(config)
.controller('NewUserController', NewUserController);
