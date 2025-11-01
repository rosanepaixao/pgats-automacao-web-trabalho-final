/// <reference types="cypress" />

describe('Test Case 3 - Login com email e senha incorretos', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com');
  });

  it('Deve exibir mensagem de erro ao tentar login com credenciais inválidas', () => {
    // 3. Verifica se a home page está visível
    cy.get('.carousel-inner', { timeout: 10000 }).should('be.visible');

    // 4. Clica em 'Signup / Login'
    cy.contains('Signup / Login').click();

    // 5. Verifica 'Login to your account' está visível
    cy.contains('Login to your account', { timeout: 10000 }).should('be.visible');

    // 6. Preenche email e senha incorretos
    cy.get('input[data-qa="login-email"]').type('email.invalido@teste.com');
    cy.get('input[data-qa="login-password"]').type('senhaerrada');

    // 7. Clica em 'login'
    cy.get('button[data-qa="login-button"]').click();

    // 8. Verifica mensagem de erro
    cy.contains('Your email or password is incorrect!', { timeout: 10000 }).should('be.visible');
  });
});