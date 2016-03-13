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

  def allgrads
    # user = current_user
    # @gratitudes = user.gratitudes

    @gratitudes = current_user.gratitudes.group_by{ |grad| grad.created_at.to_date }
  end

  def wordcloud
    user = current_user
    parsed_gratitudes = []
    removed_terms = ['the', 'and', 'or',"to","","&","on","the","in","be","for","a","null"]
    user.gratitudes.each do |grad|
      if grad.description?
        parsed_gratitudes.push(grad.description.downcase)
      end
    end
    parsed_gratitudes = parsed_gratitudes - removed_terms
    gon.gratitudes = parsed_gratitudes
  end

  def date
    date_string = params[:date]
    @display_date = date_string.to_date
    date = Date.strptime(date_string)
    @gratitudes = current_user.gratitudes.where(:created_at => (date.beginning_of_day..date.end_of_day))
  end

  def destroy
    @gratitude = Gratitude.find(params[:id])
    @gratitude.destroy
    head :no_content
  end

  private

  def gratitude_params
    params.require(:gratitude).permit(:description, :img_url)
  end
end
