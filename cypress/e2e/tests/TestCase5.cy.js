/// <reference types="cypress" />

describe('Test Case 5 - Registro com email já existente', () => {
  let email = '';
  const name = 'Rosa Paixão';

  before(() => {
    // Executa o script de cadastro e lê o e-mail gerado
    cy.exec('node cadastro.js').then(() => {
      cy.readFile('email.txt').then((conteudo) => {
        email = conteudo.trim();
      });
    });
  });

  it('Deve exibir erro ao tentar registrar com email já existente', () => {
    // 2. Acessa o site
    cy.visit('https://automationexercise.com');

    // 3. Verifica se a home page está visível
    cy.get('.carousel-inner', { timeout: 10000 }).should('be.visible');

    // 4. Clica em 'Cadastrar-se / Entrar'
    cy.contains('Signup / Login').click();

    // 5. Verifica se "Novo usuário se cadastrando!" está visível
    cy.contains('New User Signup!', { timeout: 10000 }).should('be.visible');

    // 6. Insere nome e e-mail já cadastrado
    cy.get('input[data-qa="signup-name"]').type(name);
    cy.get('input[data-qa="signup-email"]').type(email);

    // 7. Clica no botão 'Cadastrar'
    cy.get('button[data-qa="signup-button"]').click();

    // 8. Verifica se a mensagem de erro está visível
    cy.contains('Email Address already exist!', { timeout: 10000 }).should('be.visible');
  });
});