class User < ApplicationRecord
  has_many :blabs
  has_secure_password

  validates :uid, :handle, presence: true, on: :create, unless: :using_pwd?
  validates :email, uniqueness: true, allow_nil: true
  validates :email, presence: true, unless: :is_oauth?
  validates :password, :length => { :minimum => 5 }, allow_nil: true,  on: :create, unless: :is_oauth?

  private

  def is_oauth?
    handle.present? && uid.present?
  end

  def using_pwd?
    password.present? && email.present?
  end
end
