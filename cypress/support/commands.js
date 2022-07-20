import HomePage from "../integration/PageObjectRepository/HomePage"
import signInPage from "../integration/PageObjectRepository/signInPAge"
Cypress.on('uncaught:exception', (err, runnable) => { //with this we can handle uncaught:exception in cypress
  return false;                                      //commands.js file'a alinabilir
});
const homepage = new HomePage()
const sign = new signInPage()
beforeEach(function(){        
  cy.fixture("Data").then(
      function(data){
          this.data=data
      }            
  )
})

Cypress.Commands.add("goUrl", function() {
  cy.visit(this.data.url)
})

Cypress.Commands.add("searchProduct", function (input)  {
  homepage.getsearchbar().click({force: true}).parent().type(input)
  homepage.getsearchsubmitbutton().click()
})

Cypress.Commands.add("SignIn", function () {
  homepage.hellomenu().trigger("mouseover")
  homepage.signin().click({force: true})
  sign.getemailbox().type(this.data.email)
  sign.emailButton().click()
  sign.getpasswordbox().type(this.data.password)
  sign.getloginsubmitbutton().click()
  
})
