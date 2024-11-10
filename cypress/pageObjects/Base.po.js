/// <reference types="cypress"/>

class Base {
    
    //Elements
    get cookiesAllowAll() {
        return cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll');
    }

    get FooterSectionAcademy() {
        return cy.get('.footer-category_list-wrapper a').contains('Academy');
    }


    //Actions
    clickCookiesAllowAll() {
        this.cookiesAllowAll.click();
    };

    clickFooterSectionAcademy() {
        this.FooterSectionAcademy.click();
    }

}

export default Base;