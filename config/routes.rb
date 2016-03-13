Rails.application.routes.draw do

  devise_for :users, :controllers => { registrations: 'registrations' }

  authenticated :user do
  root to: "home#index", as: :authenticated_root
  end

  unauthenticated do
    root to: "home#splash"
  end

  get '/events/' => 'events#show'
  get '/dayofgratitude/:date' => 'gratitudes#date', as: :dayofgratitude
  get '/mygratitudes/' => 'gratitudes#allgrads'
  get '/allgratitudes/' => 'gratitudes#allgradsjson'
  get '/wordcloud/' => 'gratitudes#wordcloud'
  get "/.well-known/acme-challenge/#{ENV['LE_AUTH_REQUEST']}", to: 'home#letsencrypt'
  get '/about/' => 'home#about'


  resources :gratitudes
  resource :calendar, only: [:show], controller: :calendar
end
