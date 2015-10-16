class User < ActiveRecord::Base
  has_many :team_users
  has_many :sprint_users
  has_many :sprints, through: :sprint_users
  has_many :teams, through: :team_users
  def self.from_omniauth(auth)
    email = auth.info.email
    present_user = User.where(email: email).first

    where(email: auth.info.email).first_or_initialize.tap do |user|
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
    if !present_user
      UserMailer.welcome_email(user).deliver_now
    end
    user
  end

  # def self.from_omniauth(auth)
  #   email = auth.info.email
  #   new_user = false
  #   present_user = User.where(email: email).first
  #   teams = []

  #   if present_user && !present_user.provider
  #     teams = present_user.teams
  #     # present_user.delete
  #     TeamUser.where(user_id: present_user.id).destroy_all
  #     present_user = nil
  #   end
    
  #   where(provider: auth.provider, uid: auth.uid).first_or_initialize.tap do |user|

  #     if(present_user and !user.id)
  #       teams = present_user.teams
  #     end

  #     user.provider = auth.provider
  #     user.uid = auth.uid
  #     user.name = auth.info.name
  #     user.email = auth.info.email
  #     user.oauth_token = auth.credentials.token
  #     user.image = auth.info.image
  #     user.oauth_expires_at = Time.at(auth.credentials.expires_at)
  #     user.save!

  #     teams.forEach do |team|
  #       TeamUser.create({user_id: user.id, team_id: team.id})
  #     end
  #   end
  #   user = User.where(email: email).first
  #   if !present_user
  #     UserMailer.welcome_email(user).deliver_now
  #   end
  #   user
  # end


end