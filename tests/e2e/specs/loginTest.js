describe('login test features',()=>{
  it('User cant access to protected rutes',()=>{
      cy.visit('/')
      cy.url().then((url) => {
        cy.log('Current URL is: ' + url)
      })
      cy.url().should('eq','http://localhost:8080/login')
  })

  it('user with wrong credentials', ()=>{
      cy.visit('/login')
      cy.get('#email').type('email@email.com')
      cy.get('#password').type('123456')
      cy.get('button').click()
      cy.contains('p','Wrong email or password')
      cy.visit('/')
      cy.url().should('eq','http://localhost:8080/login')
  })

  it('User can sucessfully login',()=>{
      cy.visit('/login')
      cy.get('#email').type('correo@correo.com')
      cy.get('#password').type('123456')
      cy.contains('button','Login').click()
      cy.url().should('eq','http://localhost:8080/')
  })

})