
import Login from '../POMs/LoginPage'
const Li = new Login()

class Cart {
    homePageURL() {

        cy.visit('/') 
            cy.fixture('Fix1').then((fixvar) => {
              
                  Li.setUserName(fixvar.username)
                  Li.setPassword(fixvar.password)
                  Li.clickLogin()
                  Li.verifyLogin()
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
        cy.get(".cart_item").should('not.exist')
    }

    continueShoppingbtn() {
        cy.get("#continue-shopping").click()
        cy.get(".title").should('have.text', 'Products')
  }

     checkOut() {
        cy.get("#checkout").click()
        cy.get(".title",).should('have.text', 'Checkout: Your Information')
  }

}

export default Cart