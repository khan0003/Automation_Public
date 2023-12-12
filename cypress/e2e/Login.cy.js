///<reference types="cypress" /> 

import Login from '../POMs/LoginPage'

const Li = new Login()

describe('Swag Labs Login Scenarios', () => {

  beforeEach( function () {

    cy.visit("/")

  })

    it("Login with valid Credentials", () => {
    cy.fixture('Fix1').then((fixvar) => {

    Li.setUserName(fixvar[0].username)
    Li.setPassword(fixvar[0].password)
    Li.clickLogin()
    cy.location('href').should('contain', 'inventory')
    })
  })
  

  it('Login with invalid username and valid password', function () {
    cy.fixture('Fix1').then((fixvar) => {
    Li.setUserName(fixvar[1].invalidUsername)
    Li.setPassword(fixvar[0].password)
    Li.clickLogin()
  })
})


  it('Login with valid username and invalid password', function () {
    cy.fixture('Fix1').then((fixvar) => {
    Li.setUserName(fixvar[0].username)
    Li.setPassword(fixvar[1].invalidPassword)
    Li.clickLogin()
  })
})
  

  it('Login with valid username and invalid password', function () {
    cy.fixture('Fix1').then((fixvar) => {
    Li.setUserName(fixvar[1].invalidUsername)
    Li.setPassword(fixvar[1].invalidPassword)
    Li.clickLogin()
  })
})


  it('Login with empty username and password', function () {
    Li.clickLogin()
  })

  
  it('Login with valid username and empty password', function () {
    cy.fixture('Fix1').then((fixvar) => {
    Li.setUserName(fixvar[0].username)
    Li.clickLogin()
  })
})

  
  after('Login with valid password and empty username', function () {
  cy.fixture('Fix1').then((fixvar) => {
  Li.setPassword(fixvar[0].password)
  Li.clickLogin()
})
})
})