Rails.application.routes.draw do
  match '*all', to: 'application#preflight', via: [:options]

  get 'current_user',  to: 'application#current_user'
  get 'request_token', to: 'authentication#request_token'
  get 'access_token',  to: 'authentication#access_token'

  post 'login', to: 'authentication#login'

  resources :blabs, only: [:index, :create, :show]
  resources :projects, only: [:index, :create, :show]

  match '*all', to: 'application#index', via: [:get]
end
