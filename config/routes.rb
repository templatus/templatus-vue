require 'sidekiq/web'
require 'sidekiq/cron/web'

Rails
  .application
  .routes
  .draw do
    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

    mount Sidekiq::Web => '/sidekiq'

    resources :clicks, only: %i[index create]
    root to: 'vue#index'

    get '/manifest', format: 'webmanifest', to: 'statics#manifest'
    get '/apple-touch-icon', format: 'png', to: 'statics#apple_touch_icon'
    get '/favicon', format: 'ico', to: 'statics#favicon'
  end
