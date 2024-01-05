const loginSelector = {
  usernameInput: '[data-qa="login-email"]',
  passwordInput: '[data-qa="login-password"]',
  logInButton: '[data-qa="login-button"]',
};

const signupSelector = {
  signupName: '[data-qa="signup-name"]',
  signupMail: '[data-qa="signup-email"]',
  signUpButton: '[data-qa="signup-button"]',
  nameInput: "#name",
  emailInput: "#email",
  signUpPassword: "#password",
  daySelector: "#days",
  monthSelector: "#months",
  yearSelector: "#years",
  firstNameInput: "#first_name",
  lastNameInput: "#last_name",
  addressInput: "#address1",
  countrySelector: "#country",
  stateInput: "#state",
  cityInput: "#city",
  zipcodeInput: "#zipcode",
  mobileInput: "#mobile_number",
  registerButton: '[data-qa="create-account"]',
  accountCreated: '[data-qa="account-created"]'
};

const {
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
} = signupSelector;

const { usernameInput, passwordInput, logInButton } = loginSelector;

export {
  emailInput,
  nameInput,
  usernameInput,
  passwordInput,
  logInButton,
  signupName,
  signupMail,
  signUpButton,
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
};
