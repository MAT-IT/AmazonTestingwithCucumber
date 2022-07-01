import searchBox from "../integration/PageObjectRepository/searchBox"
Cypress.on('uncaught:exception', (err, runnable) => { //with this we can handle uncaught:exception in cypress
    return false;                                      //commands.js file'a alinabilir
  });

Cypress.Commands.add("goUrl",()=>{
    cy.visit("https://www.amazon.com/")
})

const search = new searchBox()

Cypress.Commands.add("searchBox",(input)=>{
    search.getsearchbar().click().wait(5000).type(input) 
})   

Cypress.Commands.add("searchBoxClick",()=>{
    search.getsubmitbutton().click()
})
