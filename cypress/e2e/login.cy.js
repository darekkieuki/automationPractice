


import { loginSelector } from "../support/login";
const { logInButton, passwordInput, usernameInput } = loginSelector

describe('Login with correct credentials', () => {
  let userData;

  beforeEach(() => {
    cy.fixture('register').then((users) => {
      userData = users;
    });
  });

  it('passes the password', () => {

    const email = userData.randomUserEmail
    const password = userData.randomPassword
    cy.visit('/login');
    cy.get(usernameInput).type(email);
    cy.get(passwordInput).type(password);

    cy.intercept("POST", `**/login`).as("firstIntercept")

    cy.get(logInButton).click()

    // cy.wait("@firstIntercept")
    // .its("request.body")
    // .then((requestPayload) =>  {
    //   expect(requestPayload.password).to.equal(password)
    // })

    cy.wait("@firstIntercept")
  .its("request.body")
  .then((requestPayload) => {
    const formData = new URLSearchParams(requestPayload);
    expect(formData.get("email")).to.equal(email);
  });
  })
})