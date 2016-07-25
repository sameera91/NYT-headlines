angular
    .module('app', ['ngAnimate', 'ui.router', 'templates'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home.html',
                controller: 'TopArticlesController as top'
            })
            .state('article', {
                url: '/article/:id',
                templateUrl: 'article.html',
                controller: 'ArticleController as article'
            })
            .state('businessDay', {
                url: '/businessDay',
                templateUrl: 'businessDay.html',
                controller: function ($stateParams, ArticlesService, $scope, $filter) {
                    ArticlesService.getMostViewedArticles().then(
                        function(result) {
                           $scope.articles = result.data;
                           $scope.search = 'Business Day';
 
                           $scope.filteredArticles = $filter('filter')($scope.articles, $scope.search);
                        }
                    );
              
                }
            })
            .state('home.technology', {
                url: '/technology',
                templateUrl: 'technology.html',
                controller: function ($stateParams, ArticlesService, $scope, $filter) {
                    ArticlesService.getMostViewedArticles().then(
                        function(result) {
                           $scope.articles = result.data;
                           $scope.search = 'technology';
 
                           $scope.filteredArticles = $filter('filter')($scope.articles, $scope.search);
                        }
                    );
              
                }
            })
            .state('united-states', {
                url: '/united-states',
                templateUrl: 'us.html',
                controller: function ($stateParams, ArticlesService, $scope, $filter) {
                    ArticlesService.getMostViewedArticles().then(
                        function(result) {
                           $scope.articles = result.data;
                           $scope.search = 'U.S.';
 
                           $scope.filteredArticles = $filter('filter')($scope.articles, $scope.search);
                        }
                    );
              
                }
            });
    });

