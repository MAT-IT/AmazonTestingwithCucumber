class signInPage {

    hellomenu(){
        return cy.get('#nav-link-accountList')
    }
    
    signin(){
        return cy.get('#nav-flyout-ya-signin > .nav-action-button > .nav-action-inner')
        
    }

    email(){
        return cy.get('#ap_email')
    }

    emailButton(){
        return cy.get('.a-button-inner > #continue')
    }

    password(){
        return cy.get('#ap_password')
    }

    submit(){
        return cy.get('#signInSubmit')
    }

    validassert(){
        return cy.get('#nav-link-accountList-nav-line-1')
    }

    invalidassert(){
        return cy.get('.a-alert-heading')
    }
}
export default signInPage