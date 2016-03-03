require 'pry'

class GratitudesController < ApplicationController
  def index
    @user = current_user
    @gratitudes = Gratitude.all
    # show only gratitudes from date created on
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
    @gratitudes = Gratitude.all
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
