class Api::V1::TeamsController < ApplicationController
	skip_before_filter :verify_authenticity_token
	before_filter :fetch_team, :except => [:index, :create]
	
	def fetch_team
		@team = Team.find_by_id(params[:id])
	end

	def index
		@teams = Team.all
		render :json => @teams
	end

	def show
		render :json => @team
	end
	
	def update
		if @team.update_attributes(params[:team])
			render json: @team
		else
			render json: @team.errors, status: :unprocessable_entity
		end
	end
	
	def create
		@team = Team.new(params[:team])
		if @team.save
			render :json => {:team_id => 1}
		else
			render json: @team.errors, status: :unprocessable_entity
		end
	end
	
	def destroy 
		if @team.destroy
			render :json => {status: :ok}
		else
			render json: @team.errors, status: :unprocessable_entity
		end
	end

# 	def team_params
# 		params.require(:team).permit(:name, :start_time, :end_time, :max_hammer_count)
#     end
end