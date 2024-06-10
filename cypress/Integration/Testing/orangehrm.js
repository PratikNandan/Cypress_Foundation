describe('Orange HRM', () => {
    it('Login', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[name='username']").type('Admin')
        cy.get("input[type='password']").type('admin123')
        cy.get(".oxd-button").click()
        cy.xpath('(//span[@class="oxd-text oxd-text--span"])[1]').click()

        
    });
});