describe 'Home', type: :system, js: true do
  it 'renders successfully' do
    visit '/'
    expect(page).to have_text('Hello Vue!')

    click_on 'About'
    expect(page).to have_text('This is an opinionated template')
  end
end
