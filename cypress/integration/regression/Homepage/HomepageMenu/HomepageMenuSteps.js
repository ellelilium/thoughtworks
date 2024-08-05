import { When, Then } from 'cypress-cucumber-preprocessor/steps'

When('MarsAir logo is displayed', () => {
    cy.verifyMarsAirLogo('MarsAir')
})

Then('I can verify elements on booking panel', () => {
    cy.verifyElementsOnBookingPanel('Welcome to MarsAir!', 'Book a ticket to the red planet now!')
})