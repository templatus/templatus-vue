describe 'Static resources', type: :request do
  it 'responds to /manifest.webmanifest' do
    get '/manifest.webmanifest'
    expect(response).to have_http_status(:ok)
    expect(response.media_type).to eq('application/manifest+json')
  end

  it 'redirects /favicon.ico' do
    get '/favicon.ico'
    expect(response).to redirect_to %r{/packs-test/media/images/.*\.ico}
  end

  it 'redirects /apple-touch-icon.png' do
    get '/apple-touch-icon.png'
    expect(response).to redirect_to %r{/packs-test/media/images/.*\.png}
  end
end
