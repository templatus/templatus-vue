class VueController < ApplicationController
  def index
    return unless Rails.env.production?

    fresh_when(Rails.configuration.x.git.commit_sha, public: true)
  end
end
