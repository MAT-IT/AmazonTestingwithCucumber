/// <reference types="cypress" />
import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../PageObjectRepository/HomePage"
const AllMenu = new HomePage()
Given("Go to url",()=>{
    cy.goUrl()
})

Given("Select All menu",()=>{
    AllMenu.getAllMenu().click()
        
})

Given("Select Smart Home department",()=>{
    AllMenu.getSmarthomelink().click()
        
})

Then("Verify the sub-categories of the Smart Home department are listed",()=>{
    AllMenu.getSmartHomesubCategories().should("have.length","16")
})