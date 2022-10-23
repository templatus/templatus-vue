describe 'Clicks' do
  include ActiveSupport::Testing::TimeHelpers

  let(:user_agent) { 'Netscape Navigator' }
  let(:ip) { '1.2.3.4' }

  describe 'POST /clicks' do
    let(:user_agent) { 'Netscape Navigator' }

    def call(ip)
      post clicks_path,
           headers: {
             HTTP_USER_AGENT: user_agent,
             REMOTE_ADDR: ip,
             ACCEPT: 'application/json',
           }
    end

    context 'when IPv4' do
      let(:ipv4) { '1.2.3.4' }

      it 'saves click' do
        call(ipv4)

        expect(response).to have_http_status(:created)
        expect(JSON.parse(response.body)).to include(
          { 'notice' => 'Click was successfully recorded.' },
        )
        expect(Click.last.ip).to eq('1.2.3.0')
        expect(Click.last.user_agent).to eq(user_agent)
      end
    end

    context 'when IPv6' do
      let(:ipv6) { '2001:db8::1' }

      it 'saves click' do
        call(ipv6)

        expect(response).to have_http_status(:created)
        expect(JSON.parse(response.body)).to include(
          { 'notice' => 'Click was successfully recorded.' },
        )
        expect(Click.last.ip).to eq('2001:0db8:0:0:0:0:0:0')
        expect(Click.last.user_agent).to eq(user_agent)
      end
    end

    context 'when saving fails' do
      let(:ipv6) { 'invalid' }

      it 'fails and returns http failure' do
        call(ipv6)

        expect(response).to have_http_status(:unprocessable_entity)
        expect(JSON.parse(response.body)).to include(
          { 'alert' => 'Click recording failed!' },
        )
      end
    end
  end

  describe 'GET /index' do
    around { |example| freeze_time(&example) }

    before { Click.create! ip:, user_agent: }

    it 'save click and returns http success' do
      get '/clicks', headers: { ACCEPT: 'application/json' }

      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body)).to match(
        'total' => 1,
        'items' => [
          hash_including(
            {
              'created_at' => Time.current.as_json,
              'ip' => ip,
              'user_agent' => user_agent,
            },
          ),
        ],
      )
    end
  end
end
