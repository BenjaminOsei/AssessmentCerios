import Home from '../pageObjects/Home.po'

describe('Navigate to the Academy page via the footer section and verify page content per test procedure', () => {
  it('Laat je inspireren', () => {
    const HomePo = new Home();
    cy.visit('https://www.cerios.nl/');
    HomePo.clickCookiesAllowAll();
    HomePo.clickFooterSectionAcademy();
    cy.fixture('laatJeInspireren.txt').then(paragraphContent => {
      cy.get('.usp_list').find('.content-wrap').contains('Laat je inspireren');
      cy.get('.usp_list').find('p').contains(paragraphContent);
    })
  })
})