import searchBox from "../integration/PageObjectRepository/searchBox"

Cypress.Commands.add("goUrl",()=>{
    cy.visit("https://www.amazon.com/")
})

const search = new searchBox()

Cypress.Commands.add("searchBox",(input)=>{
    search.getsearchbar().type(input) 
})   

Cypress.Commands.add("searchBoxClick",()=>{
    search.getsubmitbutton().click()
})
