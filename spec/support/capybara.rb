# To use save_and_open_page with CSS and JS loaded, get assets from this host
Capybara.asset_host = "https://#{Rails.configuration.x.app_host}"

RSpec.configure do |config|
  config.before :each, type: :system do
    driven_by :rack_test
  end
end
