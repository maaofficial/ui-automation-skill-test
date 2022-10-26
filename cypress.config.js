const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  video: false,
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  env: {
    base_url: 'https://www.service.nsw.gov.au'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
