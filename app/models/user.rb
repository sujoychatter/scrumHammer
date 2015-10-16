class User < ActiveRecord::Base
  has_many :team_users
  has_many :sprint_users
  has_many :sprints, through: :sprint_users
  has_many :teams, through: :team_users
  def self.from_omniauth(auth)
    email = auth.info.email
    new_user = false
    if User.where(email: email).length == 0
      new_user = true
    end
    where(provider: auth.provider, uid: auth.uid).first_or_initialize.tap do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.name = auth.info.name
      user.email = auth.info.email
      user.oauth_token = auth.credentials.token
      user.image = auth.info.image
      user.oauth_expires_at = Time.at(auth.credentials.expires_at)
      user.save!
    end
    user = User.where(email: email).first
    if new_user
      UserMailer.welcome_email(user).deliver_now
    end
    user
  end
end