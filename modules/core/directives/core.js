'use strict';

//controls the event triggered by clicking the news button (or Free ride on mobiles), goes to provided-anchor
angular.module('core').directive('goTo', ['$location', '$anchorScroll', function($location, $anchorScroll){
    return {
        restrict: 'CA',
        link: function(scope, element, attrs){
            element.bind('click', function(){
                var old = $location.hash();
                $location.hash(attrs.anchor);
                $anchorScroll();
                //reset to old to keep any additional routing logic from kicking in
                $location.hash(old);
                return false;
            });
        }
    };
}]);

//refreshes wow when a ng-repeat is finished
angular.module('core').directive('lastItemWatcher', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            if (scope.$last){
                setTimeout(function initWowOnLast(){
                    scope.initWow();
                }, 500);
            }
        }
    };
});

//template for the left sidebar & main-menu, including transparent whitebar
angular.module('core').directive('leftSidebarMenu', ['MenuData', function(MenuData){
    return {
        restrict: 'E',
        templateUrl: 'modules/core/views/left-sidebar-menu.html',
        //replace: true,
        link: function(scope, element, attrs){
            //load services
            scope.menuItems = MenuData;

            /*
             * $watch listens for changes in the pageTitle / pageImage binding.
             * When a change triggers a method, the class that made it visible
             * will be removed (it will trigger animations),
             * See 'toggleWhitebar' bellow.
             *
             */
            scope.$watch('pageTitle', function titleChanged(titleValue) {
                scope.directiveImage = '';
                angular.element('.fadeit-logo-small').removeClass('visible-fixed-logo');
                toggleWhitebar(titleValue, 0);
            });

            scope.$watch('pageImage', function imageChanged(imageValue) {
                scope.directiveTitle = '';
                angular.element('.secondary-page-title').removeClass('visible-secondary-page-title');
                toggleWhitebar(imageValue, 1);
            });

            /*
             * Method that controls the custom binding of:
             * directiveTitle and directiveImage
             *
             * @value is either pageTitle or pageImage (see routes)
             * @type is image or text
             * type = 0 is text
             * type = 1 is image
             *
             * The current value (image or text) is allowed to leave the screen
             * with the help of a timeout of 500ms.
             *
             * Each type of value will add a corresponding class
             * to their containing/binding element.
             * This class will toggle the animations and make the element visible
             *
             */
            var toggleWhitebar = function toggleWhitebar(value, type){
                angular.element('.transparent-whitebar').addClass('hidden-whitebar');

                if(value !== '' && typeof value !== 'undefined'){
                    setTimeout(function showWhitebar(){
                        if(type === 1){
                            scope.directiveImage = value;
                            angular.element('.fadeit-logo-small').addClass('visible-fixed-logo');
                        }
                        else{
                            scope.directiveTitle = value;
                            angular.element('.secondary-page-title').addClass('visible-secondary-page-title');
                        }

                        angular.element('.transparent-whitebar').removeClass('hidden-whitebar');
                        scope.$apply();
                    }, 500);
                }
            };
        }
    };
}]);

//template for the footer
angular.module('core').directive('customFooter', function(){
    return {
        restrict: 'E',
        templateUrl: 'modules/core/views/footer.html',
        replace: true
    };
});

//reloads wow on demand
angular.module('core').directive('reloadWow', function(){
    return {
        restrict: 'E',
        link: function(scope, element, attrs){
            scope.initWow();

            scope.$watch('wowRefresh', function (refreshValue) {
                scope.initWow();
            });
        }
    };
});

//template for the news section
angular.module('core').directive('newsSection', function(){
    return {
        restrict: 'E',
        templateUrl: 'modules/core/views/news.html',
        replace: true
    };
});