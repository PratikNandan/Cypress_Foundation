///<reference types="Cypress"/>
describe('test suite', () => {
    it('first test case', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.wait(2000)
    });
});