describe('Hero UK', () => {
    it('Login', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        //cy.get('#username').type('Captain Jack')
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.radius').click()
        
    });
});