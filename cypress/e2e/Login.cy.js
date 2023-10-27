///<reference types="cypress" /> 

import Login from '../POMs/LoginPage'

const Li = new Login()

describe('Swag Labs Login Scenarios', () => {

  beforeEach( function () {

    cy.visit("https://www.saucedemo.com/")

  })

    it("Login with valid Credentials", () => {
    cy.fixture('Fix1').then((fixvar) => {

    Li.setUserName(fixvar.username)
    Li.setPassword(fixvar.password)
    Li.clickLogin()
    Li.verifyLogin()
    })
  })
  

  it('Login with invalid username and valid password', function () {
    cy.fixture('Fix1').then((fixvar) => {
    Li.setUserName(fixvar.invalidUsername)
    Li.setPassword(fixvar.password)
    Li.clickLogin()
  })
})


  it('Login with valid username and invalid password', function () {
    cy.fixture('Fix1').then((fixvar) => {
    Li.setUserName(fixvar.username)
    Li.setPassword(fixvar.invalidPassword)
    Li.clickLogin()
  })
})
  

  it('Login with valid username and invalid password', function () {
    cy.fixture('Fix1').then((fixvar) => {
    Li.setUserName(fixvar.invalidUsername)
    Li.setPassword(fixvar.invalidPassword)
    Li.clickLogin()
  })
})


  it('Login with empty username and password', function () {
    Li.clickLogin()
  })

  
  it('Login with valid username and empty password', function () {
    cy.fixture('Fix1').then((fixvar) => {
    Li.setUserName(fixvar.username)
    Li.clickLogin()
  })
})

  
it('Login with valid username and empty password', function () {
  cy.fixture('Fix1').then((fixvar) => {
  Li.setUserName(fixvar.password)
  Li.clickLogin()
})
})
})