Feature:User should see the products are sorted by brand name
    Scenario:User should verify that all the products are "Sony"
        Given go to url
        And type "Headphones" into search box and click
        And select sony brand from featured brands section
        Then verify all products contain "sony"