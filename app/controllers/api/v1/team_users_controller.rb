class Api::V1::TeamUsersController < ApplicationController
	skip_before_filter :verify_authenticity_token
	before_filter :fetch_team_user, :except => [:index, :create]
	
	def fetch_team_user
		@team_user = TeamUser.find_by_id(params[:id])
	end

	def index 
		@team_users = TeamUser.all
		render :json => @team_users
	end

	def show
		render :json => @team_user
	end
	
	def update
		if @team_user.update_attributes(params[:team_user])
			render json: @team_user
		else
			render json: @team_user.errors, status: :unprocessable_entity
		end
	end
	
	def create
		@team_user = TeamUser.new(params[:team_user])
		if @team_user.save
			render :json => {:team_user_id => 1}
		else
			render json: @team_user.errors, status: :unprocessable_entity
		end
	end
	
	def destroy 
		if @team_user.destroy
			render :json => {status: :ok}
		else
			render json: @team_user.errors, status: :unprocessable_entity
		end
	end

# 	def team_user_params
# 		params.require(:team_user).permit(:name, :start_time, :end_time, :max_hammer_count)
#     end
end
