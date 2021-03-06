Rails.application.routes.draw do
  devise_for :users, :controllers => {registrations: 'registrations' }
  root to: "welcome#index"
  resources :movies do 
    resources :movie_reviews
  end
  resources :movie_reviews

  resources :books do 
    resources :book_reviews
  end
  resources :book_reviews

  get 'current_user' => "users#current_user"

  resources :users do
    resources :movies
    resources :books
  end

  resources :books do
    resources :book_reviews
  end

  post 'users/:id/bookmark' => 'books#bookmark'

  post 'movies/:id/movie_reviews/:review_id' => 'movie_reviews#count_reviews'

  post 'users/:id/add_rated_review_to_user' => 'users#add_rated_review_to_user'

  #get '*path' => 'articles#index'
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
