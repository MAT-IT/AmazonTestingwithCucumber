Feature:User should see each search result includes the relative product name
    Scenario:User should verify that all the products listed include Lenovo 
     Given Go to url
     And Enter "Lenovo" into search box
     And Click the search button
     Then Verify that all the products listed includes "Lenovo"
     



