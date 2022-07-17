Feature:User should see that the second column of the links listed at the bottom of the home page navigate user to right pages

    Background: set up environment
        Then get data from Fixtures
        Given Go to url

    Scenario:click the advert link and verify
        Given advert links test verify
    Scenario:click the business link and verify
        Given business links test verify
    Scenario:click the box office link and verify
        Given box office links test verify