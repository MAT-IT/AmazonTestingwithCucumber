class ShoppingListPage {

    getcreateshoppingalistbuttom(){
        return cy.get('.a-button-input')
    }

    getyourlistTab(){
        return cy.get('.a-tabs')
    }
    
    getcreateshoppinglistnamebox(){
        return cy.get('#list-name')
    }

    getcreatelistbutton(){
        return cy.get('#wl-redesigned-create-list > .a-button')
    }
    getmorebutton(){
        return cy.get('#overflow-menu-popover-trigger > :nth-child(2)')
    }

    getmanagelist(){
        return cy.get("#editYourList")
    }
   
    getdeleteshoppinglistbutton(){
        //return cy.get("div[id='list-settings-container'] span[class='a-button a-spacing-base a-button-base full-width-element']")
        return cy.contains("Delete")
    }
    
    getshoppinglistdeletepopupconfirmation(){
        return cy.get('#a-popover-header-3')
    }
    
    getconfirmdelete(){
        return cy.get("#list-delete-confirm input[name='submit.save']")
    }

    getitemdeletebutton(){
        return cy.contains('Delete')
    }
    
    getitemdeleteconfirmation(){
        return cy.contains('Deleted')
    }
}
 export default ShoppingListPage