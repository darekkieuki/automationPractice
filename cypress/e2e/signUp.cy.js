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
  savedUserEmail,
  savedUsername,
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
  accountCreated
} from "../support/login";

describe("Creates new account", () => {
  it("sucks cock", () => {
    cy.visit("/login");
    signUp(randomUserName, randomUserEmail)
    register(savedUsername, savedUserEmail, randomPassword, randomZipcode)
    assertion()
  });
});



function signUp(name, email){
  cy.get(signupName).type(name);
  cy.get(signupMail).type(email);
  cy.get(signUpButton).click();
}

function register(name, email, password, zipcode){
  cy.get(nameInput).invoke("attr", "value").should("contain", name);
    cy.get(emailInput).invoke("attr", "value").should("contain", email);
    cy.get(signUpPassword).type(password);
    cy.get(daySelector).select(randomDay);
    cy.get(monthSelector).select(randomMonth);
    cy.get(yearSelector).select(randomYear);
    cy.get(firstNameInput).type(randomFirstName);
    cy.get(lastNameInput).type(randomLastName);
    cy.get(addressInput).type(randomAddress);
    cy.get(countrySelector).select(randomCountry);
    cy.get(stateInput).type(randomState);
    cy.get(cityInput).type(randomCity);
    cy.get(zipcodeInput).type(zipcode);
    cy.get(mobileInput).type(randomPhoneNumber);
    cy.get(registerButton).click();
}

function assertion(){
  cy.get(accountCreated).should('contain', 'Account Created!')
}
