describe('Test Suite -Facebook', () => {
    it('Login Test', () => {
        //visit targeted website
        cy.visit('https://www.facebook.com/')

        //cy.get('#email').type('Pratik')   //#email is tag(unique id i.e.) value
        cy.get("input[name='email']").type('Johny')    //second method

        //cy.get('#pass').type('Pratik123')
        cy.get("input[type='password']").type('Pratik123')

        cy.get('#loginbutton').click

        
    });  
});