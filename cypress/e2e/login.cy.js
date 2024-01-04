import {password, username, randomUserEmail } from "../support/credentials"
import {usernameInput, passwordInput, logInButton} from "../support/login"

describe('Login with correct credentials', () => {
  it('passes the password', () => {
    cy.visit('/login')
    cy.get(usernameInput).type(randomUserEmail)
    cy.get(passwordInput).type(randomUserEmail)
    cy.get(logInButton).click()
  })
})