Rails.application.config.session_store :cookie_store,
                                       key:
                                         "#{Rails.configuration.x.force_ssl ? '__Host-' : '_'}templatus_session",
                                       secure: Rails.configuration.x.force_ssl
