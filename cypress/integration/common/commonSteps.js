import {Given} from 'cypress-cucumber-preprocessor/steps'

Given('I access MarsAir page', () => {
    cy.enterMarsAir()
})