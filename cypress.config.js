const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // eventos, se necessário
    },
    baseUrl: 'https://automationexercise.com',
    defaultCommandTimeout: 60000,
    pageLoadTimeout: 60000,
    requestTimeout: 60000,
    responseTimeout: 60000
  }
});