class SessionsController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.find_by(name: session_params[:name])

    if @user && @user.authenticate(session_params[:password])
      login!(@user)

      redirect_to pantries_url  
    else
      redirect_to new_session_url
    end
  end

  def destroy
    logout!

    redirect_to new_session_url
  end

  private

  def session_params
    @session_params ||= params.require(:session).permit(:name, :password)
  end
end