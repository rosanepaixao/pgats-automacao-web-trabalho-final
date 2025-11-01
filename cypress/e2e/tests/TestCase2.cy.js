
/// <reference types="cypress" />

describe('Test Case 2 - Login com email e senha corretos', () => {
  let email = '';
  const password = '123456';
  const name = 'Rosa Paixão';

  before(() => {
    // Executa o script de cadastro em background
    cy.exec('node cadastro.js').then(() => {
      // Lê o email gerado pelo script
      cy.readFile('email.txt').then((conteudo) => {
        email = conteudo.trim();
      });
    });
  });

  it('Deve fazer login com sucesso e excluir a conta', () => {
    cy.visit('https://automationexercise.com');
    cy.get('body').should('be.visible');
    cy.contains('Signup / Login').click();
    cy.contains('Login to your account').should('be.visible');
    cy.get('input[data-qa="login-email"]').type(email);
    cy.get('input[data-qa="login-password"]').type(password);
    cy.get('button[data-qa="login-button"]').click();
    cy.get('a').contains(`Logged in as ${name}`).should('be.visible');
    cy.contains('Delete Account').click();
    cy.contains('Account Deleted!').should('be.visible');
    cy.get('a[data-qa="continue-button"]').click();
  });
});
