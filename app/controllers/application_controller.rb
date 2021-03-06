class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  private

  def login!(user)
    session[:session_token] = make_token
    user.session_token = session[:session_token]
    user.save!
  end

  def logout!
    current_user.update(session_token: nil)
    session[:session_token] = make_token
  end

  def make_token
    return SecureRandom.urlsafe_base64
  end

  def require_current_user
    unless current_user
      user = User.create(guest: true, password: 'password')
      user.update(name: "guest")
      login!(user)
    end
  end
end
