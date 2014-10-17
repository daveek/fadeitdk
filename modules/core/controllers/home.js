'use strict';
/*global moment:false, WOW:false, skrollr:false; */
//ignoring the above globals, moment() is available through the amMoment service

angular.module('core').controller('HomeController', ['$scope', '$http', 'linkify', '$sce', '$log', 'parallaxHelper', '$document', 'ProjectPreview', '$location', '$anchorScroll', 'AnimationService', function ($scope, $http, linkify, $sce, $log, parallaxHelper, $document, ProjectPreview, $location, $anchorScroll, AnimationService) {
	//load services
	$scope.projectPreviews = ProjectPreview;

	//news variables
	$scope.currentNewsPosition = 0;
	$scope.latestNewsId = 0;
	$scope.maxNewsPosition = 5; //the maximum amount of news (old) that will displayed - rest API allows 10
	$scope.news = [];

	//css class containers & vars
	$scope.cssClasses = [];
	$scope.gridSize = 0;
	$scope.nextElementClass = '';

	//animations
	$scope.anim = AnimationService[0];
	$scope.anim.custom.projectContainer	= 0;
	$scope.currentScrollPosition				= 0;
	$scope.isAnimating									= false;
	$scope.newsHeaderShown							= false;
	
	//less variables - duplicated
	//also NEED to match the global_styles LESS file
	$scope.projectOffset			= 0; //the offset in the css is set to 90, meaning that the automatic load scroll would be 'wrong' (too low) by 90px, which is the desired effect
	$scope.newsSectionHeight	= 300;

	$scope.goToProjects = function goToProjects(){
		//move body 90px lower to place the gray line under the fadeit logo
		$scope.anim.custom.projectContainer = angular.element('#projects').offset();
		$scope.isAnimating = true;

		angular.element('body, html').animate({
			scrollTop: $scope.anim.custom.projectContainer.top + $scope.projectOffset	
		}, {
			duration: 100,
			complete: function(){
				$scope.isAnimating = false;
			}
		});
	};

	$scope.initNews = function initNews(){
		//one-time news trigger when controller is ready
		$scope.loadNews();
		//remove the class that makes the news with opacity 0 (show the news but don't scroll to it) -> use a timeout to make it look smooth. The news top-right link is also hidden until the section is visible
		setTimeout(function showNews(){
			angular.element('#news-section').removeClass('transparent-always');
			angular.element('#news-link').removeClass('transparent-always');
		}, 1000);
	};

	$scope.loadNews = function loadNews(){
		$http.get('twitter-api/').success(function(newsData){
			if(newsData && newsData !== 'null' && typeof(newsData) !== 'undefined' && !newsData.errors){
				/* 
				 * if there is no news data, display the next item from the news (older)
				 * this allows some interactions although the news is not that recent
				 * the max (oldest) number of tweets is set in the scope -> $scope.currentNewsPosition = 0;
				 * the max tweets loaded by the API is set in the request URL @ /twitteroauth/index.php
				 * all news items are faded out by default
				 */
				var newsDataId = newsData[0].id;
				$scope.cssClasses.newsClasses = 'news-fade-out';

				if ($scope.currentNewsPosition === 0){
					//$log.info('Initial news data loaded');
					//display news and animate containing section
					$scope.displayNews(newsData[0].created_at, newsData[0].text);
				}
				else if($scope.latestNewsId === newsDataId){
					//$log.info('No new data to load, just displaying older items');
					$scope.displayNews(newsData[$scope.currentNewsPosition].created_at, newsData[$scope.currentNewsPosition].text);
				}
				else{
					//$log.info('Loaded brand new data');
					//fade out the news for a smooth transition
					$scope.displayNews(newsData[0].created_at, newsData[0].text);
				}

				//any valid data new or old will invoke a fadein
				setTimeout(function changeNewsClass(){
					$scope.cssClasses.newsClasses = 'news-fade-in';
				}, 1500);
				
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
				$log.warn('News data could not be loaded at this time');
			}
		}).error(function(data){
			//animate new content & remove hidden class
			$scope.cssClasses.newsClasses = 'news-fade-out';
			$log.error(data);
		});

		//check for new data in 30 seconds
		setTimeout($scope.loadNews, 30000);
	};

	$scope.displayNews = function displayNews(time, text){
		$scope.news.updateTime = 'news from ' + moment(time, 'dd MMM DD HH:mm:ss ZZ YYYY').fromNow();

		//save text to scope, after converting t.co urls
		$scope.news.text = $sce.trustAsHtml(linkify.twitter(text));
	};

	$scope.generateClass = function generateClass(activeCover, isDummy, index){
		var cssClass,
				currentGridSize,
				columnSize;

		switch(activeCover){
			case 'sm':
				currentGridSize = 3;
				columnSize = 3;
			break;
			case 'md':
				if($scope.gridSize === 3){
					currentGridSize = 3; //if it's after col-xs-3 dummy (in the middle)
				}
				else if($scope.gridSize === 6){
					currentGridSize = 6; //if it's at the end of the row, after 2 col-xs-3's
				}
				else if($scope.gridSize === 0){
					currentGridSize = 0; //if it's at the beginning of the row
				}
				
				columnSize = 6;
			break;
			case 'lg':
				currentGridSize = 12;
				columnSize = 12;
			break;
			default:
				currentGridSize = 12;
				columnSize = 12;
			break;
		}

		cssClass = 'col-xs-' + columnSize + ' project-size-' + activeCover + $scope.nextElementClass;

		//if it's just a dummy project, append one more identifier class
		if(isDummy){
			cssClass += ' dummy-project';
		}

		//keeps track of the column size of grid elements, when it's >=12, it adds a 'clear:both' to the element
		$scope.gridSize += currentGridSize;
		if($scope.gridSize >= 12){
			$scope.nextElementClass += ' clear-preview';
			$scope.gridSize = 0;
		}
		else{
			$scope.nextElementClass = '';
		}

		return cssClass;
	};

	//observe scroll

	$document.on('scroll mousewheel DOMMouseScroll MozMousePixelScroll MouseScrollEvent', function() {
		//btw: not using ng-class / ng-animate - it creates such a mess, just adding and removing a class works far better & simpler with css animations
		if(!$scope.onSecondaryPage){
			$scope.currentScrollPosition = angular.element(window).scrollTop();
			if($scope.currentScrollPosition >= $scope.newsSectionHeight + $scope.projectOffset && !$scope.newsHeaderShown){
				angular.element('.fadeit-logo-link').addClass('hidden-logo-link');
				angular.element('.fadeit-logo-small').addClass('visibile-fixed-logo');
				angular.element('.transparent-whitebar').removeClass('hidden-whitebar');

				$scope.newsHeaderShown = true;
			}
			else if($scope.currentScrollPosition <= $scope.newsSectionHeight + $scope.projectOffset && $scope.newsHeaderShown){
				angular.element('.fadeit-logo-link').removeClass('hidden-logo-link');
				angular.element('.fadeit-logo-small').removeClass('visibile-fixed-logo');
				angular.element('.transparent-whitebar').addClass('hidden-whitebar');

				$scope.newsHeaderShown = false;
			}
		}
	});

	//init methods
	$scope.initNews();
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

angular.module('core').directive('lastItemWatcher', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs){
			if (scope.$last){
				scope.goToProjects();

				setTimeout(function initWowOnLast(){
					scope.initWow();
				}, 500);
			}
		}
	};
});

