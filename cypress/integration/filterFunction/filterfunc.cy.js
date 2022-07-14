/// <reference types="cypress" />
import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";
import searchresultpage from "../PageObjectRepository/searchresultpage";
const searchresult = new searchresultpage()
Given("go to url",()=>{
    cy.goUrl()
})

Given("type {string} into search box and click",(productname)=>{
    cy.searchProduct(productname).wait(3000)        
        
})

Given("select sony brand from featured brands section",()=>{
    searchresult.getbrandsony().click({force: true})

})


Then("verify all products contain {string}",(productname)=>{
    searchresult.productlist()
         .then(function(item) { 
            const  itemCount = Cypress.$(item).length;
             cy.log(itemCount)
             for(var i=0; i<itemCount; i++){
                searchresult.productlist()
                 .eq(i).should(productText => expect(productText.text().toLowerCase()).to.contain('sony'));
                
             }
        })
})

