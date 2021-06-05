Rails.application.config.session_store :cookie_store,
                                       key: '_templatus_session',
                                       secure: Rails.env.production?
