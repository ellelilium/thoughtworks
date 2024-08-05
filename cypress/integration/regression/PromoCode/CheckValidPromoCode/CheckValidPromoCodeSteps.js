import { When, And, Then} from 'cypress-cucumber-preprocessor/steps'

When('I select correct departing and 2 years later returning dates', () => {
    cy.selectDepartingDate('July')
    cy.selectReturningDate('December (two years from now)')
})

And('I apply a correct promo code', () => {
    cy.applyRandomPromoCode()
    cy.clickSearchButton()
})