describe('Login Tests', function() {
  it('Does not log in with invalid password', () => {
    cy.visit('/');
    cy.contains('button', 'INGRESAR').click();
    /* TODO: cambiar el usuario y contraseña */
    const username = 'asd';
    const password = 'asdasd';
    cy.get('input[name=username]').type(username);
    // {enter} causes the form to submit
    cy.get('input[name=password]').type(`${password}{enter}`);
    cy.contains('.mat-simple-snackbar', 'Error inesperado al intentar iniciar sesión.').should('be.visible');
    cy.contains('button', 'INGRESAR').should('be.visible');
  });

  it('successfully login', function() {
    cy.visit('/');
    cy.contains('button', 'INGRESAR').click();
    /* TODO: cambiar el usuario y contraseña */
    const username = 'asd';
    const password = 'asdasd';
    cy.get('input[name=username]').type(username);
    cy.get('input[name=password]').type(`${password}{enter}`);
    cy.contains('mat-icon', 'account_circle')
      .should('be.visible')
      .then(() => {
        /* global window */
        const userString = window.localStorage.getItem('identity');
        const token = window.localStorage.getItem('token');
        expect(userString).to.be.a('string');
        expect(token).to.be.a('string');
        const user = JSON.parse(userString);
        expect(user).to.be.an('object');
        expect(user).to.have.keys(['id', 'username', 'firstName', 'lastName']);
      });
  });
});
