class UsersController < ApplicationController
 before_action :user_is_current_user, only: [:edit, :update]

  def current
    respond_to do |format|
      format.json { render json: {
          id: current_user.id,
          name: current_user.name
        }
      }
    end
  end

  def new
    @user = User.new
  end

  def create
    if current_user && current_user.guest?
      @user = current_user
      @user.guest = false
      @user.update(user_params)
    else
      @user = User.new( user_params )
    end

    if @user.save
      redirect_to pantries_url
    else
      render :new
    end
  end

  def edit
    @user = current_user
  end

  def update
    @user = current_user

    if @user.authenticate(params[:user][:current_password])
      if  @user.update( password_params.merge({ guest: false }) )
        redirect_to pantries_url
      else 
        render :edit
      end
    else
      render :edit
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :password, :password_confirmation)
  end

  def password_params
    params.require(:user).permit(:password, :password_confirmation)
  end

  def user_is_current_user
    user = User.find(params[:id])

    if current_user
      redirect_to pantries_path(current_user) unless user == current_user
    else
      redirect_to new_session_path
    end
  end
end