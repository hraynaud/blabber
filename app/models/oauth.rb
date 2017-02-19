class Oauth < ApplicationRecord
  validates_presence_of :token, :secret
end
