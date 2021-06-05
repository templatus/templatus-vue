describe 'Routes', type: :request do
  it 'reponds unknown route as success (so Vue is responsible for routing)' do
    get '/about'
    expect(response).to have_http_status(:ok)
  end
end
