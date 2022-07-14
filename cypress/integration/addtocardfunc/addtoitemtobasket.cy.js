/// <reference types="cypress" />
import productInfoPage from "../PageObjectRepository/productInfoPage";
import searchresultpage from "../PageObjectRepository/searchresultpage";
import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";
const search = new searchresultpage()
const productinfo = new productInfoPage()

Then("get data from Fixtures", function () {
    cy.fixture("Data").then(
        function (data) {
            this.data = data
        }
    )
})

Given("Go to url",()=>{
    cy.visit(this.data.url) 
})

