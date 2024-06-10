class Links{
  clicklink(link){

    cy.contains(link).click();
    

  }  

}

export default Links;