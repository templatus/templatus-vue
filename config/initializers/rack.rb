# Remove 'x-runtime' header
Rails.application.config.middleware.delete(Rack::Runtime)

# Add content_type for some file extension not included in the
# list of defaults: https://github.com/rack/rack/blob/master/lib/rack/mime.rb
Rack::Mime::MIME_TYPES['.webmanifest'] = 'application/manifest+json'

# Enable gzip and brotli compression
Rails.application.config.middleware.use Rack::Deflater
Rails.application.config.middleware.use Rack::Brotli

# Monkey patch ActionDispatch::Static to serve compressed SVG
# Idea taken from https://stackoverflow.com/a/45992324/57950
require 'action_dispatch/middleware/static'
module ActionDispatch
  Static.class_eval do
    def initialize(app, path, index: 'index', headers: {})
      @app = app
      @file_handler =
        FileHandler.new(
          path,
          index: index,
          headers: headers,
          ##### Added "image/svg+xml"
          compressible_content_types: %r{\A(?:text/|application/javascript|image/svg\+xml)},
          #####
        )
    end
  end
end
