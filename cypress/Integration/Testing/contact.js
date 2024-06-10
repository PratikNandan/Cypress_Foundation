describe('Contact US', () => {
    it('contact', () => {
        cy.visit('https://automationteststore.com/')
        cy.xpath('//a[normalize-space()="Contact Us"]').click()
        cy.xpath('//input[@id="ContactUsFrm_first_name"]').type('Pratik')
        cy.xpath('//input[@id="ContactUsFrm_email"]').type('pratikdnandan568@gmail.com')
        cy.xpath('//textarea[@id="ContactUsFrm_enquiry"]').type('Hello there i want to know more about your Business')
        cy.xpath('//button[@title="Submit"]').click()

        //assertion
        cy.xpath('//*[contains(text(),"successfully")]').should('have.text','Your enquiry has been successfully sent to the store owner!')




        
    });
});