Rails.application.config.session_store :cookie_store,
                                       key: '_rails_vue3_session',
                                       secure: Rails.env.production?
