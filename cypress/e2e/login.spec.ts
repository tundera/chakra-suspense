describe('authentication tests', () => {
  afterEach(() => {})

  it('should allow you to log in', () => {
    cy.visit('/')

    cy.findByText('Log in to your account')
  })
})
