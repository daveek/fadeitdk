'use strict';
/*global moment:false, WOW:false; */
//ignoring the above globals, moment() is available through the amMoment service

angular.module('core').controller('HomeController', ['$scope', '$http', 'linkify', '$sce', '$log', 'parallaxHelper', '$document', 'MenuData', 'ProjectPreview', '$location', '$anchorScroll', function ($scope, $http, linkify, $sce, $log, parallaxHelper, $document, MenuData, ProjectPreview, $location, $anchorScroll) {
  //load services
  $scope.menuItems = MenuData;
  $scope.projectPreviews = ProjectPreview;

  //news variables
  $scope.currentNewsPosition = 0;
  $scope.latestNewsId = 0;
  $scope.maxNewsPosition = 5; //the maximum amount of news (old) that will displayed - rest API allows 10
  $scope.news = [];

  //css class containers
  $scope.cssClasses = [];

  //animations
  new WOW().init();
  
  $scope.anim = [];
  $scope.anim.header = [];
  $scope.anim.header.duration 				= '0.3s';
  $scope.anim.header.delay						= '0.3s';
  $scope.anim.header.delayMedium			= '0.5s';
  $scope.anim.header.delayLong				= '0.7s';
  $scope.anim.header.delayVeryLong		= '0.9s';
  $scope.anim.lightGreen 							= parallaxHelper.createAnimator(+0.5);
  $scope.anim.projectContainer				= 0;
  $scope.currentScrollPosition				= 0;
  $scope.isAnimating									= false;
  
  //less variables - duplicated
  //also NEED to match the global_styles LESS file
  $scope.projectOffset		= -90;
  $scope.newsSectionHeight = 300;

  $scope.goToProjects = function(){
		//move body 90px lower to place the gray line under the fadeit logo
		$scope.anim.projectContainer = angular.element('#projects').offset();
		$scope.isAnimating = true;

		angular.element('body').animate({
			scrollTop: $scope.anim.projectContainer.top + $scope.projectOffset	
		}, {
			duration: 200,
			complete: function(){
				$scope.isAnimating = false;
				//remove the class that makes the news with opacity 0 (show the news but don't scroll to it)
				angular.element('#news-section').removeClass('transparent-always');
			}
		});
  };

	$scope.loadNews = function(){
		$log.info('Trying to load news...');
		//make a request to the api
		$http.get('twitter-api').success(function(newsData){
			if(newsData && newsData !== 'null' && typeof(newsData) !== 'undefined' && !newsData.errors){
				/* 
				 * if there is no news data, display the next item from the news (older)
				 * this allows some interactions although the news is not that recent
				 * the max (oldest) number of tweets is set in the scope -> $scope.currentNewsPosition = 0;
				 * the max tweets loaded by the API is set in the request URL @ /versioned/twitteroauth/index.php
				 * all news items are faded out by default
				 */
				var newsDataId = newsData[0].id;
				$scope.cssClasses.newsClasses = 'news-fade-out';

				if ($scope.currentNewsPosition === 0){
					$log.info('Initial data loaded');
					//display news and animate containing section
					$scope.displayNews(newsData[0].created_at, newsData[0].text);
				}
				else if($scope.latestNewsId === newsDataId){
					$log.info('No new data to load, just displaying older items');
					$scope.displayNews(newsData[$scope.currentNewsPosition].created_at, newsData[$scope.currentNewsPosition].text);
				}
				else{
					$log.info('Loaded brand new data');
					//fade out the news for a smooth transition
					$scope.displayNews(newsData[0].created_at, newsData[0].text);
				}

				//any valid data new or old will invoke a fadein
				setTimeout(function(){
					$scope.cssClasses.newsClasses = 'news-fade-in';
				}, 1000);
				
				//increase the position of the news (older) or restart
				if($scope.currentNewsPosition < $scope.maxNewsPosition - 1){
					$scope.currentNewsPosition++;
				}
				else{
					$scope.currentNewsPosition = 0;
				}

				//update latest news id
				$scope.latestNewsId = newsDataId;
			}
			else{
				$scope.cssClasses.newsClasses = 'news-fade-out';
				$log.warn('News data could not be loaded');
				$log.error(newsData);
			}
		}).error(function(data){
			//animate new content & remove hidden class
			$scope.cssClasses.newsClasses = 'news-fade-out';
			$log.warn('Could not load news');
			$log.error(data);
		});

		//check for new data in 30 seconds
		setTimeout($scope.loadNews, 30000);
	};

	$scope.displayNews = function(time, text){
		$scope.news.updateTime = 'news from ' + moment(time, 'dd MMM DD HH:mm:ss ZZ YYYY').fromNow();

		//save text to scope, after converting t.co urls
		$scope.news.text = $sce.trustAsHtml(linkify.twitter(text));
	};

	$scope.generateClass = function(activeCover, isDummy){
		var cssClass;

		switch(activeCover){
			case 'sm':
				cssClass = 'col-xs-3';
			break;
			case 'md':
				cssClass = 'col-xs-6';
			break;
			case 'lg':
				cssClass = 'col-xs-12';
			break;
			default:
				cssClass = 'col-xs-12';
			break;
		}

		//if it's just a dummy project, append one more identifier class
		if(isDummy){
			cssClass += ' dummy-project';
		}

		return cssClass;
	};

	//observe scroll
	$document.on('scroll mousewheel DOMMouseScroll MozMousePixelScroll MouseScrollEvent', function() {
		//btw: gave up on using ng-class / ng-animate - it creates such a mess, just adding and removing a class works far better & simpler with css animations
		$scope.currentScrollPosition = parseInt($document[0].body.scrollTop);
    if($scope.currentScrollPosition >= $scope.newsSectionHeight + $scope.projectOffset){
    	angular.element('.fadeit-logo-link').addClass('hidden-logo-link');
    	angular.element('.fadeit-logo-small').addClass('visibile-fixed-logo');
    	angular.element('.transparent-whitebar').removeClass('hidden-whitebar');
    }
    else{
    	angular.element('.fadeit-logo-link').removeClass('hidden-logo-link');
    	angular.element('.fadeit-logo-small').removeClass('visibile-fixed-logo');
    	angular.element('.transparent-whitebar').addClass('hidden-whitebar');
    } 
  });
}]);

angular.module('core').directive('newsAction', ['$location', '$anchorScroll', function($location, $anchorScroll){
	return {
		restrict: 'C',
		link: function(scope, element, attrs){
			element.bind('click', function(){
				var old = $location.hash();
				$location.hash('news');
				$anchorScroll();
				//reset to old to keep any additional routing logic from kicking in
				$location.hash(old);
				return false;
			});
		}
	};
}]);