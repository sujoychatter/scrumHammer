class UserMailer < ApplicationMailer
	default from: 'hammerscrum.com'
	def welcome_email(user)
		@user = user
		@url  = 'scrumhammer.com'
		mail(to: user.email, subject: 'Welcome to Scrum Hammer')
	end

	def invite_email(user, team)
		@user = user
		@team = team
		@url  = 'scrumhammer.com?login=true'
		mail(to: user.email, subject: 'Hello from Scrum Hammer')
	end
end
