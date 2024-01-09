import { faker } from "@faker-js/faker";

export const incorrectCredentials = {
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

export const credentials = {
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