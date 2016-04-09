class User < ActiveRecord::Base
  has_many :blabs
  has_secure_password

  validates :uid, :handle, presence: true, on: :create, unless: :using_pwd?
  validates :email, unique: true
  validates :email, presence: true, unless: :is_oauth?
  validates :password, :length => { :minimum => 5 }, allow_nil: true,  on: :create, unless: :is_oauth?

  private

  def is_oauth?
    user.handle.present?
  end

  def using_pwd?
    user.password.present? && user.email.present?
  end
end
