class UserMailer < ApplicationMailer
	default from: 'hammerscrum.com'
	def welcome_email(user)
		@user = user
		@url  = 'scrumhammer.com'
		mail(to: user.email, subject: 'Welcome to Scrum Hammer')
	end
end
