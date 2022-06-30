/// <reference types="cypress" />
import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";
import signInPage from "../PageObjectRepository/signInPAge"
Then("get data from Fixtures", function () {
    cy.fixture("homepage").then(
        function (data) {
            this.data = data
        }
    )
})
const sign = new signInPage()
Given("Go to url", function () {
    cy.visit(this.data.url)
})

Given("Navigate to sign in page", () => {
    sign.hellomenu().trigger("mouseover")
    sign.signin().click({ force: true })
})

Given("Enter valid email address to the email box",function() {
    sign.email().type(this.data.email)
})
Given("Click continue button", () => {
    sign.emailButton().click()
})
Given("Enter valid password to the password box", function() {
    sign.password().type(this.data.password)
})
Given("Click sign-in button", () => {
    sign.submit().click()
})
Given("Verify sign in is successful", () => {
    sign.validassert().should("contain.text", "mat")
})
Given("Enter invalid email address to the email box", function() {
    sign.email().type(this.data.invalidemail)
})
Given("Verify sign in is not successful", function() {
    sign.invalidassert().should("have.text","There was a problem")
})



