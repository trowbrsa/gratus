class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :gratitudes
  validates_presence_of :first_name
  has_streak

  def best_user_streak
    if self.streak(:graitudes).nil?
      return 0
    end
    if self.streak(:gratitudes) > self.best_streak
      self.best_streak = self.streak(:gratitudes)
      self.save
      return self.best_streak
    end
    return self.best_streak
  end

  def best_streak_grammar
    if self.best_streak == 1
      return "day"
    else
      return "days"
    end
  end

  def current_streak_grammar
    if self.streak(:gratitudes) == 1
      return "day"
    else
      return "days"
    end
  end

end
