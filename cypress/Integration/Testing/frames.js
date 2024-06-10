///<reference types="cypress-iframe" />
describe('frames', () => {
    it('testing', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.frameLoaded('#courses-iframe');//id of frame

        cy.iframe().contains('Blog').click();
        
    });
});