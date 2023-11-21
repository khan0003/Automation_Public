
import Login from '../POMs/LoginPage'
const Li = new Login()

class Inventory {
    homePageURL() {

        cy.visit('/') 
            cy.fixture('Fix1').then((fixvar) => {
              
                  Li.setUserName(fixvar.username)
                  Li.setPassword(fixvar.password)
                  Li.clickLogin()
                  Li.verifyLogin()
                  })
    }

    selectProduct() {

        cy.get("#item_4_title_link").click()
        cy.get(".inventory_details_name").should('be.visible')
        cy.get(".inventory_details_desc").should('be.visible')
        cy.get(".inventory_details_price").should('be.visible')
    }
    
    addtoCart() {

        cy.get("#item_4_title_link").click()
        cy.get("#add-to-cart-sauce-labs-backpack").click()
        cy.get(".shopping_cart_badge").should('have.text', '1')

    }

    removeProduct() {

        cy.get("#item_4_title_link").click()
        cy.get("#add-to-cart-sauce-labs-backpack").click()
        cy.get("#remove-sauce-labs-backpack").click()
        cy.get(".shopping_cart_badge").should('not.exist')
    }
    
    backButton() {

        cy.get("#item_4_title_link").click()
        cy.get("#back-to-products").click()
        cy.get(".title").should('have.text', 'Products')
    }

    countIncrease() {

        cy.get("#add-to-cart-sauce-labs-backpack").click()
        cy.get("#add-to-cart-sauce-labs-bike-light").click()
        cy.get(".shopping_cart_badge").should('have.text', '2')
    }

    countDecrease() {

        cy.get("#add-to-cart-sauce-labs-backpack").click()
        cy.get("#remove-sauce-labs-backpack").click()
        cy.get(".shopping_cart_badge").should('not.exist')
    }
    

}

export default Inventory