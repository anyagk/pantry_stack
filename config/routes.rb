Rails.application.routes.draw do
  resources :sessions, only: [:new, :create]
  delete '/sessions', to: 'sessions#destroy'

  resources :pantries
  root 'pantries#index'

  resources :users
  # post '/users/:user_id/edit', to: 'users#edit'

  resources :foods

  
end
