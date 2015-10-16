class Api::V1::InvitesController < ApplicationController
	def send_invite
		user = current_user
		if user
			# send email to user
			render :json => current_user
		else
			render :json => {status: 403}
		end
	end
end
