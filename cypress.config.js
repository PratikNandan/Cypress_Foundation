const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default; //added during cucumber

async function setupNodeEvents(on,config){
  on('file:preprocessor', cucumber())    //added during cucumber
  return config;
}
module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
      //specPattern:'cypress/Integration/Testing/*.js' //  to run normal files
      //specPattern:'cypress/UAT/features/*.{js,feature}'  // to run feature files cucumber
      //specPattern:'cypress/Integration/**/*.js' //  to run normal files
      specPattern:'cypress/**/*.js' //  to run normal files



    
  },
});
