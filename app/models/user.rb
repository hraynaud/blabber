class User < ActiveRecord::Base
  has_many :blabs
  validates_presence_of :uid, :handle
  has_secure_password
  validates :password, :length => { :minimum => 5 }, allow_nil: true, unless: :is_oauth?, on: :create

  private

  def is_oauth?
    user.handle.present?
  end

end
