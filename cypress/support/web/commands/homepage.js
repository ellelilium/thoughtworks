import { env_variables } from '../../import'
import { HOMEPAGE_SELECTORS, BOOKING_SELECTORS } from '../selectors'

const faker = require('faker')

Cypress.Commands.add('enterMarsAir', () => {
    cy.intercept('GET', 'https://marsair.recruiting.thoughtworks.net/**').as('homepage')
    cy.visit(env_variables.baseURL)
    cy.wait('@homepage')
})

Cypress.Commands.add('verifyMarsAirLogo', (marsAirName) => {
    cy.get(HOMEPAGE_SELECTORS.MARSAIR_LOGO).contains(marsAirName).should('be.visible')
})

Cypress.Commands.add('verifyElementsOnBookingPanel', (welcomeText, bookTicketText) => {
    cy.get(HOMEPAGE_SELECTORS.WELCOME_TEXT).contains(welcomeText).should('be.visible')
    cy.get(HOMEPAGE_SELECTORS.BOOK_TICKET_TEXT).contains(bookTicketText).should('be.visible')
    cy.get(BOOKING_SELECTORS.DEPARTING_SELECT).should('be.visible')
    cy.get(BOOKING_SELECTORS.RETURNING_SELECT).should('be.visible')
    cy.get(BOOKING_SELECTORS.PROMO_LABEL).should('be.visible')
    cy.get(BOOKING_SELECTORS.SEARCH_BUTTON).should('be.visible')
})

Cypress.Commands.add('selectDepartingDate', (date) => {
    cy.get(BOOKING_SELECTORS.DEPARTING_SELECT).select(date)
})

Cypress.Commands.add('selectReturningDate', (date) => {
    cy.get(BOOKING_SELECTORS.RETURNING_SELECT).select(date)
})

Cypress.Commands.add('clickSearchButton', () => {
    cy.get(BOOKING_SELECTORS.SEARCH_BUTTON).click()
})

Cypress.Commands.add('verifySeatsAvailablilityMessage', (seatAvailabilityText) => {
    cy.get(BOOKING_SELECTORS.SEATS_AVAILABILITY_TEXT).contains(seatAvailabilityText).should('be.visible')
})