Rails.application.routes.draw do
  get '/', to: "home#index_serve"
  get 'auth/google_oauth2/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'signout', to: 'sessions#destroy', as: 'signout'

  resources :sessions, only: [:create, :destroy]
  namespace :api do
    namespace :v1 do 
        get  'sprints'        , to: 'sprints#index'
        post 'sprints'        , to: 'sprints#create'
        get  'sprints/:id'    , to: 'sprints#show'
        put  'sprints/:id'    , to: 'sprints#update'
        
        get  'team_users'        , to: 'team_users#index'
        post 'team_users'        , to: 'team_users#create'
        get  'team_users/:id'    , to: 'team_users#show'
        put  'team_users/:id'    , to: 'team_users#update'
        
        get  'users'        , to: 'users#index'
        post 'users'        , to: 'users#create'
        get  'users/:id'    , to: 'users#show'
        put  'users/:id'    , to: 'users#update'
        get  'users/me'     , to: 'users#my_data'
        
        get  'teams'        , to: 'teams#index'
        post 'teams'        , to: 'teams#create'
        get  'teams/:id'    , to: 'teams#show'
        put  'teams/:id'    , to: 'teams#update'

        post 'invite'        , to: 'invites#send_invite'
    end
  end

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
