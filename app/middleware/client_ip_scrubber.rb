# Middleware to remove the `Client-IP` request header.
#
# The reverse proxy in front of the app never sets this header, so any value
# in it comes from the client. Rails compares it with `X-Forwarded-For` and
# raises `ActionDispatch::RemoteIp::IpSpoofAttackError` if both differ, which
# turns a forged header from a bot into a 500 error.

class ClientIpScrubber
  def initialize(app)
    @app = app
  end

  def call(env)
    env.delete('HTTP_CLIENT_IP')

    @app.call(env)
  end
end
