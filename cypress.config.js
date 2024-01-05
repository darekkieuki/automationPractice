const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'mg4kea',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.automationexercise.com',
  },
});
