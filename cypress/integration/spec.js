const getLeftNavMenuItem = (name) => cy.get('.navbar.navbar-inverse ul#left-nav>li').contains(name);
const getMainNavMenuItem = (name) => cy.get('.navbar.navbar-inverse ul#main-nav>li').contains(name);

describe('page', () => {
  before(() => {
    cy.visit('/');

    getLeftNavMenuItem('Features').click();
    cy.url().should('contain', '/features/');

    getLeftNavMenuItem('Pricing').click();
    cy.url().should('contain', '/pricing/');
  });

  it('works', () => {
    cy.wrap(true).should('be.true');
  });

  // ***** NOTE *****
  // The presence of this failing tests means that the clicks in the 'after' block don't work.
  // If this test is either removed or changed to be passing, then the 'after' block will work.
  it('fails', () => {
    cy.wrap(false).should('be.true');
  })

  after(() => {
    getMainNavMenuItem('Blog').click();
    cy.url().should('contain', '/blog/');

    getMainNavMenuItem('Support').click();
    cy.url().should('contain', '/support/');
  });
});
