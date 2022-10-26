/// <reference types="cypress" />

class UIAutomation {
    elements = {
        pageTitle : () => cy.get('#page-title'),
        searchBar : () => cy.get('#homeautosuggestd9cC-dHU724 > .form__text'),
        buttonSearchHome : () => cy.get('[data-personalisation-type="default"] > .page-hero > .container > .page-hero__title > .form--hero-search-group > .form__actions > .button'),
        validateSearchResult : () => cy.get(':nth-child(2) > h3 > a'),
        findLocationsButton : () => cy.get('.MainNav__list-peZtddYtxn > :nth-child(4)'),
        labelSearchFindLocations : () => cy.get('.label--large'),
        searchBarFindLocations : () => cy.get('#locatorTextSearch'),
        buttonSearchFindLocations : () => cy.get('.form__actions > .button'),
        serviceCentreName : () => cy.get('.location__title')
    }

    searchKeywords(keywords) {
        this.elements.searchBar().type(keywords)
    }

    clickSearhButton() {
        this.elements.buttonSearchHome().click()
    }

    clickFindLocations() {
        this.elements.findLocationsButton().click()
    }

    searchSuburbFIndLocations(keywords) {
        this.elements.labelSearchFindLocations().type(keywords)
    }

    clickSearchButtonFindLocations() {
        this.elements.buttonSearchFindLocations().click()
    }
}

module.exports = new UIAutomation();