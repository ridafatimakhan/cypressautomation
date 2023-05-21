//verifies the webpage
describe('Verify Homepage', () => {
    it('Visit the Bombay Live Product', () => {
    cy.visit('https://bombaylobby.com/')
  })
})
//here it finds the content 

describe('Finds content', () => {
  it('finds the content "desktop lobby"', () => {
    cy.visit('https://bombaylobby.com/')
    

    cy.contains('Desktop Lobby')
  })
  }) 

  // clicks desktop lobby
  describe('select desktop lobby', () => {
    it('finds the content "desktop lobby"', () => {
      cy.visit('https://bombaylobby.com/')
      
  
      cy.contains('Desktop Lobby')
      .click()
    })
    }) 
// generates nickname

   /* describe('Click on Desktop  Lobby', () => {
    it('finds the content "desktop lobby"', () => {
      cy.origin('https://demo.bombay.live')
     
      cy.contains('Desktop Lobby').click()

      cy.get('.generate-nickname-button').click()
      
    })
    })     
 */
    /*     describe('My First Test', () => {
          it('Gets, types and asserts', () => {
            cy.visit('https://bombaylobby.com/')
        
            cy.contains('Desktop Lobby').click()
        
            // Should be on a new URL which
            // includes '/commands/actions'
           // cy.url().should('include', '/operator/bombaydemo/bombay-live-lobby/fun')
        
            // Get an input, type into it
            cy.get('.username-popup').type('ridafatimakhan')
        
            //  Verify that the value has been updated
            cy.get('.username-popup').should('have.value', 'ridafatimakhan')
          })
        }) */
  