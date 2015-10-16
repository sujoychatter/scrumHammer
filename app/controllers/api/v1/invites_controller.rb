class Api::V1::InvitesController < ApplicationController
	def send_invite
		render :json => {:user_id => 1}
	end
end
