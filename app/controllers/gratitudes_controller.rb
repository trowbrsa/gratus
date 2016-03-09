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

    if @gratitude.save
      render json: @gratitude
    else
      render json: @gratitude.errors, status: :unprocessable_entity
    end
  end

  def update
    user = current_user
    gratitude = user.gratitude.find(params[:id])
    if gratitude.update(gratitude_params["gratitude"])
      render json: gratitude
    else
      render json: gratitude.errors, status: :unprocessable_entity
    end
  end

  def allgrads
    user = current_user
    @gratitudes = user.gratitudes
  end

  def wordcloud
    user = current_user
    gon.gratitudes = user.gratitudes
  end

  def date
    date_string = params[:date]
    @display_date = date_string.to_date
    date = Date.strptime(date_string)
    @gratitudes = current_user.gratitudes.where(:created_at => (date.beginning_of_day..date.end_of_day))

    ## now we need to tell ActiveRecord to find only current users
  end

  def destroy
    @gratitude = Gratitude.find(params[:id])
    @gratitude.destroy
    head :no_content
  end

  private

  def gratitude_params
    params.require(:gratitude).permit(:description, :id)
  end
end
