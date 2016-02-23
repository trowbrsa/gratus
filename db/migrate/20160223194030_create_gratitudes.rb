class CreateGratitudes < ActiveRecord::Migration
  def change
    create_table :gratitudes do |t|
      t.string :title
      t.string :description
      t.string :img_url

      t.timestamps null: false
    end
  end
end
