require 'sidekiq/web'
require 'sidekiq/cron/web'

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  mount Sidekiq::Web => '/sidekiq'

  resources :clicks, only: %i[index create]

  get '/manifest.v1.webmanifest', to: 'statics#manifest', as: :webmanifest

  root to: 'vue#index'
end
