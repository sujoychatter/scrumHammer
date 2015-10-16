class HomeController < ApplicationController
	def show
		user = current_user
		if user
			render '/app.html', layout: false
		end
	end
end
