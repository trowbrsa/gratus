class CalendarController < ApplicationController

  def show
    # parses the date
    @date = params[:date] ? Date.parse(params[:date]) : Date.today
    @date = params[:date] ? Date.parse(params[:date]) : Date.today
    @gratitudes = current_user.gratitudes.group_by{ |grad| grad.created_at.to_date }
  end

end
