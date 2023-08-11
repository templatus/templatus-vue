# == Schema Information
#
# Table name: clicks
#
#  id         :bigint           not null, primary key
#  ip         :inet             not null
#  user_agent :string           not null
#  created_at :datetime         not null
#
class Click < ApplicationRecord
  validates :ip, presence: true
  validates :user_agent, presence: true

  # There is no `updated_at` in the database
  def updated_at
    created_at
  end
end
