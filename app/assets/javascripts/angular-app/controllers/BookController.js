function BookController($scope, $stateParams, BooksService){
    var ctrl = this;
    ctrl.data = BooksService.getBook($stateParams.id).$$state;
    ctrl.currentUser = currentUser;
    
    ctrl.submitReview = function(){
      var review = {book_id: $stateParams.id, content: ctrl.reviewContent};
      BooksService.postBookReview(review, $stateParams.id).then(function(response) {
        ctrl.data.value.data.book_reviews.push(review)
      })
    }

    ctrl.bookmarkBook = function(){    
       var book = ctrl.data.value.data;   
       BooksService.postBook(book).then(function(response){   
         currentUser.books.push(book);   
       });   
    }
};

BookController.$inject = ['$scope', '$stateParams', 'BooksService'];

angular
    .module('app')
    .controller('BookController', BookController);