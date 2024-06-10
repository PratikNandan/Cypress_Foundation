
import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"

Given('Open the browser and URL',()=>{
    cy.visit('https://v1.training-support.net/selenium/simple-form')

})

When('User enters First Name',()=>{
    cy.get('#firstName').type('Pratik')

})

And('User enters Last Name',()=>{
    cy.get('#lastName').type('Nandan')



})

And('User enters Email',()=>{
    cy.get('#email').type('pratik@gmail.com')

})

And('User enters Contact No',()=>{
    cy.get('#number').type('8523652145')

})

And('User enters Message',()=>{
    cy.xpath('//div[@class="field"]//textarea').type('Hello How are You')

})

And('Click Submit',()=>{
    cy.xpath('//input[@type="submit"]').click()

})

Then('Alert Message should be displayed',()=>{

    cy.on("window:alert",(msg)=>{
            expect(msg).to.eq('Thank You for reaching out to us, Pratik Nandan')
            return true;
    })

})
