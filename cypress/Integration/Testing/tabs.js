///<reference types="@cypress/xpath"/>

describe('tabs', () => {
    it.skip('open tabs', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr','target').click();

        cy.origin('https://www.qaclickacademy.com/',()=>{
            cy.contains('Access all our Courses').click()   

            cy.log(cy.title())
        })
        cy.log(cy.title())
    
    });

    it('open window', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#openwindow').invoke('removeAttr','onclick').click();

        cy.origin('https://www.qaclickacademy.com/',()=>{
        cy.visit('/')
        cy.contains('Access all our Courses').click()   
        cy.log(cy.title())
    })






        
    });

    
});