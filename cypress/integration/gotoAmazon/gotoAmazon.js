/// <reference types="cypress" />
import { Given,And,Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../PageObjectRepository/HomePage"
const homepage = new HomePage()
Then("get data from Fixtures",function(){
    cy.fixture("Data").then(
        function(data){
            this.data=data
        }
    )
})

Given("Go to url",function(){
    cy.visit(this.data.url)
})
Given("Verify Amazon logo is visible",()=>{
    homepage.getamazonLogo.should("be.visible")
       
})
Given("Verify title contains Amazon",()=>{
    cy.title().should("contain","Amazon")
})