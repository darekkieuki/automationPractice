import {usernameInput, passwordInput, logInButton} from "../support/login"
import {password, username} from "../support/credentials"

describe('Login with incorrect credentials', () => {
  it('passes the wrong password', () => {
    cy.visit('/login')
    cy.get(usernameInput).type(username)
    cy.get(passwordInput).type(password)
    cy.get(logInButton).click()
    cy.contains('Your email or password is incorrect!').should('be.visible');
  })
})