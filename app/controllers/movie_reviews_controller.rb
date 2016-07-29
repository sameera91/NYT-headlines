class MovieReviewsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
     @movie = Movie.find(params[:movie_id])
     @movie_reviews = @movie.movie_reviews
  end

  def new
    @movie = MovieReview.new(movie_id: params[:movie_id])
  end

  def create
    @movie = Movie.find(params[:movie_id])
    @movie_review = MovieReview.create(movie_review_params)
    @movie_review = @movie.movie_reviews.build(movie_review_params)
    render :json => @movie_review
  end

  def edit
    @movie_review = current_user.movie_reviews.find(params[:id])
  end

  def update
    @movie_review = MovieReview.find(params[:id])
    @movie_review.update(movie_review_params)
    if @movie_review.save
      flash[:success] = "Review updated."
    end
  end

  def destroy
    @movie_review = MovieReview.find(params[:id])
    @movie_review.destroy
    @movie = Movie.find(@movie_review.movie_id)
    flash[:success] = "Review deleted."
  end

  def movie_review_params
      params.require(:movie_review).permit(:movie_id, :content, :user_id)
  end
end