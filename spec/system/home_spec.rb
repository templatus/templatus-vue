describe 'Home', type: :system, js: true do
  it 'renders successfully' do
    visit '/'
    expect(page).to have_text('Hello World!')
  end
end
