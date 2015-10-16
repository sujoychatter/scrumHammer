class Api::V1::SprintsController < ApplicationController
	before_filter :fetch_sprint, :except => [:show, :create]
	
	def fetch_sprint
		@sprint = Sprint.find_by_id(params[:id])
	end

	def show 
		@sprints = Sprint.all
		render :json => @sprints
	end
	
	def update
		if @sprint.update_attributes(params[:sprint])
			render json: @sprint
		else
			render json: @sprint.errors, status: :unprocessable_entity
		end
	end
	
	def create
		@sprint = Sprint.new(params[:sprint])
		if @sprint.save
			render :json => @sprint
		else
			render json: @sprint.errors, status: :unprocessable_entity
		end
	end
	
	def destroy 
		if @sprint.destroy
			render :json => {status: :ok}
		else
			render json: @sprint.errors, status: :unprocessable_entity
		end
	end

# 	def sprint_params
# 		params.require(:sprint).permit(:team_id, :start_date, :end_date)
#     end
end