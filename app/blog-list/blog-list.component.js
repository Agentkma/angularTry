'use strict';

//4. extend blogList Module...and component
    // then go to index.html and add blog-list.component.js & blog-list.module.js as script tags
    // 5....go to app.module.js
angular.module('blogList')
    //6 create 'blogList component'
    .component('blogList',{
        //6.1 add templateUrl....create template folder/files
        templateUrl: 'app/templates/blog-list.html',
        //6.2 create controller and add functionality with variables off of $scope
        controller: function(Post,$location, $routeParams,$rootScope,$scope){
            $scope.order = 'title';
            $scope.goToItem = function (post){
                $rootScope.$apply(function(){
                    $location.path("/blog/" + post.id)
                });
            }
            $scope.changeCols = function (num) {
                if (angular.isNumber(num)){
                    $scope.numCols = num;
                } else{
                    $scope.numCols = 2;
                }
                setupCols($scope.items, $scope.numCols);
            }
            // check scope to see if a query or not...reset col layout
            $scope.loadingQuery = false;
            $scope.$watch(function(){
                if( $scope.query){
                    $scope.loadingQuery = true;
                    $scope.cssClass ="col-sm-12"
                }
                else {
                    if($scope.loadingQuery){
                        setupCols($scope.items, 2);
                        $scope.loadingQuery = false;
                    }

                }
            })
            function setupCols (data,num) {
                if (angular.isNumber(num)){
                    $scope.numCols = num;
                } else{
                    $scope.numCols = 2;
                }

                $scope.cssClass = 'col-sm-' + (12/$scope.numCols);
                $scope.items = data;
                $scope.colItems = chunkArrayInGroups(data,$scope.numCols)
            }
            $scope.items = Post.query(function(data){

                setupCols(data,2)
            }, function(errData){

            });

            function chunkArrayInGroups (array, unit){
                let results = [];
                let length = Math.ceil(array.length/ unit);
                for(let i=0; i<length; i++){
                    results.push(array.slice(i * unit, (i+1) * unit));
                }

                return results;
            }

            // $scope.colItems = $scope.items;
        }
    });
