describe('Login Funtionality', () => {
  it('success_login', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.product_label').should('be.visible')
    cy.get('.app_logo').should('be.visible')
    cy.get('.header_secondary_container').should('be.visible')
    cy.url().should('include','https://www.saucedemo.com/v1/inventory.html')

  })
  it('failed_wrong_username_login', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('[data-test="username"]').type('standard_xxx')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible')


  })
  it('failed_wrong_password_login', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_xxx')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible')


  })
  it('failed_username_password_login', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('[data-test="username"]').type('standard_xxx')
    cy.get('[data-test="password"]').type('secret_xxx')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible')

    })
    it('succes_filter_function', () => {
        cy.visit('https://www.saucedemo.com/v1/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.product_sort_container').select('Name (Z to A)')
        cy.get('.product_sort_container').select('Name (A to Z)')
    })


    it('add_product', () => {
        cy.visit('https://www.saucedemo.com/v1/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.product_label').should('be.visible')
        cy.get('.app_logo').should('be.visible')
        cy.get('.header_secondary_container').should('be.visible')
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
        cy.get('.fa-layers-counter').click()
        cy.get('.fa-layers-counter').should('be.visible')

    })  
    it('add_2_product', () => {
          cy.visit('https://www.saucedemo.com/v1/')
          cy.get('[data-test="username"]').type('standard_user')
          cy.get('[data-test="password"]').type('secret_sauce')
          cy.get('#login-button').click()
          cy.get('.product_label').should('be.visible')
          cy.get('.app_logo').should('be.visible')
          cy.get('.header_secondary_container').should('be.visible')
          cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
          cy.get(':nth-child(2) > .pricebar > .btn_primary').click()
          cy.get('.fa-layers-counter').click()
          cy.get('.fa-layers-counter').should('be.visible')


    })  
      it('add_3_product', () => {
              cy.visit('https://www.saucedemo.com/v1/')
              cy.get('[data-test="username"]').type('standard_user')
              cy.get('[data-test="password"]').type('secret_sauce')
              cy.get('#login-button').click()
              cy.get('.product_label').should('be.visible')
              cy.get('.app_logo').should('be.visible')
              cy.get('.header_secondary_container').should('be.visible')
              cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
              cy.get(':nth-child(2) > .pricebar > .btn_primary').click()
              cy.get(':nth-child(3) > .pricebar > .btn_primary').click()
              cy.get('.fa-layers-counter').click()
              cy.get('.fa-layers-counter').should('be.visible')

    })  
      it('remove_product_in_cart', () => {
              cy.visit('https://www.saucedemo.com/v1/')
              cy.get('[data-test="username"]').type('standard_user')
              cy.get('[data-test="password"]').type('secret_sauce')
              cy.get('#login-button').click()
              cy.get('.product_label').should('be.visible')
              cy.get('.app_logo').should('be.visible')
              cy.get('.header_secondary_container').should('be.visible')
              cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
              cy.get(':nth-child(2) > .pricebar > .btn_primary').click()
              cy.get(':nth-child(3) > .pricebar > .btn_primary').click()
              cy.get('.fa-layers-counter').click()
              cy.get('.fa-layers-counter').should('be.visible')
              cy.get(':nth-child(3) > .cart_item_label > .item_pricebar > .btn_secondary').click()
    })  
      it('checkuot_product_in_cart', () => {
              cy.visit('https://www.saucedemo.com/v1/')
              cy.get('[data-test="username"]').type('standard_user')
              cy.get('[data-test="password"]').type('secret_sauce')
              cy.get('#login-button').click()
              cy.get('.product_label').should('be.visible')
              cy.get('.app_logo').should('be.visible')
              cy.get('.header_secondary_container').should('be.visible')
              cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
              cy.get(':nth-child(2) > .pricebar > .btn_primary').click()
              cy.get(':nth-child(3) > .pricebar > .btn_primary').click()
              cy.get('.fa-layers-counter').click()
              cy.get('.fa-layers-counter').should('be.visible')
              cy.get('.btn_action').click()    

        

      


  })




})