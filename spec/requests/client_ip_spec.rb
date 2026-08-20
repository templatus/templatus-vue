describe 'Client IP' do
  it 'ignores a forged Client-IP header' do
    get root_path,
        headers: {
          'Client-IP' => '127.0.0.1',
          'X-Forwarded-For' => '103.215.74.185',
        }

    expect(response).to have_http_status(:success)
    expect(request.remote_ip).to eq('103.215.74.185')
  end
end
