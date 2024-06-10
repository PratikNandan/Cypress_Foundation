///<reference types="@cypress/xpath"/>

describe('Evaluation', () => {
    it('Login', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.xpath('//input[@name="username"]').type('Admin')
        cy.xpath('//input[@name="password"]').type('admin123')
        cy.xpath('//button[@type="submit"]').click()
    });


    it('Admin', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.xpath('//input[@name="username"]').type('Admin')
        cy.xpath('//input[@name="password"]').type('admin123')
        cy.xpath('//button[@type="submit"]').click()

        cy.xpath('//li[1]//a[1]//span[1]').click()

        cy.xpath('(//input[@class="oxd-input oxd-input--active"])[2]').type('abcdy')   //username

        cy.xpath("(//div[@class='oxd-select-text--after'])[1]").select[2]             //user role
        
        //cy.xpath("(//div[contains(text(),'-- Select --')])[1]").select(2).should('have.value','Admin')

        cy.xpath('//input[@placeholder="Type for hints..."]').type('Ran');         //Employee Name

        cy.xpath("//div[@class='oxd-autocomplete-dropdown --positon-bottom']").each(($el,index,$list)=>{
            if($el.text()=='Ranga Akunuri'){
                cy.wrap($el).click();

            }
        })

        cy.xpath('(//div[@class="oxd-select-text-input"])[2]').select('Enabled')    // status

        cy.xpath('//button[@type="submit"]').click();            //search


        
    });

    // for the question of web table no record for james found during run time

    it.only('Logout', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.xpath('//input[@name="username"]').type('Admin')
        cy.xpath('//input[@name="password"]').type('admin123')
        cy.xpath('//button[@type="submit"]').click()

        cy.xpath('//li[1]//a[1]//span[1]').click()

        cy.xpath('//p[@class="oxd-userdropdown-name"]').click()

        cy.xpath("//a[normalize-space()='Logout']").click()



        
    });

});