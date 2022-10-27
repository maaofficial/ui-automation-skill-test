/// <reference types="cypress" />

import UIAutomation from '../pages/uiautomationPage'

describe('Jojonomic UI Automation Skill Test', () => {
    beforeEach(() => {
        cy.visit('https://www.service.nsw.gov.au/')
    });

    it('Should be able to search keywords "Apply for a number plate" and Validate the navigation to appropriate page', () => {
        // Number 1 & 2
        UIAutomation.elements.pageTitle().should('have.text', 'Service NSW makes it easier to find government information and services')
        UIAutomation.elements.searchBar().should('be.visible')
        UIAutomation.searchKeywords('Apply for a number plate')
        UIAutomation.elements.buttonSearchHome().should('be.visible')
        UIAutomation.clickSearhButton()
        UIAutomation.elements.validateSearchResult().should('contain.text', 'Apply to collect number plates from another service centre')
    });

    it('Should be able to Find Locations Service Centre by suburb Sydney 2000', () => {
        // Number 3, 4, and 5
        UIAutomation.elements.findLocationsButton().should('be.visible')
        UIAutomation.clickFindLocations()
        UIAutomation.elements.searchBarFindLocations().wait(500).should('be.visible')
        UIAutomation.searchSuburbFIndLocations('Sydney 2000')
        UIAutomation.clickSearchButtonFindLocations()
        UIAutomation.elements.serviceCentreName().should('contain.text', 'Haymarket Service Centre')
    });
    
    it('Should be able to Find Locations Service Centre by suburb Sydney Domestic Airport 2020', () => {
        // Data-driven step 3, 4, and 5
        UIAutomation.elements.findLocationsButton().should('be.visible')
        UIAutomation.clickFindLocations()
        UIAutomation.elements.searchBarFindLocations().wait(500).should('be.visible').clear()
        UIAutomation.searchSuburbFIndLocations('Sydney Domestic Airport 2020')
        UIAutomation.clickSearchButtonFindLocations()
        UIAutomation.elements.serviceCentreName().should('contain.text', 'Rockdale Service Centre')
    });

});