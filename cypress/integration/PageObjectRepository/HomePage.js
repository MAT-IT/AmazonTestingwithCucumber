class HomePage {
    hellomenu(){
        return cy.get('#nav-link-accountList')
    }

    signin(){
        return cy.get('#nav-flyout-ya-signin > .nav-action-button > .nav-action-inner')
        
    }

    getamazonLogo(){
        return cy.get('#nav-logo-sprites')
    }

    getsearchbar(){
        return cy.get('#twotabsearchtextbox')
    }
    
    getsearchsubmitbutton(){
        return cy.get('#nav-search-submit-button')
    }

    getAllMenu(){
        return cy.get("div[class='nav-left'] a[id='nav-hamburger-menu']")
    }
    
    getSmarthomelink(){
        return cy.get('.hmenu-visible > :nth-child(9) > .hmenu-item')
    }
    
    getSmartHomesubCategories(){
        return cy.get('ul[data-menu-id="7" ] a[class="hmenu-item"]')
    }

    getButtomAdvertisingLink(){
        return cy.get('tbody > :nth-child(1) > :nth-child(3) > .nav_a')
    }

    getButtomBusinessLink(){
        return cy.get(':nth-child(3) > :nth-child(3) > .nav_a')
    }

    getButtonBoxOfficeLink(){
        return cy.get(':nth-child(5) > :nth-child(3) > .nav_a')
    }
    gethellomenu(){
        return cy.get('#nav-link-accountList')
    }
    getcreateshoppinglistlink(){
        return cy.get('[href="/hz/wishlist/ls?triggerElementID=createList&ref_=nav_ListFlyout_navFlyout_createList_lv_redirect"] > .nav-text')
    }
   
}
 export default HomePage