///<reference types="cypress" /> 

import Inventory from '../POMs/Inventory'

const inv = new Inventory()

describe('Inventory', () => {

  beforeEach( "Login to Swaglabs" , function () {
    
        inv.homePageURL()
    })

    it('Verifying Inventory page' , () => {
        cy.url().should('include', 'https://www.saucedemo.com/inventory.html')
        cy.get(".title").should('have.text', 'Products')
    
    })

    it('Selecting product' , () => {

      inv.selectProduct()
    })

    it("Adding to cart" , () => {

      inv.addtoCart()
    })

    it("Removing the added product" , () => {

      inv.removeProduct()
    })


    it("Verifying multiple item in Cart" , () => {

      inv.backButton()
    })

    it("verifying the count in Cart" , () => {

      inv.countIncrease()
    })

    it("Verifying the decrease in count in Cart" , () => {

      inv.countDecrease()
    })

    
  })

  

