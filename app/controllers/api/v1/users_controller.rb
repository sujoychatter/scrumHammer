class Api::V1::UsersController < ApplicationController
	skip_before_filter :verify_authenticity_token
	before_filter :fetch_user, :except => [:index, :create]
	
	def fetch_user
		@user = User.find_by_id(params[:id])
	end

	def index 
		@users = TeamUser.all
		render :json => @users
	end

	def show 
		render :json => @user
	end

	def my_data
		@user = User.first
		render :json => @user
	end
	
	def update
		if @user.update_attributes(params[:user])
			render json: @user
		else
			render json: @user.errors, status: :unprocessable_entity
		end
	end
	
	def create
		@user = User.new(params[:user])
		if @user.save
			render :json => {:user_id => 1}
		else
			render json: @user.errors, status: :unprocessable_entity
		end
	end
	
	def destroy 
		if @user.destroy
			render :json => {status: :ok}
		else
			render json: @user.errors, status: :unprocessable_entity
		end
	end

# 	def user_params
# 		params.require(:user).permit(:name, :start_time, :end_time, :max_hammer_count)
#     end
end