class CreateSprintUsers < ActiveRecord::Migration
  def change
    create_table :sprint_users do |t|
      t.string :hammer_count
      t.integer :sprint_id
      t.integer :user_id
      t.timestamps null: false
    end
  end
end
