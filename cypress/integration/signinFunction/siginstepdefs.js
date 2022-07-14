/// <reference types="cypress" />
import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../PageObjectRepository/HomePage"
import signInPage from "../PageObjectRepository/signInPAge"
Then("get data from Fixtures", function () {
    cy.fixture("Data").then(
        function (data) {
            this.data = data
        }
    )
})
const homepage = new HomePage()
const sign = new signInPage()
Given("Go to url", function () {
    cy.visit(this.data.url)
})

Given("Navigate to sign in page", () => {
    homepage.hellomenu().trigger("mouseover")
    homepage.signin().click({ force: true })
})

Given("Enter valid email address to the email box",function() {
    sign.getemailbox().type(this.data.email)
})
Given("Click continue button", () => {
    sign.emailButton().click()
})
Given("Enter valid password to the password box", function() {
    sign.getpasswordbox().type(this.data.password)
})
Given("Click sign-in button", () => {
    sign.getloginsubmitbutton().click()
})
Given("Verify sign in is successful", () => {
    sign.verifysignin().should("contain.text", "mat")
})
Given("Enter invalid email address to the email box", function() {
    sign.getemailbox().type(this.data.invalidemail)
})
Given("Verify sign in is not successful", function() {
    sign.getproblemmessage().should("have.text","There was a problem")
})



