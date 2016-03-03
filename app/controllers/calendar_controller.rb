class CalendarController < ApplicationController
  def show
    # parses the date
    @date = params[:date] ? Date.parse(params[:date]) : Date.today
    @gratitudes_by_date = current_user.gratitudes.group_by(&:created_at)
  end
end
