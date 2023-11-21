///<reference types="cypress" /> 

import Cart from '../POMs/AddtoCart'

const atc = new Cart()

describe('Add to Cart', () => {

  beforeEach( "Login to Swaglabs" , function () {
    
        atc.homePageURL()
        atc.addingItems()
    })

    it('Verifying the items in Cart' , () => {
        
        atc.verifyCartitems()
    })

    it('Removing the items from Cart' , () => {

        atc.removeItems()
    })

    it('Checking the functionality of Continue Shopping Button' , () => {

        atc.continueShoppingbtn()
    })

    it('Checking the functionality of Checkout' , () => {

        atc.checkOut()
    })

})