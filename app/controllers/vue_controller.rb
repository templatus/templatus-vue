class VueController < ApplicationController
  def index
    fresh_when(Rails.configuration.x.git.commit_sha) if Rails.env.production?
  end
end
