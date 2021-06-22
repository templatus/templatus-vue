class VueController < ApplicationController
  def index
    fresh_when(Rails.configuration.x.git.commit_sha, public: true)
  end
end
