class CreateBannerMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :banner_messages do |t|
      t.boolean :isOn
      t.string :message

      t.timestamps
    end
  end
end
