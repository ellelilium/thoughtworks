import './import'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })