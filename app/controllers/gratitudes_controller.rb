require 'pry'

class GratitudesController < ApplicationController
  def index
    user = current_user
    gratitudes = user.gratitudes
    @gratitudes = gratitudes.where("created_at >= ?", Time.zone.now.beginning_of_day)
  end

  def create
    user = current_user
    @gratitude = user.gratitudes.new(gratitude_params)
    # @gratitude.user_id = current_user.id

    if @gratitude.save
      render json: @gratitude
    else
      render json: @gratitude.errors, status: :unprocessable_entity
    end
  end

  def grad_calendar
    user = current_user
    @gratitudes = user.gratitudes

    # Post.where(:created_at => (date.beginning_of_day..date.end_of_day))

  end

  def destroy
    @gratitude = Gratitude.find(params[:id])
    @gratitude.destroy
    head :no_content
  end

  private

  def gratitude_params
    params.require(:gratitude).permit(:description)
  end
end
