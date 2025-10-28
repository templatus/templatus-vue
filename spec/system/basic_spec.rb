describe 'Basic navigation and interaction' do
  it 'can navigate between pages' do
    visit '/'
    expect(page).to have_content('Hello')

    click_on 'About'
    expect(page).to have_selector('main h1', text: 'About')

    click_on 'Home'
    expect(page).to have_selector('main h1', text: 'Hello')
  end

  it 'can click button and see updates' do
    visit '/'
    expect(page).to have_selector('main h1', text: 'Hello, Templatus!')
    expect(page).to have_selector('#counter', text: '0')

    click_button 'Click me!'

    expect(page).to have_selector('#counter', text: '1')
    expect(page).to have_selector('ul', text: '127.0.0.0')
    expect(page).to have_selector('li', count: 1)
    expect(page).to have_selector('#flash', text: 'successfully')
  end
end
