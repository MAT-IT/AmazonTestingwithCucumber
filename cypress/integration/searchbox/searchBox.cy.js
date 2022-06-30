/// <reference types="cypress" />
import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";

Given("Go to url",()=>{
    cy.goUrl()
})

Given("Enter Lenovo into search box",()=>{
    cy.searchBox("lenovo").wait(3000)
        
        
})

Given("Click the search button",()=>{
    cy.searchBoxClick()
        
})

Then("Verify that all the products listed includes Lenovo",()=>{
    cy.get("[class='a-size-mini a-spacing-none a-color-base s-line-clamp-2']").wait(5000)
        .should("contain.text","e")
})