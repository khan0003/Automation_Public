///<reference types="cypress" /> 

import Inventory from '../POMs/Inventory'

const inv = new Inventory()

describe('Inventory', () => {

  beforeEach( "Login to Swaglabs" , function () {
    
        inv.homePageURL()
        cy.location('href').should('contain', 'inventory')
    })

    it('Verifying Inventory page' , () => {
        cy.url().should('include', 'https://www.saucedemo.com/inventory.html')
        cy.get(".title").should('have.text', 'Products')
    
    })

    it('Selecting product' , () => {

      inv.selectProduct()
      cy.get(".inventory_details_name").should('be.visible')
      cy.get(".inventory_details_desc").should('be.visible')
      cy.get(".inventory_details_price").should('be.visible')
    })

    it("Adding to cart" , () => {

      inv.addtoCart()
      cy.get(".shopping_cart_badge").should('have.text', '1')
    })

    it("Removing the added product" , () => {

      inv.removeProduct()
      cy.get(".shopping_cart_badge").should('not.exist')
    })

    it("Checking functionality of back button" , () => {
      inv.backButton()
      cy.get(".title").should('have.text', 'Products')
    })

    it("Verifying the count increase in Cart" , () => {

      inv.countIncrease()
      cy.get(".shopping_cart_badge").should('have.text', '2')
    })

    it("Verifying the decrease in count in Cart" , () => {

      inv.countDecrease()
      cy.get(".shopping_cart_badge").should('not.exist')
    })
    
  })

  

