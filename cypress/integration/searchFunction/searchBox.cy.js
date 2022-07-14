/// <reference types="cypress" />
import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";
import searchresultpage from "../PageObjectRepository/searchresultpage";
const searchresult = new searchresultpage()
Given("Go to url",()=>{
    cy.goUrl()
})

Given("Enter {string} into search box and click",(productname)=>{
    cy.searchProduct(productname).wait(3000)        
        
})


Then("Verify that all the products listed includes {string}",(productname)=>{
    searchresult.productlist()
         .then(function(item) { 
            const  itemCount = Cypress.$(item).length;
             cy.log(itemCount)
             for(var i=0; i<itemCount; i++){
                searchresult.productlist()
                 .eq(i).should('contain.text',productname)
                
             }
        })
})

