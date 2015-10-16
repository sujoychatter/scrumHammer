class Api::V1::InvitesController < ApplicationController
	def send_invite
		user = current_user
		if user
			email = params['email']
			team = Team.find(params['team_id'])
			if email && team 
				user = User.find_or_create_by(email: email)
				team_user = TeamUser.create({user_id: user.id, team_id: team.id})
				if user and team_user
					UserMailer.invite_email(user, team).deliver_now
				end
			end
			# send email to user
			render :json => {success: true}
		else
			render :json => {status: 403}
		end
	end
end
