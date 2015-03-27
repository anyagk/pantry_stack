class CreatePantries < ActiveRecord::Migration
  def change
    create_table :pantries do |t|
      t.references :food
      t.references :user
      t.integer :quantity, default: 1
      t.integer :threshold, default: 0


      t.timestamps null: false
    end
  end
end
