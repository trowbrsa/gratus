class HomeController < ApplicationController

  skip_before_action :authenticate_user!, only: [:splash]

  def index
    @total_gratitudes = current_user.gratitudes.length
    @streak = current_user.streak(:gratitudes)
  end

  def splash

  end

  def about

  end

  def letsencrypt
   render plain: ENV['LE_AUTH_RESPONSE']
  end

end
