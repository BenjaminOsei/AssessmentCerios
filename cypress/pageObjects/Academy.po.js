/// <reference types="cypress"/>

class Academy {
    
    //Elements
    get contentSection() {
        return cy.get('.content-wrap');
    };

    get paragraphContent() {
        return cy.get('.content-wrap').find('p');
    }

    get itemSection() {
        return cy.get('.item-wrapper');
    }

    get itemContent() {
        return cy.get('.item-wrapper').find('p')
    }

    //filter function applied with non-breaking space syntax to be able to actually verify the html content using the contain.html
    //within the should function
    get ItemContentContainingNonBreakingSpace() {
        return cy.get('.item-wrapper').find('p').filter(':contains("\u00a0")');
    }

    //Actions
    verifySectionTitle(title) {
        this.contentSection.contains(title);
    };

    verifyParagraphContent(content) {
        this.paragraphContent.contains(content);
    }

    verifyItemSectionTitle(title) {
        this.itemSection.contains(title);
    }

    verifyItemContent(content) {
        this.itemContent.contains(content);
    }

    verifyItemContentContainingNonBreakingSpace(content) {
        this.ItemContentContainingNonBreakingSpace.should('contain.html', content)
    }
    

}

export default Academy;