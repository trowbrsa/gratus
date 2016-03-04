class HomeController < ApplicationController

  def index
    @total_gratitudes = current_user.gratitudes.length
  end

  def account

  end


end
