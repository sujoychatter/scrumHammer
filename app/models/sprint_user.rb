class SprintUser < ActiveRecord::Base
	belongs_to :user
	belongs_to :sprint
end
