describe('Visible', () => {
    it('visible/invisible', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#displayed-text').type('Cypress').should('be.visible')

        cy.get('#hide-textbox').click()

        cy.get('#displayed-text').type('Cypress').should('not.be.visible')

        cy.get('#hide-textbox').click()

        cy.get('#displayed-text').type('Program').should('be.visible')




        
    });
});