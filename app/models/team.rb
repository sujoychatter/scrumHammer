class Team < ActiveRecord::Base
	has_many :team_users
	has_many :sprints
	has_many :users, through: :team_users
end
