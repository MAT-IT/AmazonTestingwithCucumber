Feature:User should see the total price of all added products appear same as in the basket

    Background: set up environment
        * get data from Fixtures
        * Go to url
    
    Scenario:User should verify that total price of the proucts added to the basket is correct
        And Enter "keyboard" into search box and click
        And add two product to the basket
        And Verify the products are added successfully
        Then Verify the subtotal is correct