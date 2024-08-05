import { When, Then } from 'cypress-cucumber-preprocessor/steps'

When('I select correct departing and 2 years later returning dates', () => {
    cy.selectDepartingDate('July')
    cy.selectReturningDate('December (two years from now)')
    cy.clickSearchButton()
})

Then('I can see Seats available message', () => {
    cy.verifySeatsAvailablilityMessage('Seats available!')
})