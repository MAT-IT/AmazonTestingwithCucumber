class searchresultpage {
    productlist(){
        return cy.get("div[class='sg-col sg-col-4-of-12 sg-col-8-of-16 sg-col-12-of-20 s-list-col-right'] span[class='a-size-medium a-color-base a-text-normal']")
        
    }
    productlist2(){
        return cy.get("h2 a span[class='a-size-base-plus a-color-base a-text-normal']")
    }

    getbrandsony(){
        return cy.get("li[id='p_89/Sony'] input[type='checkbox']")
    }

    subtotal(){
        return cy.get("#sc-subtotal-amount-buybox span")

    }
    addtolistmenu(){
        return cy.get('#add-to-wishlist-button-submit')
     }
}
export default searchresultpage