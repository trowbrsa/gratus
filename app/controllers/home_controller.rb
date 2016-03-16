class HomeController < ApplicationController

  skip_before_action :authenticate_user!, only: [:splash]

  def index
    @total_gratitudes = current_user.gratitudes.length
    current_user.streak(:gratitudes).nil? ? @streak = "Add a gratitude!" : @streak = current_user.streak(:gratitudes)
    @best_streak = current_user.best_user_streak
    @best_streak_day = current_user.best_streak_grammar
    @current_streak_day = current_user.current_streak_grammar
  end

  def splash

  end

  def about

  end
  # :nocov:
  def letsencrypt
   render plain: ENV['LE_AUTH_RESPONSE']
  end
  # :nocov:

end
