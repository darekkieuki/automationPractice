import { beforeEach } from "mocha";
// import { savedPassword, savedUserEmail } from "../support/credentials";
import { usernameInput, passwordInput, logInButton } from "../support/login";

describe('Login with correct credentials', () => {
  let userData;

  beforeEach(() => {
    cy.fixture('regdisaster').then((users) => {
      userData = users;
    });
  });

  it('passes the password', () => {

    const email = userData.randomUserEmail
    const password = userData.randomPassword
    cy.visit('/login');
    cy.get(usernameInput).type(email);
    cy.get(passwordInput).type(password);
    cy.get(logInButton).click();
  });
});