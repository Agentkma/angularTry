'use strict';

// Declare Module...
angular.module('confirmClick')
    .directive('confirmClick', function(){
        return {
            // restrict to only A elements
            restrict: "A",
            link: function(scope,element, attr){
                const msg = attr.confirmClick || "Are you sure?";
                const clickAction = attr.confirmedClick;
                element.bind('click', function (){
                    event.stopImmediatePropagation();
                    event.preventDefault();

                    if (window.confirm(msg)){
                        scope.$eval(clickAction);
                    };
                });
            }
        }
    });

// confirmClick directive NOT BEING USED CURRENTLY

// angular.module('confirmClick')
//     .directive('confirmClick', function(){
//         return {
//             // restrict to only A elements
//             scope: {
//                 message:"@message",
//                 eq:"=eq",
//                 post:"=post"
//             }
//             restrict: "E",
//             template: "<a confirm-click="goToItem(post)" confirmed-click="/blog/{{post.id}}"ng-href="#" class="card-link" >Read Post</a>",
//             link: function(scope,element, attr){
//                 const msg = attr.confirmClick || "Are you sure?";
//                 const clickAction = attr.confirmedClick;
//                 element.bind('click', function (){
//                     event.stopImmediatePropagation();
//                     event.preventDefault();
//
//                     if (window.confirm(msg)){
//                         $rootScope.$apply( function(){
//                             $location.path("/blog"+scope.post.id)
//                         })
//                     };
//                 });
//             }
//         }
//     });