angular.module('core').directive('leftSidebarMenu', ['MenuData', function(MenuData){
	return {
		restrict: 'E',
		link: function(scope, element, attrs){
			scope.menuItems = MenuData;

			/*
			 * Watch looks for changes in the pageTitle bind. Secondary pages will have a title, while others will have an empty string. 
			 * Changing the binding will cause the whitebar to be hidden
			 * If on a secondary page, the whitebar will be shown again after 500ms
			 * 
			 */
			scope.$watch('pageTitle', function (titleValue) {
				angular.element('.transparent-whitebar').addClass('hidden-whitebar');
				angular.element('.secondary-page-title').removeClass('visible-secondary-page-title');

				if(titleValue !== '' && typeof titleValue !== 'undefined'){
					scope.onSecondaryPage = true;

					setTimeout(function showWhitebar(){
						angular.element('.fadeit-logo-small').removeClass('visibile-fixed-logo');
						angular.element('#news-link').addClass('transparent-always');
						angular.element('.transparent-whitebar').removeClass('hidden-whitebar');
						angular.element('.secondary-page-title').addClass('visible-secondary-page-title');
						angular.element('#logo-link').addClass('hidden-always');
						scope.directiveTitle = titleValue;
						scope.$apply();
					}, 500);
				} 
				else {
					scope.onSecondaryPage = false;
					angular.element('#logo-link').removeClass('hidden-always');
					scope.directiveTitle = '';
				}
			});
		},
		templateUrl: 'modules/core/views/left-sidebar-menu.html'
	};
}]);

angular.module('core').directive('customFooter', function(){
	return {
		restrict: 'E',
		templateUrl: 'modules/core/views/footer.html'
	};
});

angular.module('core').directive('reloadWow', function(){
	return {
		restrict: 'E',
		link: function(scope, element, attrs){
			scope.initWow();
		}
	};
});