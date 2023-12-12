///<reference types="cypress" /> 

import Cart from '../POMs/AddtoCart'

const atc = new Cart()

describe('Add to Cart', () => {

  beforeEach( "Login to Swaglabs" , function () {
    
        atc.homePageURL()
        cy.location('href').should('contain', 'inventory')

        atc.addingItems()
    })

    it('Verifying the items in Cart' , () => {
        
        atc.verifyCartitems()
        
    })

    it('Removing the items from Cart' , () => {

        atc.removeItems()
        cy.get(".cart_item").should('not.exist')
    })

    it('Checking the functionality of Continue Shopping Button' , () => {

        atc.continueShoppingbtn()
        cy.get(".title").should('have.text', 'Products')
    })

    it('Checking the functionality of Checkout' , () => {

        atc.checkOut()
        cy.get(".title").should('have.text', 'Checkout: Your Information')
    })

})