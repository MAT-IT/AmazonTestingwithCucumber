class searchBox {

    getsearchbar(){
        return cy.get('#twotabsearchtextbox')
    }

    getsubmitbutton(){
        return cy.get('#nav-search-submit-button')
    }

}
 export default searchBox