class StaticsController < ApplicationController
  # Render /manifest.webmanifest with ERB
  def manifest
    return unless stale?(Rails.configuration.x.git.commit_sha, public: true)

    render content_type: 'application/manifest+json'
  end

  # Redirect /favicon.ico to corresponding webpacker URL
  def favicon
    redirect_to helpers.image_pack_url('favicon.ico')
  end

  # Redirect /apple_touch_icon.png to corresponding webpacker URL
  def apple_touch_icon
    redirect_to helpers.image_pack_url('apple-touch-icon.png')
  end
end
