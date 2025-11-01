/// <reference types="cypress" />

describe('Test Case 4 - Logout de usuário após login bem-sucedido', () => {
  let email = '';
  const password = '123456';
  const name = 'Rosa Paixão';

  before(() => {
    // Executa o script de cadastro e lê o e-mail gerado
    cy.exec('node cadastro.js').then(() => {
      cy.readFile('email.txt').then((conteudo) => {
        email = conteudo.trim();
      });
    });
  });

  it('Deve fazer login com sucesso e realizar logout', () => {
    // 2. Acessa o site
    cy.visit('https://automationexercise.com');

    // 3. Verifica se a home page está visível
    cy.get('.carousel-inner', { timeout: 10000 }).should('be.visible');

    // 4. Clica em 'Cadastrar-se / Entrar'
    cy.contains('Signup / Login').click();

    // 5. Verifica se "Faça login na sua conta" está visível
    cy.contains('Login to your account', { timeout: 10000 }).should('be.visible');

    // 6. Insere email e senha válidos
    cy.get('input[data-qa="login-email"]').type(email);
    cy.get('input[data-qa="login-password"]').type(password);

    // 7. Clica em 'entrar'
    cy.get('button[data-qa="login-button"]').click();

    // 8. Verifica se "Conectado como [nome]" está visível
    cy.contains(`Logged in as ${name}`, { timeout: 10000 }).should('be.visible');

    // 9. Clica no botão 'Sair'
    cy.contains('Logout', { timeout: 10000 }).should('be.visible').click();

    // 10. Verifica se voltou para a página de login
    cy.contains('Login to your account', { timeout: 10000 }).should('be.visible');
  });
});