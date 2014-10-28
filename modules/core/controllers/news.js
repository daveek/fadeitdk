'use strict';

angular.module('core').controller('NewsController', ['$scope', '$log', '$http', '$anchorScroll', '$sce', 'linkify', '$document', 'StyleService', function ($scope, $log, $http, $anchorScroll, $sce, linkify, $document, StyleService) {
    //load services
    $scope.styles = StyleService.getStyles();

    //css class containers & vars
    $scope.cssClasses = $scope.styles.cssClasses;
    $scope.projectOffset = $scope.styles.projectOffset;
    $scope.newsSectionHeight = $scope.styles.newsSectionHeight;
    $scope.currentScrollPosition = 0;

    //news variables
    $scope.currentNewsPosition = 0;
    $scope.latestNewsId = 0;
    $scope.maxNewsPosition = 5; //max past items: API allows 10 atm
    $scope.news = [];
    $scope.newsHeaderShown = false;

    /*
     * one-time news trigger when controller is ready
     * calls loadNews() which will call itself
     *
     */
    $scope.initNews = function initNews(){
        $scope.loadNews();
        setTimeout(function showNews(){
                //removes the class that makes the news with opacity 0 (show the news but don't scroll to it) -> use a timeout to make it look smooth. The news top-right link is also hidden until the section is visible
                angular.element('#news-section').removeClass('transparent-always');
                angular.element('#news-link').removeClass('transparent-always');
                }, 1000);
    };

    /*
     * main news method - send HTTP request to the Twitter API
     * receives a JSON object which is saved to scope
     *
     */
    $scope.loadNews = function loadNews(){
        $http.get('twitter-api/').success(function(newsData){
                if(newsData && newsData !== 'null' && typeof(newsData) !== 'undefined' && !newsData.errors){
                /*
                 * Handling data on HTTP request success
                 *
                 * If there is no news data compared to the current latest news
                 * (current latest item is found in newsData[0].id)
                 * display the next item from the news array (older)
                 *
                 * This allows some interactions although the news is not that recent
                 * The amount of older tweets to iterate is set in the scope -> $scope.currentNewsPosition = 0;
                 *
                 * The max tweets loaded by the API is set in the request URL @ /twitteroauth/index.php
                 * All news items are faded out by default.
                 *
                 */
                var newsDataId = newsData[0].id;
                $scope.cssClasses.newsClasses = 'news-fade-out';

                //How the first news item is handled
                if ($scope.currentNewsPosition === 0){
                    $scope.displayNews(newsData[0].created_at, newsData[0].text);
                }
                //How iterating through older news items is handled
                else if($scope.latestNewsId === newsDataId){
                    $scope.displayNews(newsData[$scope.currentNewsPosition].created_at, newsData[$scope.currentNewsPosition].text);
                }
                //Default handling
                else{
                    $scope.displayNews(newsData[0].created_at, newsData[0].text);
                }

                //any valid data new or old will invoke a fadein
                setTimeout(function changeNewsClass(){
                        $scope.cssClasses.newsClasses = 'news-fade-in';
                        }, 1500);

                //increase the position of the news (older) or restart if max was reached
                if($scope.currentNewsPosition < $scope.maxNewsPosition - 1){
                    $scope.currentNewsPosition++;
                }
                else{
                    $scope.currentNewsPosition = 0;
                }

                //Update latest news id
                $scope.latestNewsId = newsDataId;
                }
                else{
                    /*
                     * Handling callback success but invalid data.
                     * This can be caused by:
                     * - a fault in the twitter server
                     * - us being timeout by the API limitation
                     * - error in the API
                     *
                     */
    $scope.cssClasses.newsClasses = 'news-fade-out';
    $log.warn('News data could not be loaded at this time');
}
        }).error(function(data){
            /*
             * If the API cannot be reached at all.
             * Sometimes Apache can fuck up
             * OR the internet connection can be lost while browsing
             */
            $scope.cssClasses.newsClasses = 'news-fade-out';
            $log.error(data);
            });

/*
 * Check for new data every 30 seconds
 * Should be within reason and prevent twitter from blocking us
 */
setTimeout($scope.loadNews, 30000);
};

/* Displays news in the template
 * @time - the timestamp from twitter
 * @text - the tweet text
 *
 * Before displaying, date is formated nicely (as 'timeago').
 * All links are encapsulated by linkify into an '<a>' tag
 */
$scope.displayNews = function displayNews(time, text){
    $scope.news.updateTime = 'news from ' + moment(time, 'dd MMM DD HH:mm:ss ZZ YYYY').fromNow();
    $scope.news.text = $sce.trustAsHtml(linkify.twitter(text));
};

/*
 * Checks for scroll position:
 * Hides or show the 'top whitebar' to reveal news
 *
 * Same as the scroll, it will only be applied if the #news is NOT display:none
 *
 * On 'secondary' pages, where a logo is presented in the outstanding-container
 * hide that logo (avoid having 2 logos at the same time)
 *
 */
$document.on('scroll mousewheel DOMMouseScroll MozMousePixelScroll MouseScrollEvent', function() {
        //btw: not using ng-class / ng-animate - it creates such a mess, just adding and removing a class works far better & simpler with css animations
        if(angular.element('#news').css('display') !== 'none'){
        $scope.currentScrollPosition = angular.element(window).scrollTop();

        if($scope.currentScrollPosition >= $scope.newsSectionHeight + $scope.projectOffset && !$scope.newsHeaderShown){
        angular.element('.fadeit-logo-link').addClass('hidden-logo-link');
        angular.element('.fadeit-logo-small').addClass('visible-fixed-logo');
        angular.element('.transparent-whitebar').removeClass('hidden-whitebar');
        angular.element('.secondary-page-logo').removeClass('hidden-secondary-page-logo');

        $scope.newsHeaderShown = true;
        }
        else if($scope.currentScrollPosition < $scope.newsSectionHeight + $scope.projectOffset && $scope.newsHeaderShown){
        angular.element('.fadeit-logo-link').removeClass('hidden-logo-link');
        angular.element('.fadeit-logo-small').removeClass('visible-fixed-logo');
        angular.element('.transparent-whitebar').addClass('hidden-whitebar');
        angular.element('.secondary-page-logo').addClass('hidden-secondary-page-logo');

        $scope.newsHeaderShown = false;
        }
        }
});

//Called at controller init to refresh animations & scroll: the emit notifies the main app modules (config.js) that it should re-check for the 'display' CSS style of #news
$scope.initNews();
$scope.$emit('newsReady', '');
}]);
