
import Login from '../POMs/LoginPage'
const Li = new Login()

class Cart {
    homePageURL() {

        cy.visit('/') 
            cy.fixture('Fix1').then((fixvar) => {
              
                  Li.setUserName(fixvar[0].username)
                  Li.setPassword(fixvar[0].password)
                  Li.clickLogin()              
                  })
    }

    addingItems() {

        cy.get("#add-to-cart-sauce-labs-backpack").click()
        cy.get(".shopping_cart_link").click()
    }

    verifyCartitems() {
        cy.url().should('include', 'https://www.saucedemo.com/cart.html')
        cy.get(".title").should('have.text', 'Your Cart')
  }

    removeItems() {

        cy.get("#remove-sauce-labs-backpack").click()
        
    }

    continueShoppingbtn() {
        cy.get("#continue-shopping").click()
        
  }

     checkOut() {
        cy.get("#checkout").click()
        
  }

}

export default Cart