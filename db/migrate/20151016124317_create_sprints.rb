class CreateSprints < ActiveRecord::Migration
  def change
    create_table :sprints do |t|
      t.datetime :start_date
      t.datetime :end_date
      t.timestamps null: false
      t.integer :team_id
    end
  end
end
