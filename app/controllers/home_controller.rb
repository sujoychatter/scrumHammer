class HomeController < ApplicationController
	def index_serve
		render '/app.html', layout: false
	end
end
