import Academy from '../pageObjects/Academy.po';
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('verifyParagraphContent', (nameFixtureFile, sectionTitle) => { 
    const AcademyPO = new Academy();
    cy.fixture(nameFixtureFile).then( paragraphContent => {
        AcademyPO.verifySectionTitle(sectionTitle);
        AcademyPO.verifyParagraphContent(paragraphContent);
    })
});

Cypress.Commands.add('verifyItemContentContainingNonBreakingSpace', (nameFixtureFile, sectionTitle) => { 
    const AcademyPO = new Academy();
    cy.fixture(nameFixtureFile).then( paragraphContent => {
       AcademyPO.verifyItemSectionTitle(sectionTitle);
       AcademyPO.verifyItemContentContainingNonBreakingSpace(paragraphContent);
   })
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })