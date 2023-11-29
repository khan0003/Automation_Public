
import Login from '../POMs/LoginPage'
const Li = new Login()

class Inventory {
    homePageURL() {

        cy.visit('/') 
            cy.fixture('Fix1').then((fixvar) => {
              
                  Li.setUserName(fixvar[0].username)
                  Li.setPassword(fixvar[0].password)
                  Li.clickLogin()              
                  })
    }

    selectProduct() {

        cy.get("#item_4_title_link").click()
        
    }
    
    addtoCart() {

        cy.get("#item_4_title_link").click()
        cy.get("#add-to-cart-sauce-labs-backpack").click()
        
    }

    removeProduct() {

        cy.get("#item_4_title_link").click()
        cy.get("#add-to-cart-sauce-labs-backpack").click()
        cy.get("#remove-sauce-labs-backpack").click()
        
    }
    
    backButton() {

        cy.get("#item_4_title_link").click()
        cy.get("#back-to-products").click()
        
    }

    countIncrease() {

        cy.get("#add-to-cart-sauce-labs-backpack").click()
        cy.get("#add-to-cart-sauce-labs-bike-light").click()
        
    }

    countDecrease() {

        cy.get("#add-to-cart-sauce-labs-backpack").click()
        cy.get("#remove-sauce-labs-backpack").click()
        
    }
    

}

export default Inventory