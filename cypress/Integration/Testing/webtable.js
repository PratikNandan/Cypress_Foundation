describe('Web Table', () => {
    it.skip('Jmeter and Appium', () => {                  //appium //table[@class='table-display']/tbody/tr[4]/td[2]
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //cy.xpath('//table[@class="table-display"]/tbody/tr[4]/td[2]').click()  //appium
        cy.xpath('//table[@class="table-display"]/tbody/tr[6]/td[2]') //jmeter
    
    });


    it.skip('Ronaldo and city', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.xpath('//div[@class="tableFixHead"]/table/tbody/tr[8]/td[1]').should('contain.text','Ronaldo')   //ronaldo
        //cy.xpath('//div[@class="tableFixHead"]/table/tbody/tr[8]/td[3]')   //city
        cy.wait(10000)

        
    });

    it.skip('new', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath('//table[@class="table-display"]/tbody/tr[9]/td')

    });

    it('alert', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.xpath('//input[@id="alertbtn"]').click
        cy.on("window:alert"),(msg)=>{
            expect(msg).to.eq('Hello , share this practice page and share your knowledge')
            return true;
    )}

        
        
    });


