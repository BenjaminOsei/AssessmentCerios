import Base from '../pageObjects/Base.po';

describe('Navigate to the Academy page via the footer section and generally verify the Academy page content', () => {
  it('Subset of sections on Academy page and its content', () => {
    const BasePo = new Base();

    cy.visit('/');
    BasePo.clickCookiesAllowAll();
    BasePo.clickFooterSectionAcademy();
    cy.verifyParagraphContent('laatJeInspireren', 'Laat je inspireren');
    cy.verifyParagraphContent('maakJouwAmbitieWaar', 'Maak jouw ambitie waar met onze uitgebreide opleidingsmogelijkheden');
    cy.verifyParagraphContent('onzeOpleidingsmogelijkheden', 'Onze opleidingsmogelijkheden');
    cy.verifyItemContentContainingNonBreakingSpace('traineeship', 'Traineeship');
    cy.verifyParagraphContent('opleidingen', 'Opleidingen');
    cy.verifyParagraphContent('certificering', 'Certificering');
  })
})