/// <reference types="cypress" />
import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../PageObjectRepository/HomePage"

Then("get data from Fixtures", function () {
    cy.fixture("Data").then(
        function (data) {
            this.data = data
        }
    )
})
const homepage = new HomePage()
Given("Go to url", function () {
    cy.visit(this.data.url)
})

Given("advert links test verify", function () {
    homepage
            .getButtomAdvertisingLink().then(function (e) {
                const advtext = e.text().substring(7, 18).toLowerCase()
                cy.log(advtext)
                homepage
                    .getButtomAdvertisingLink().click()
                cy.url().should("contain", advtext)

            })

})

Given("business links test verify", function () {
    homepage
            .getButtomBusinessLink().then(function (e) {
                const bustext = e.text().substring(7, 15)
                cy.log(bustext)
                homepage
                    .getButtomBusinessLink().click()
                cy.title().should("contain", bustext)

            })
})

Given("box office links test verify", function () {
    homepage
            .getButtonBoxOfficeLink().then(function (e) {
                const bustext = e.text().substring(7, 15)
                cy.log(bustext)
                homepage
                    .getButtonBoxOfficeLink().click()
                cy.title().should("contain", bustext)

            })
})
