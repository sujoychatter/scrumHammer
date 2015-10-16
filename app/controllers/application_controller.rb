class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user
  after_filter :set_cors_headers

  def set_cors_headers
	headers['Access-Control-Allow-Origin'] = '*'
	headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, OPTIONS'
	headers['Access-Control-Request-Method'] = '*'
	headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  end

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
end