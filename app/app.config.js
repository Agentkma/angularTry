'use strict';
//2. extend & build off of app module..3..
    // go to index.html & add ng-app attr to html tag
    // add script tags to app.config.js and app.component.js
    // then go to blog-list.module.js
angular.module('app')
    .config(["$routeProvider", "$locationProvider", function ($routeProvider,$locationProvider){
        // html5Mode requires <base href="/"> tag on index.html
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('');

        $routeProvider.when('/', {
            template: "<blog-list></blog-list>"
        }).when('/blog/:id', {
            template: "<blog-detail></blogDetail>"
        }).otherwise('/', {
            template: "Not Found"
        });
    }]);
