class signInPage {
    getemailbox(){
        return cy.get('#ap_email')
    }
    
    emailButton(){
        return cy.get('.a-button-inner > #continue')
    }
    
    getpasswordbox(){
        return cy.get('#ap_password')
    }
    
    getloginsubmitbutton(){
        return cy.get('#signInSubmit')
    }
    
    verifysignin(){
        return cy.get('#nav-link-accountList-nav-line-1')
    }
    
    getproblemmessage(){
        return cy.get('.a-alert-heading')
    }
}
export default signInPage