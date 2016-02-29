class GratitudesController < ApplicationController
  def index
    @gratitudes = Gratitude.all
  end

  def create
    @gratitude = Gratitude.new(gratitude_params)

    if @gratitude.save
      render json: @gratitude
    else
      render json: @gratitude.errors, status: :unprocessable_entity
    end
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
