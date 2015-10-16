class Sprint < ActiveRecord::Base
	belongs_to :team
	has_many :sprint_users
	has_many :users, through: :sprint_users
end
