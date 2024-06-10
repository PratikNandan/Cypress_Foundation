

describe('Checkbox', () => {
    it.skip('checkbox', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('have.value','option1')
        cy.get('#checkBoxOption2').check().should('have.value','option2')
        cy.get('#checkBoxOption3').check().should('have.value','option3').and('have.attr',)


    });

    it.skip('multiple check boxes', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[type="checkbox"]').check()

        
    });

    it.skip('radio test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get("[value='radio1']").check()


        
    });

    it('Dropdown by Value', () => {          //by value
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        cy.get('#dropdown-class-example').select('option2').should('have.value','option2')
        
    });

    it('Dropdown by index', () => {       //index
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#dropdown-class-example').select(1).should('have.value','option1')




        
    });

    it('Dropdown by Text', () => {          //text
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#dropdown-class-example').select('Option3').should('have.value','option3')

        
    });


    it('Dynamic dropdown', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.ui-autocomplete-input').type('us')                // //input[@data-v-75e744cd]
        cy.get('.ui-menu-item').each(($el,index,$list)=>{         //menu item //span[@data-v-08ed484c]
            if ($el.text()=='United States (USA)') {
                cy.wrap($el).click();

            }
        })

        

        
    });
});