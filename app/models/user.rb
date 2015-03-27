class User < ActiveRecord::Base
  has_secure_password

  validates :name, presence: true

  has_many :pantries
  has_many :foods, through: :pantries
end
