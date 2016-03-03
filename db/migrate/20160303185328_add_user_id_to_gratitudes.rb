class AddUserIdToGratitudes < ActiveRecord::Migration
  def change
    add_column :gratitudes, :user_id, :integer
  end
end
