class Home {
    
    get cookiesAllowAll() {
        return cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll');
    }

    get FooterSectionAcademy() {
        return cy.get('.footer-category_list-wrapper a').contains('Academy');
    }



    clickCookiesAllowAll() {
        this.cookiesAllowAll.click();
    };

    clickFooterSectionAcademy() {
        this.FooterSectionAcademy.click();
    }

}

export default Home;