class UsersController < ApplicationController

  def create
    user = User.create(user_params)
    if user.valid?
      jwt = Authentication.jwt_for user
      pwd_login_success jwt
    else 
      pwd_login_failed user.errors.to_sentence 
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end

end
