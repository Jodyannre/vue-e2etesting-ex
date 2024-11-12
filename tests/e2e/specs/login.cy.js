describe('login test features',()=>{
  it('User cant access to protected rutes',()=>{
      cy.visit('/')
      cy.url().then((url) => {
        cy.log('Current URL is: ' + url)
      })
      cy.url().should('eq','http://localhost:8080/login')
  })

  it('user with wrong credentials', ()=>{
      cy.login("email@email.com","123456")
      cy.contains('p','Wrong email or password')
      cy.visit('/')
      cy.url().should('eq','http://localhost:8080/login')
  })

  it('User can sucessfully login',()=>{
      cy.login("correo@correo.com","123456")
      cy.url().should('eq','http://localhost:8080/')
  })

})

