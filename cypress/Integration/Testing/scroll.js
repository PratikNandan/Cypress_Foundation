describe('Scroll', () => {
    it('google', () => {

        cy.visit('https://www.google.co.in/')
        cy.xpath("//textarea[@class='gLFyf']").type('Masai{enter}')

        
    });
});