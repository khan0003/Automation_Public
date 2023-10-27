
class Login {

  setUserName(username)
  {
      cy.get('#user-name').type(username)
  }

  setPassword(password)
    {
        cy.get('#password').type(password)
    }

    clickLogin()
    {
        cy.get('#login-button').click()
    }

    verifyLogin()
    {
        cy.location('href').should('contain', 'inventory')
    }

}

export default Login;