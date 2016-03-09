class HomeController < ApplicationController

  def index
    @total_gratitudes = current_user.gratitudes.length
  end

  def account

  end

  def letsencrypt
   render plain: ENV['LE_AUTH_RESPONSE']
  end

end
