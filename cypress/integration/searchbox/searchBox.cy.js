/// <reference types="cypress" />
import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";

Given("Go to url",()=>{
    cy.goUrl()
})

Given("Enter {string} into search box",(productname)=>{
    cy.searchBox(productname).wait(3000)        
        
})

Given("Click the search button",()=>{
    cy.searchBoxClick()
        
})

Then("Verify that all the products listed includes {string}",(productname)=>{
    cy.get("[class='a-size-mini a-spacing-none a-color-base s-line-clamp-2']")
         .then(function(item) { 
            const  itemCount = Cypress.$(item).length;
             cy.log(itemCount)
             for(var i=0; i<itemCount; i++){
                 cy.get("[class='a-size-mini a-spacing-none a-color-base s-line-clamp-2']")
                 .eq(i).should('contain.text',productname)
                
             }
        })
})

