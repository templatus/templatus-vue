# Be sure to restart your server when you modify this file.

# Define an application-wide content security policy
# For further information see the following documentation
# https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy

Rails
  .application
  .config
  .content_security_policy do |policy|
    if Rails.env.development?
      policy.script_src :self,
                        :unsafe_eval,
                        :unsafe_inline,
                        "https://webpack.#{ENV['APP_HOST']}"
      policy.connect_src :self,
                         "wss://#{ENV['APP_HOST']}",
                         "https://webpack.#{ENV['APP_HOST']}",
                         "wss://webpack.#{ENV['APP_HOST']}"
    else
      policy.default_src :none
      policy.font_src :self, :data
      policy.img_src :self, :data
      policy.object_src :none
      policy.script_src :self
      policy.style_src :self
      policy.connect_src :self, "wss://#{ENV['APP_HOST']}"
      policy.manifest_src :self
      policy.frame_ancestors :none
    end
    policy.base_uri :self
    policy.form_action :self

    # Specify URI for violation reports
    # policy.report_uri "/csp-violation-report-endpoint"
  end

# If you are using UJS then enable automatic nonce generation
# Rails.application.config.content_security_policy_nonce_generator = -> request { SecureRandom.base64(16) }

# Set the nonce only to specific directives
# Rails.application.config.content_security_policy_nonce_directives = %w(script-src)

# Report CSP violations to a specified URI
# For further information see the following documentation:
# https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only
# Rails.application.config.content_security_policy_report_only = true

# Get rid of X-Frame-Options, see hint in Chrome DevTools:
#
# The 'X-Frame-Options' header should not be used. A similar effect, with more consistent support and
# stronger checks, can be achieved with the 'Content-Security-Policy' header and 'frame-ancestors' directive.
Rails.configuration.action_dispatch.default_headers.delete('X-Frame-Options')
