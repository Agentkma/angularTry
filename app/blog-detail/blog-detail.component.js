'use strict';

//4. extend blogDetail Module...and component
    // then go to index.html and add blog-detail.component.js & blog-detail.module.js as script tags
    // 5....go to app.module.js
angular.module('blogDetail')
    //6 create 'blogDetail component'
    .component('blogDetail',{
        //6.1 add templateUrl....create template folder/files
        templateUrl: 'app/templates/blog-detail.html',
        //6.2 create controller and add functionality with variables off of $scope
        //
        controller: function(Post, $scope,$routeParams,$location,$http){
            Post.query(function(data){
                angular.forEach(data, function(post){
                    if(post.id == $routeParams.id) {
                        $scope.notFound = false;
                        $scope.post = post;
                        resetReply();

                    }
                });

            });
        $scope.title = "Blog " + $routeParams.id;
        $scope.addReply = function(){
            $scope.post.comments.push($scope.reply);
            resetReply();
        }
        function resetReply(){
            $scope.reply={
                "id" : $scope.post.comments.length+1,
                "text": ""
            };
        }

        $scope.deleteComment = function (comment){
            $scope.post.comments.splice(comment, 1);
        }

        if ($scope.notFound) {
            //redirect
            $location.path('/404');
            }
        }
    });
