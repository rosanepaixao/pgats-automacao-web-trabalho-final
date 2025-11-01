// cypress.config.js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // ESTA LINHA CORRIGE O ERRO 404 E DEFINE A URL BASE
    baseUrl: 'http://automationexercise.com', 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});