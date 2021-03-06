class Authentication

  def self.login_by_password email, pwd
    user = User.find_by email: email
    if user && user.authenticate(pwd) != false
      jwt_for user
    else  #If authentication fails then...
      nil
    end
  end

  def self.login_by_oauth_token oauth, request_params
    request_token = OAuth::RequestToken.new(TWITTER, oauth.token, oauth.secret)
    access_token = request_token.get_access_token(oauth_verifier: request_params[:oauth_verifier])
    user = User.find_or_create_by(uid: access_token.params[:user_id]) do |u| 
      u.handle = access_token.params[:screen_name] 
      #sets random password to avoid validation errors since email and password
      #auth is also supported
      u.password = u.password_confirmation = SecureRandom.urlsafe_base64(n=6) 
    end
    jwt_for user
  end

  def self.jwt_for user
    id = user.uid || user.id
    JWT.encode({uid: user.uid, handle: user.handle, exp: 1.day.from_now.to_i}, Rails.application.secrets.secret_key_base)
  end
  

end
