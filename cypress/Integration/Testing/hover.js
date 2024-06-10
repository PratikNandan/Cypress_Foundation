describe('mouse actions', () => {
    it('hover', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#mousehover').invoke('show')

        cy.contains('Top').click({force:true})

        cy.url().should('include','top')

    });


    it('hover - 2', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#mousehover').trigger('mouseover')

        cy.contains('Top').click({force:true})




        
    });


    it('right click', () => {

        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')

        cy.xpath('//span[@class="context-menu-one btn btn-neutral"]').rightclick();
        
    });


    it('double click', () => {

        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')

        cy.xpath('//button').rightclick();

    });

    it.only('drag and drop', () => {

        cy.visit("https://v1.training-support.net/selenium/drag-drop")

        cy.get('#draggable').trigger('mousedown',{which:1})

        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})
        
    });


    





});