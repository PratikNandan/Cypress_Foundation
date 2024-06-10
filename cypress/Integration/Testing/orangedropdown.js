describe('Orange Dynamic Dropdown', () => {
    it('Dy Dropdown', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[name='username']").type('Admin')
        cy.get("input[type='password']").type('admin123')
        cy.get(".oxd-button").click()
        cy.xpath('//li[1]//a[1]//span[1]').click()   //admin
        cy.xpath('//input[@placeholder ="Type for hints..."]').type('jam')  //textbox             // //input[@data-v-75e744cd]
        cy.xpath('//span[@data-v-08ed484c]').each(($el,index,$list)=>{     //dropdown element    //menu item //span[@data-v-08ed484c]
            if ($el.text()=='James  Butler') {
                cy.wrap($el).click();
            } 
        })    
            
    });
});