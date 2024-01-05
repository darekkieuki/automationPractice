import { faker } from "@faker-js/faker";

const incorrectCredentials = {
  password: "password",
  username: "kleyone@gmail.com",
};

const countries = [
  "India",
  "United States",
  "Canada",
  "Australia",
  "Israel",
  "New Zealand",
  "Singapore",
];

const credentials = {
  randomUserName: faker.internet.userName(),
  randomUserEmail: faker.internet.email(),
  randomPassword: faker.internet.password(),
  randomFirstName: faker.person.firstName(),
  randomLastName: faker.person.lastName(),
  randomAddress: faker.location.streetAddress(),
  randomState: faker.location.state(),
  randomCity: faker.location.city(),
  randomZipcode: faker.location.zipCode(),
  randomPhoneNumber: faker.phone.number("###-###-###"),
  randomDay: faker.number.int({ min: 1, max: 31 }),
  randomMonth: faker.number.int({ min: 1, max: 12 }),
  randomYear: faker.number.int({ min: 1989, max: 2021 }).toString(),
  randomCountry: countries[Math.floor(Math.random() * countries.length)],
};

const signUpData = {
  savedUserEmail: credentials.randomUserEmail,
  savedPassword: credentials.randomPassword
};

const { password, username } = incorrectCredentials;

const {
  randomCountry,
  randomFirstName,
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
} = credentials;

const { savedUserEmail, savedPassword } = signUpData;

export {
  randomCountry,
  randomFirstName,
  password,
  username,
  randomUserEmail,
  randomUserName,
  savedUserEmail,
  randomPassword,
  randomLastName,
  randomAddress,
  randomState,
  randomCity,
  randomZipcode,
  randomPhoneNumber,
  randomDay,
  randomMonth,
  randomYear,
  savedPassword
};
