describe('Login Tests', () => {
  it('does not log in with invalid password', () => {
    cy.visit('/');
    cy.contains('button', 'INGRESAR').click();
    const username = 'lbrumpton0';
    const password = 'asdasd';
    cy.get('input[name=username]').type(username);
    // {enter} causes the form to submit
    cy.get('input[name=password]').type(`${password}{enter}`);
    cy.contains(
      '.mat-simple-snackbar',
      'Usuario o contraseña incorrecto!'
    ).should('be.visible');
    cy.contains('button', 'INGRESAR').should('be.visible');
  });

  it('successfully login', () => {
    cy.visit('/');
    cy.contains('button', 'INGRESAR').click();
    const username = 'lbrumpton0';
    const password = 'BrLFJha';
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
        expect(user).to.have.keys([
          'id',
          'name',
          'lastName',
          'userName',
          'email',
          'avatar'
        ]);
      });
  });
});
