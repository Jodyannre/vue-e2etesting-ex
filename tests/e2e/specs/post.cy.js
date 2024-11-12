describe('post test features',()=>{
    beforeEach(()=>{
        cy.login("correo@correo.com","123456")
        cy.url().should('eq','http://localhost:8080/')
    }),
    it('Logged user can access to page posts and view the post list', ()=>{
        
        cy.contains('h1','Posts')
        cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
    })
    it('Logged user can access to detail post view',()=>{
        cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit').click()
        cy.url().should('eq','http://localhost:8080/detail/1')
        cy.contains('quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto')

    })
    it('Logged user can go back from detail post view',()=>{
        cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit').click()
        cy.url().should('eq','http://localhost:8080/detail/1')
        cy.contains('quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto')
        cy.get('.link').click()
        cy.url().should('eq','http://localhost:8080/')
        cy.contains('H1','Home')
    })
})


//Con beforeEach que se ejecuta antes de cada test

/*
describe('post test features',()=>{
    beforeEach(()=>{
        cy.visit('/login')
        cy.get('#email').type('correo@correo.com')
        cy.get('#password').type('123456')
        cy.contains('button','Login').click()
        cy.url().should('eq','http://localhost:8080/')
    }),
    it('Logged user can access to page posts and view the post list', ()=>{
        
        cy.contains('h1','Posts')
        cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
    })
    it('Logged user can access to detail post view',()=>{
        cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit').click()
        cy.url().should('eq','http://localhost:8080/detail/1')
        cy.contains('quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto')

    })
    it('Logged user can go back from detail post view',()=>{
        cy.contains('sunt aut facere repellat provident occaecati excepturi optio reprehenderit').click()
        cy.url().should('eq','http://localhost:8080/detail/1')
        cy.contains('quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto')
        cy.get('.link').click()
        cy.url().should('eq','http://localhost:8080/')
        cy.contains('H1','Home')
    })
})
  */