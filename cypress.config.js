const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "9nu8pm",
  e2e: {
    "baseUrl" : 'https://www.saucedemo.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
