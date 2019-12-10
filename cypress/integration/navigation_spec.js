describe('Navigation Tests', () => {
  beforeEach(() => {
  //  cy.request({
  //    method: 'POST',
  //    url: 'http://localhost:1337/login',
  //    form: true,
  //    body: {
  //      username: 'lbrumpton0',
  //      password: 'BrLFJha'
  //    }
  //  });
    cy.visit('/');
      cy.contains('button', 'INGRESAR').click();
      const username = 'lbrumpton0';
      const password = 'BrLFJha';
      cy.get('input[name=username]').type(username);
      cy.get('input[name=password]').type(`${password}{enter}`);
      cy.wait(500);
  });

  it('does navigate to Adoptios', () => {
    cy.visit('/');
    cy.contains('button', 'ADOPCIONES').click();
    cy.contains('h1', 'AVISOS DE ADOPCIONES').should('be.visible');
  });

  it('does navigate to Searches', () => {
    cy.visit('/');
    cy.contains('button', 'BÚSQUEDAS').click();
    cy.contains('.mat-stroked-button', 'Agregar').should('be.visible');
  });

  it('does navigate to NewSearch', () => {
    cy.visit('/searches');
    cy.contains('.mat-stroked-button', 'Agregar').click();
    cy.contains('.mat-stroked-button', 'Volver').should('be.visible');
  });
});
