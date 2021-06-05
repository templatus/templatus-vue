describe 'Vue', js: true do
  it 'renders successfully' do
    visit '/'
    expect(page).to have_css('h1', text: 'Hello, Templatus!')

    click_on 'Click me!'
    click_on 'Click me!'
    click_on 'Click me!'
    expect(page).to have_text("3\nCLICKS")
    expect(page).to have_text('HeadlessChrome', count: 3)

    click_on 'About'
    expect(page).to have_css('h1', text: 'About')
  end
end
