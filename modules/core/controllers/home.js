'use strict';
/*global moment:false, WOW:false; */
//ignoring the above globals, moment() is available through the amMoment service

angular.module('core').controller('HomeController', ['$scope', '$http', 'amMoment', 'linkify', '$sce', '$log', function ($scope, $http, amMoment, linkify, $sce, $log) {
  //home controller logic
  //initialize animations
  new WOW().init();

  $scope.currentNewsPosition = 0;
  $scope.latestNewsId = 0;
  $scope.maxNewsPosition = 5; //the maximum amount of news (old) that will displayed - rest API allows 10
  $scope.news = [];
  $scope.anim = [];
  $scope.anim.header = [];
  $scope.anim.header.duration = '0.3s';
  $scope.anim.header.delay		= '0.5s';

	$scope.loadNews = function(){
		$log.info('Trying to load news...');
		//make a request to the api
		$http.get('twitter-api').success(function(newsData){
			if(newsData && newsData !== 'null' && typeof(newsData) !== 'undefined' && !newsData.errors){
				//if there is no news data, display the second item from the news
				//this allows some interactions although the news is not that recent
				//all news is faded out
				var newsDataId = newsData[0].id;
				$scope.news.newsClasses = 'news-fade-out';

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
					$scope.news.newsClasses = 'news-fade-in';
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
				$scope.news.newsClasses = 'news-fade-out';
				$log.warn('News data could not be loaded');
				$log.error(newsData);
			}
		}).error(function(data){
			//animate new content & remove hidden class
			$scope.news.newsClasses = 'news-fade-out';
			$log.warn('Could not load news');
			$log.error(data);
		});

		//check for new data in 15 seconds
		setTimeout($scope.loadNews, 3000);
	};

	$scope.displayNews = function(time, text){
		$scope.news.updateTime = 'news from ' + moment(time, 'dd MMM DD HH:mm:ss ZZ YYYY').fromNow();

		//save text to scope, after converting t.co urls
		$scope.news.text = $sce.trustAsHtml(linkify.twitter(text));
	};
}]);