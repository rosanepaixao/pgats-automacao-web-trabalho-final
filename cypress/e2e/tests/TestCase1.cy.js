/// <reference types="cypress" />

describe('Test Case 1 - Registro de novo usuário', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com');
  });

  it('Deve registrar um novo usuário com sucesso e excluir a conta', () => {
    // Passo 4: Clicar em 'Cadastrar-se / Entrar'
    cy.contains('Signup / Login').click();

    // Passo 5: Verificar se "Novo usuário se cadastrando!" está visível
    cy.contains('New User Signup!').should('be.visible');

    // Passo 6: Inserir nome e e-mail
    const timestamp = Date.now();
    const user = {
      name: 'Felipe Souza',
      email: `felipe_${timestamp}@example.com`,
      password: '123456'
    };

    cy.get('input[data-qa="signup-name"]').type(user.name);
    cy.get('input[data-qa="signup-email"]').type(user.email);

    // Passo 7: Clicar no botão 'Cadastrar'
    cy.get('button[data-qa="signup-button"]').click();

    // Passo 8: Verificar se 'INSERIR INFORMAÇÕES DA CONTA' está visível
    cy.contains('Enter Account Information').should('be.visible');

    // Passo 9: Preencher detalhes da conta
    cy.get('#id_gender1').check();
    cy.get('#name').should('have.value', user.name);
    cy.get('#email').should('have.value', user.email);
    cy.get('#password').type(user.password);
    cy.get('#days').select('10');
    cy.get('#months').select('May');
    cy.get('#years').select('1990');

    // Passo 10 e 11: Selecionar checkboxes
    cy.get('#newsletter').check();
    cy.get('#optin').check();

    // Passo 12: Preencher detalhes adicionais
    cy.get('#first_name').type('Felipe');
    cy.get('#last_name').type('Souza');
    cy.get('#company').type('Exemplo Ltda');
    cy.get('#address1').type('Rua Teste 123');
    cy.get('#address2').type('Apto 456');
    cy.get('#country').select('Canada');
    cy.get('#state').type('Ontario');
    cy.get('#city').type('Toronto');
    cy.get('#zipcode').type('12345');
    cy.get('#mobile_number').type('11999999999');

    // Passo 13: Clicar no botão 'Criar conta'
    cy.get('button[data-qa="create-account"]').click();

    // Passo 14: Verificar se a mensagem "CONTA CRIADA!" está visível
    cy.contains('Account Created!').should('be.visible');

    // Passo 15: Clicar no botão 'Continuar'
    cy.get('a[data-qa="continue-button"]').click();

    // Passo 16: Verificar se "Conectado como [nome]" está visível
    cy.get('a').contains(`Logged in as ${user.name}`).should('be.visible');

    // Passo 17: Clicar no botão "Excluir conta"
    cy.contains('Delete Account').click();

    // Passo 18: Verificar se a mensagem "CONTA EXCLUÍDA!" está visível e clicar em continuar
    cy.contains('Account Deleted!').should('be.visible');
    cy.get('a[data-qa="continue-button"]').click();
  });
});