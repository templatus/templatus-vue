# Remove 'x-runtime' header
Rails.application.config.middleware.delete(Rack::Runtime)
