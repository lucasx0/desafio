describe('Teste Home', () => {
  it('LocalHost', () => {
    cy.visit('http://localhost:3000/');
    cy.contains('3-D Man');
  });

  it('Escolha do HQ', () => {
    cy.get(':nth-child(1) > a').click();
    cy.contains('Salvar').click();
    cy.contains('Inicio').click();
    cy.get('.favoritos').click();
    cy.contains('Excluir').click();
  });
  it('Voltando a pagina inicial', () => {
    cy.contains('Inicio').click();
  });
});
