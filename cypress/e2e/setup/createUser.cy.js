
describe('Criar usuário para testes futuros', () => {
  it('Deve registrar um novo usuário no site', () => {
    const email = 'testcase_user@example.com';
    const password = '123456';

    cy.visit('http://automationexercise.com');
    cy.contains('Signup / Login').click();

    cy.get('[data-qa="signup-name"]').type('Usuário de Teste');
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();

    cy.get('#id_gender1').check();
    cy.get('#password').type(password);
    cy.get('#days').select('10');
    cy.get('#months').select('May');
    cy.get('#years').select('1990');
    cy.get('#first_name').type('Teste');
    cy.get('#last_name').type('Usuário');
    cy.get('#address1').type('Rua Exemplo 123');
    cy.get('#country').select('Canada');
    cy.get('#state').type('SP');
    cy.get('#city').type('São Paulo');
    cy.get('#zipcode').type('12345');
    cy.get('#mobile_number').type('11999999999');
    cy.get('[data-qa="create-account"]').click();

    cy.contains('Account Created!').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
  });
});
