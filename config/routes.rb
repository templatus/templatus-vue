Rails
  .application
  .routes
  .draw do
    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

    get 'home/index'

    resources :clicks,
              only: %i[index create],
              constraints: lambda { |request| request.format == :json }

    root to: 'home#index'
  end
