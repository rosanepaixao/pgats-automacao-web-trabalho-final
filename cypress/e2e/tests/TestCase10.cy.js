/// <reference types="cypress" />

describe('Test Case 10 - Verificar inscrição no rodapé da home page', () => {
  beforeEach(() => {
    // 1 e 2. Acessa o site
    cy.visit('https://automationexercise.com');
  });

  it('Deve verificar a inscrição no rodapé com sucesso', () => {
    // 3. Verifica se a home page está visível
    cy.get('.carousel-inner', { timeout: 10000 }).should('be.visible');

    // 4. Faz scroll até o rodapé
    cy.scrollTo('bottom');

    // 5. Verifica o texto 'SUBSCRIPTION'
    cy.contains('Subscription', { timeout: 10000 }).should('be.visible');

    // 6. Digita o email e clica no botão de inscrição
    cy.get('#susbscribe_email').type('felipe.teste@exemplo.com');
    cy.get('#subscribe').click();

    // 7. Verifica a mensagem de sucesso
    cy.contains('You have been successfully subscribed!', { timeout: 10000 }).should('be.visible');
  });
});