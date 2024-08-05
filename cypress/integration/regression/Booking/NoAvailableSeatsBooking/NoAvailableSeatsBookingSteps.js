import { When, Then } from 'cypress-cucumber-preprocessor/steps'

When('I select correct departing and less than 2 years returning dates', () => {
    cy.selectDepartingDate('July')
    cy.selectReturningDate('December (next year)')
    cy.clickSearchButton()
})

Then('I can see Seats are not available message', () => {
    cy.verifySeatsAvailablilityMessage('Sorry, there are no more seats available.')
})