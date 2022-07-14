Feature: User should be able to login with valid credentials, and unable with invalid credentials
 
    Background: set up environment
        Then get data from Fixtures
        Given Go to url
        And Navigate to sign in page

    Scenario: User should be able to sign in with valid credentials        
        And Enter valid email address to the email box
        And Click continue button
        And Enter valid password to the password box
        And Click sign-in button
        Then Verify sign in is successful
    
    Scenario: User should not be able to sign in with valid credentials
        And Enter invalid email address to the email box
        And Click continue button
        Then Verify sign in is not successful
       
        


