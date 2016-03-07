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

  def allgrads
    user = current_user
    @gratitudes = user.gratitudes
  end

  def allgradsjson
    user = current_user
    gratitudes = user.gratitudes
    render :json => gratitudes.as_json, :status => :ok

  end

  def wordcloud

  end

  def date
    date = params[:date]
    date = Date.strptime(date)
    # this gives us all of the gratitudes of the current_user
    @gratitudes = current_user.gratitudes.where('created_at >= :beginning_of_day or :end_of_day',
    :beginning_of_day => date,
    :end_of_day => date)
    ## now we need to tell ActiveRecord to find only current users
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
