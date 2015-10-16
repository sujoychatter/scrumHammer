class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.string :name
      t.time :start_time
      t.time :end_time
      t.integer :hammer_max
      t.integer :emogee_id
      t.timestamps null: false
    end
  end
end
