/// <reference types="cypress" />
import { Given,And,Then } from "cypress-cucumber-preprocessor/steps";
Then("get data from Fixtures",function(){
    cy.fixture("homepage").then(
        function(data){
            this.data=data
        }
    )
})

Given("Go to url",function(){
    cy.visit(this.data.url)
})
Given("Verify Amazon logo is visible",()=>{
    cy.get('#nav-logo-sprites').should("be.visible")
       
})
Given("Verify title contains Amazon",()=>{
    cy.title().should("contain","Amazon")
})