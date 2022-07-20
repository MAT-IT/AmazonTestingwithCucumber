Feature: User should be able to access the Amazon.com page

    Background: set up fixture data
        Then get data from Fixtures
    @focus
    Scenario: User should be able to go to Amazon website
        Given Go to url
        # Then Verify Amazon logo is visible
        Then Verify title contains Amazon



