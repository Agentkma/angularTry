'use strict';

//1. Declare Module...2.go to app.config.js
angular.module('app', [

    //external-angular built ins(require script links in index.html to use)...& add to config file
    'angularUtils.directives.dirPagination',
    'ngResource',
    'ngRoute',

    //5. declare modules to include...6.go to blog-list.component.js
    //internal
    'blogDetail',
    'blogList',
    'confirmClick'
]);
