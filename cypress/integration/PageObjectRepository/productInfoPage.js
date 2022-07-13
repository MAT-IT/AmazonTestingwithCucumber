class productInfoPage {
    addchart(){
    return cy.get('#add-to-cart-button')
    }

    productprice(){
        return cy.get('#corePrice_feature_div .a-offscreen')
    }

    gotocart(){
        return cy.get('#sw-gtc .a-button-text')

    }
    
    getcartproductname(){
        return   cy.get("span[class='a-truncate a-size-medium'] span[class='a-truncate-full a-offscreen']")
    }
    //addtoshoppinglistmenu
    addtolistmenu(){
        return cy.get('#add-to-wishlist-button-submit')
    }

   
}
export default productInfoPage