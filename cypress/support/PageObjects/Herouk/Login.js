class Loginpage{

    visiturl(){
        cy.visit('https://the-internet.herokuapp.com/login')
    }

    Login(){
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.radius').click()
    }
}

export default Loginpage;