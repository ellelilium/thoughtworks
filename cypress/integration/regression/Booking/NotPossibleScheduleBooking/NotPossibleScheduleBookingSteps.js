import { When, Then } from 'cypress-cucumber-preprocessor/steps'

When('I select correct departing and less than 1 year returning dates', () => {
    cy.selectDepartingDate('July')
    cy.selectReturningDate('December')
    cy.clickSearchButton()
})

Then('I can see schedule is not possible message', () => {
    cy.verifySeatsAvailablilityMessage('Unfortunately, this schedule is not possible. Please try again.')
})