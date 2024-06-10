class LogoutPage{
    visit(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    }
    
    logout(){
        
        //cy.xpath('//input[@name="username"]').type('Admin')
        //cy.xpath('//input[@name="password"]').type('admin123')
        //cy.xpath('//button[@type="submit"]').click()

        cy.xpath('//li[1]//a[1]//span[1]').click()     

        cy.xpath('//p[@class="oxd-userdropdown-name"]').click()

        cy.contains('Logout').click

       // cy.xpath("//[normalize-space()='Logout']").click()


    }
}

export default LogoutPage;