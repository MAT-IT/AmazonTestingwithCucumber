/// <reference types="cypress" />
import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";

Given("Go to url",()=>{
    cy.goUrl()
})

Given("Select All menu",()=>{
    cy.get('#nav-hamburger-menu').click()
        
})

Given("Select Smart Home department",()=>{
    cy.get('.hmenu-visible > :nth-child(9) > .hmenu-item').click()
        
})

Then("Verify the sub-categories of the Smart Home department are listed",()=>{
    cy.get('ul[data-menu-id="7" ] a[class="hmenu-item"]').should("have.length","16")
})