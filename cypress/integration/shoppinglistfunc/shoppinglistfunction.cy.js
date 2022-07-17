/// <reference types="cypress" />
import HomePage from "../PageObjectRepository/HomePage"
import searchresultpage from "../PageObjectRepository/searchresultpage"
import ShoppingListPage from "../PageObjectRepository/ShoppingListPAge"
const homepage = new HomePage()
const shoppingListPage = new ShoppingListPage()
const searchResultpage = new searchresultpage()

    // Given("create a shopping list",()=>{
    //     cy.goUrl()
    //     cy.SignIn()
    //     homepage.gethellomenu().trigger("mouseover").wait(5000)
    //     homepage.getcreateshoppinglistlink().click({force: true})
    //     shoppingListPage.getyourlistTab().should("have.contain","Your List")
    //     shoppingListPage.getcreateshoppingalistbuttom().click().wait(2000)
    //     shoppingListPage.getcreateshoppinglistnamebox().clear().wait(3000)
    //     shoppingListPage.getcreateshoppinglistnamebox().type("Grocery List")
    //     shoppingListPage.getcreatelistbutton().click({force: true})
    //     shoppingListPage.getmorebutton().trigger("mouseover").wait(4000)
    //     shoppingListPage.getmanagelist().click({force: true})
    //     shoppingListPage.getdeleteshoppinglistbutton().click({force: true})
    //     shoppingListPage.getshoppinglistdeletepopupconfirmation().should("have.contain","Confirm delete").wait(3000)
    //     shoppingListPage.getconfirmdelete().dblclick({force: true})

    // })

    Given("Add Product to Shopping  List and remove",()=>{
        cy.goUrl()
        cy.SignIn()
        homepage.gethellomenu().trigger("mouseover").wait(5000)
        homepage.getcreateshoppinglistlink().click({force: true})
        shoppingListPage.getyourlistTab().should("have.contain","Your List")
        shoppingListPage.getcreateshoppingalistbuttom().click().wait(2000)
        shoppingListPage.getcreateshoppinglistnamebox().clear().wait(3000)
        shoppingListPage.getcreateshoppinglistnamebox().type("Grocery List")
        shoppingListPage.getcreatelistbutton().click({force: true})
        cy.searchProduct("honey")
        //searchResultpage.productlist().eq(0).click()
        searchResultpage.productlist2().eq(0).click()
        searchResultpage.addtolistmenu().click()
        cy.contains("Grocery List").click()
        shoppingListPage.getitemdeletebutton().click({force: true})
        shoppingListPage.getitemdeleteconfirmation().should("be.visible")
      

    })


