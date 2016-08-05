function MovieController($scope, $stateParams, MoviesService){
    var ctrl = this;
    ctrl.data = MoviesService.getMovie($stateParams.id).$$state;
    ctrl.movies = MoviesService.getMovies().$$state;

    ctrl.submitReview = function(){
      var review = {movie_id: $stateParams.id, content: ctrl.reviewContent};
      MoviesService.postMovieReview(review, $stateParams.id).then(function(response) {
        ctrl.data.value.data.movie_reviews.push(review)
      })
    }

    ctrl.bookmarkMovie = function(){    
       var movie = ctrl.data.value.data;   
       MoviesService.postMovie(movie).then(function(response){
         currentUser.movies.push(movie);   
       });   
    }

    ctrl.deleteMovie = function(){
      movie = ctrl.data.value.data;
      MoviesService.deleteMovie(movie).then(function(response) {
        ctrl.movies.value.data.splice(ctrl.movies.value.data.indexOf(movie), 1);
      })
    }
};

MovieController.$inject = ['$scope', '$stateParams', 'MoviesService'];

angular
    .module('app')
    .controller('MovieController', MovieController);