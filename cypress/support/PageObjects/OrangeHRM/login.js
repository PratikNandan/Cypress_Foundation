class LoginPage{
    visiturl(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
    }

    login(){
        cy.xpath('//input[@name="username"]').type('Admin')
        cy.xpath('//input[@name="password"]').type('admin123')
        cy.xpath('//button[@type="submit"]').click()

    }
}

export default LoginPage;
