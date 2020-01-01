'use strict';

var angular = require('angular');

var home = angular.module('home', []);

home
.component('homecontainer', require('./home.component'));

module.exports=home;


