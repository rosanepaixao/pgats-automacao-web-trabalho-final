/// <reference types="cypress" />

describe('Test Case 15 - Finalizar pedido com registro antes do checkout', () => {
  const email = `felipe_${Date.now()}@teste.com`;

  before(() => {
    // 1 e 2. Acessa o site
    cy.visit('https://automationexercise.com');
  });

  it('Deve registrar, fazer pedido e excluir conta com sucesso', () => {
    // 3. Verifica home page
    cy.get('.carousel-inner', { timeout: 10000 }).should('be.visible');

    // 4. Clica em 'Signup / Login'
    cy.contains('Signup / Login').click();

    // 5. Preenche dados de cadastro
    cy.get('input[data-qa="signup-name"]').type('Felipe');
    cy.get('input[data-qa="signup-email"]').type(email);
    cy.get('button[data-qa="signup-button"]').click();

    // Preenche formulário de criação de conta
    cy.get('#id_gender1').check();
    cy.get('#password').type('123456');
    cy.get('#days').select('10');
    cy.get('#months').select('May');
    cy.get('#years').select('1990');
    cy.get('#first_name').type('Felipe');
    cy.get('#last_name').type('Souza');
    cy.get('#address1').type('Rua Exemplo, 123');

    // Seleciona país corretamente
    cy.get('#country').should('be.visible').then($select => {
      const options = $select.find('option').map((i, el) => Cypress.$(el).text().trim()).get();
      if (options.includes('Brazil')) {
        cy.get('#country').select('Brazil');
      } else {
        cy.get('#country').select(options[1]); // fallback
      }
    });

    cy.get('#state').type('SP');
    cy.get('#city').type('São Paulo');
    cy.get('#zipcode').type('01234-567');
    cy.get('#mobile_number').type('11999999999');
    cy.get('button[data-qa="create-account"]').click();

    // 6. Verifica 'ACCOUNT CREATED!' e clica em 'Continue'
    cy.contains('Account Created!', { timeout: 10000 }).should('be.visible');
    cy.get('a[data-qa="continue-button"]').click();

    // 7. Verifica 'Logged in as Felipe'
    cy.contains(`Logged in as Felipe`, { timeout: 10000 }).should('be.visible');

    // 8. Adiciona produto ao carrinho
    cy.get('.features_items .product-overlay').first().invoke('show');
    cy.contains('Add to cart').click();

    // 9. Clica em 'Cart'
    cy.contains('View Cart').click();

    // 10. Verifica página do carrinho
    cy.url().should('include', '/view_cart');
    cy.contains('Shopping Cart', { timeout: 10000 }).should('be.visible');

    // 11. Clica em 'Proceed To Checkout'
    cy.contains('Proceed To Checkout').click();

    // 12. Verifica detalhes de endereço e revisão do pedido
    cy.contains('Address Details').should('be.visible');
    cy.contains('Review Your Order').should('be.visible');

    // 13. Insere comentário e clica em 'Place Order'
    cy.get('textarea[name="message"]').type('Pedido de teste automatizado.');
    cy.contains('Place Order').click();

    // 14. Preenche dados de pagamento
    cy.get('input[name="name_on_card"]').type('Felipe Souza');
    cy.get('input[name="card_number"]').type('4111111111111111');
    cy.get('input[name="cvc"]').type('123');
    cy.get('input[name="expiry_month"]').type('12');
    cy.get('input[name="expiry_year"]').type('2028');

    // 15. Clica em 'Pay and Confirm Order'
    cy.contains('Pay and Confirm Order').click();

    // 16. Verifica mensagem de sucesso atualizada
    cy.contains('Order Placed!', { timeout: 10000 }).should('be.visible');
    cy.contains('Congratulations! Your order has been confirmed!', { timeout: 10000 }).should('be.visible');

    // 17. Clica em 'Delete Account'
    cy.contains('Delete Account').click();

    // 18. Verifica 'ACCOUNT DELETED!' e clica em 'Continue'
    cy.contains('Account Deleted!', { timeout: 10000 }).should('be.visible');
    cy.get('a[data-qa="continue-button"]').click();
  });
});