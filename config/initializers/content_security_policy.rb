# Be sure to restart your server when you modify this file.

# Define an application-wide content security policy.
# See the Securing Rails Applications Guide for more information:
# https://guides.rubyonrails.org/security.html#content-security-policy-header

Rails.application.configure do
  config.content_security_policy do |policy|
    if Rails.env.development?
      policy.style_src :self,
                       # Allow @vite/client to hot reload style changes
                       :unsafe_inline

      policy.script_src :self,
                        :unsafe_inline,
                        # Allow @vite/client to hot reload JavaScript changes
                        "https://#{ViteRuby.config.host}"

      policy.connect_src :self,
                         # Allow ActionCable connection
                         (
                           if Rails.configuration.x.app_host
                             "wss://#{Rails.configuration.x.app_host}"
                           end
                         ),
                         # Allow @vite/client to hot reload CSS changes
                         "wss://#{ViteRuby.config.host}"
    else
      policy.default_src :none
      policy.font_src(
        *[:self, :data, Rails.configuration.asset_host.presence].compact,
      )
      policy.img_src(
        *[:self, :data, Rails.configuration.asset_host.presence].compact,
      )
      policy.object_src :none
      policy.script_src(
        *[:self, Rails.configuration.asset_host.presence].compact,
      )
      policy.style_src(
        *[:self, Rails.configuration.asset_host.presence].compact,
      )
      policy.frame_src(
        *[:self, Rails.configuration.asset_host.presence].compact,
      )
      policy.connect_src(
        *[
          :self,
          (
            if Rails.configuration.x.app_host
              "wss://#{Rails.configuration.x.app_host}"
            end
          ),
          (
            if Rails.configuration.x.honeybadger.api_key
              'https://api.honeybadger.io'
            end
          ),
          Rails.configuration.x.plausible_url.presence,
        ].compact,
      )
      policy.manifest_src :self
      policy.frame_ancestors :none
    end
    policy.base_uri :self
    policy.form_action :self

    # Specify URI for violation reports
    # policy.report_uri "/csp-violation-report-endpoint"

    #   # Generate session nonces for permitted importmap, inline scripts, and inline styles.
    #   config.content_security_policy_nonce_generator = ->(request) { request.session.id.to_s }
    #   config.content_security_policy_nonce_directives = %w(script-src style-src)
    #
    #   # Automatically add `nonce` to `javascript_tag`, `javascript_include_tag`, and `stylesheet_link_tag`
    #   # if the corresponding directives are specified in `content_security_policy_nonce_directives`.
    #   # config.content_security_policy_nonce_auto = true
    #
    #   # Report violations without enforcing the policy.
    #   # config.content_security_policy_report_only = true
  end
end
