/// <reference types="cypress" />

describe('Test Case 6 - Formulário de Contato', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com');
  });

  it('Deve enviar o formulário de contato com sucesso', () => {
    // 3. Verifica se a home page está visível
    cy.get('.carousel-inner', { timeout: 10000 }).should('be.visible');

    // 4. Clica em 'Contact Us' usando seletor direto
    cy.get('a[href="/contact_us"]', { timeout: 10000 }).should('be.visible').click();

    // 5. Verifica 'GET IN TOUCH' está visível
    cy.contains('Get In Touch', { timeout: 10000 }).should('be.visible');

    // 6. Preenche nome, email, assunto e mensagem
    cy.get('input[data-qa="name"]').type('Felipe Souza');
    cy.get('input[data-qa="email"]').type('felipe.teste@exemplo.com');
    cy.get('input[data-qa="subject"]').type('Dúvida sobre automação');
    cy.get('textarea[data-qa="message"]').type('Olá, estou testando o formulário de contato com Cypress.');

    // 7. Faz upload de arquivo
    cy.get('input[type="file"]').selectFile('cypress/fixtures/exemplo.txt');

    // 8. Clica em 'Submit'
    cy.get('input[data-qa="submit-button"]').click();

    // 9. Trata o alerta de sucesso
    cy.on('window:alert', (str) => {
      expect(str).to.match(/Success!/i);
    });

    // 10. Verifica mensagem de sucesso
    cy.contains('Success! Your details have been submitted successfully.', { timeout: 10000 }).should('be.visible');

    // 11. Clica em 'Home' e verifica que voltou para a home
    cy.contains('Home', { timeout: 10000 }).should('be.visible').click();
    cy.get('.carousel-inner', { timeout: 10000 }).should('be.visible');
  });
});