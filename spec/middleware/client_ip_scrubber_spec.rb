describe ClientIpScrubber do
  subject(:middleware) { described_class.new(app) }

  let(:app) { ->(env) { [200, env, 'OK'] } }

  it 'removes the Client-IP header' do
    _code, env =
      middleware.call env_for(
                        'http://example.com/',
                        'HTTP_CLIENT_IP' => '127.0.0.1',
                        'HTTP_X_FORWARDED_FOR' => '103.215.74.185',
                      )

    expect(env).not_to have_key('HTTP_CLIENT_IP')
    expect(env['HTTP_X_FORWARDED_FOR']).to eq('103.215.74.185')
  end

  it 'passes requests without the header through' do
    code, env = middleware.call env_for('http://example.com/')

    expect(code).to eq(200)
    expect(env).not_to have_key('HTTP_CLIENT_IP')
  end

  def env_for(url, **opts)
    Rack::MockRequest.env_for(url, opts)
  end
end
