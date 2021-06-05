Rails
  .application
  .routes
  .draw do
    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

    resources :clicks, only: %i[index create]
    root to: 'vue#index'

    # Allow webmanifest to render with ERB
    get '/manifest.webmanifest', to: 'application#manifest.webmanifest.json.erb'


    # Catch-all route to let Vue.js do the routing
    get '/*path', to: 'vue#index', format: 'html'
  end
