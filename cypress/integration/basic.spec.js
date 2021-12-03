describe('Basic tests', () => {
  beforeEach(() => {
    cy.request('/cypress_rails_reset_state');
    cy.visit('/');
  });

  it('can navigate', () => {
    cy.contains('About').click();
    cy.get('main h1').should('contain', 'About');

    cy.contains('Home').click();
    cy.get('main h1').should('contain', 'Hello');
  });

  it('can click', () => {
    cy.get('main h1').should('contain', 'Hello, Templatus!');

    cy.get('button').click();
    cy.get('ul').should('contain', '127.0.0.0');
    cy.get('li').should('have.length', 1);

    cy.get('#counter').should('contain', '1');
  });
});
