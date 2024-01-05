import {
  randomDay,
  randomMonth,
  randomYear,
  randomUserName,
  randomUserEmail,
  randomPassword,
  randomLastName,
  randomAddress,
  randomState,
  randomCity,
  randomZipcode,
  randomPhoneNumber,
  randomFirstName,
  randomCountry,
} from "../support/credentials";

import {
  nameInput,
  signupName,
  signupMail,
  signUpButton,
  emailInput,
  signUpPassword,
  daySelector,
  monthSelector,
  yearSelector,
  firstNameInput,
  lastNameInput,
  addressInput,
  countrySelector,
  stateInput,
  cityInput,
  zipcodeInput,
  mobileInput,
  registerButton,
  accountCreated,
} from "../support/login";


describe("Creates new account", () => {
  it("sucks cock", () => {
    cy.visit("/login");
    signUp(randomUserName)
    register()
    assertion()
    cy.writeFile('cypress/fixtures/regdisaster.json', { randomUserEmail, randomPassword})
  });
});



function signUp(name){
  cy.get(signupName).type(name);
  cy.get(signupMail).type(randomUserEmail);
  cy.get(signUpButton).click()

}

function register(){
  cy.get(nameInput).invoke("attr", "value").should("contain", randomUserName);
    cy.get(emailInput).invoke("attr", "value").should("contain", randomUserEmail);
    cy.get(signUpPassword).type(randomPassword);
    cy.get(daySelector).select(randomDay);
    cy.get(monthSelector).select(randomMonth);
    cy.get(yearSelector).select(randomYear);
    cy.get(firstNameInput).type(randomFirstName);
    cy.get(lastNameInput).type(randomLastName);
    cy.get(addressInput).type(randomAddress);
    cy.get(countrySelector).select(randomCountry);
    cy.get(stateInput).type(randomState);
    cy.get(cityInput).type(randomCity);
    cy.get(zipcodeInput).type(randomZipcode);
    cy.get(mobileInput).type(randomPhoneNumber);
    cy.get(registerButton).click();
}

function assertion(){
  cy.get(accountCreated).should('contain', 'Account Created!')
}

