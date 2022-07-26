Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")

  namespace :api do
    namespace :v1 do
      resources :posts, only: [:index, :create, :show, :update, :destroy]
      resources :banner, only: [:index, :create, :show, :update, :destroy]
    end
  end
  get 'posts', to: 'hello_world#index';
  get 'banner', to: 'hello_world#index'
  root 'hello_world#index'
end
