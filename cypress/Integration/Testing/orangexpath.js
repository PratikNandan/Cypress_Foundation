///<reference types="@cypress/xpath"/>

describe('Orange Xpath', () => {
    it.skip('login', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.xpath('//input[@name="username"]').type('Admin')
        cy.xpath('//input[@type="password"]').type('admin123')
        cy.xpath('//button[@type="submit"]').click()
        cy.wait(2000)


        
    });

    it('Logout', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.xpath('//input[@name="username"]').type('Admin')
        cy.xpath('//input[@type="password"]').type('admin123')
        cy.xpath('//button[@type="submit"]').click()
        cy.wait(4000)
        cy.xpath('//p[@class="oxd-userdropdown-name"]').click()
        cy.xpath('//a[normalize-space()="Logout"]').click()
        cy.wait(4000)

       
    });
});