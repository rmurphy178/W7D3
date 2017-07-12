Rails.application.routes.draw do
 # Your routes here!
 namespace :api, defaults:  {format: :json} do
   resources :guests, only: [:show,:index] do
     resources :gifts, only: [:show, :index]
   end
   resources :gifts , only: [:index, :show]
   resources :parties, only: [:index,:show] do
     resources :gifts, only: [:index,:show]
     resources :guests, only: [:index,:show]
   end
 end
end
