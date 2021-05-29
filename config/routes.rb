Rails
  .application
  .routes
  .draw do
    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

    resources :clicks,
              only: %i[index create],
              constraints: lambda { |request| request.format == :json }

    root to: 'vue#index'

    # Catch-all route to let Vue.js do the routing
    get '/*path', to: 'vue#index'
  end
