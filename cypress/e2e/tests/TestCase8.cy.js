/// <reference types="cypress" />

describe('Test Case 8 - Verificar todos os produtos e página de detalhes', () => {
  beforeEach(() => {
    // 1 e 2. Acessa o site
    cy.visit('https://automationexercise.com');
  });

  it('Deve visualizar todos os produtos e detalhes do primeiro produto', () => {
    // 3. Verifica se a home page está visível
    cy.get('.carousel-inner', { timeout: 10000 }).should('be.visible');

    // 4. Clica em 'Products'
    cy.get('a[href="/products"]', { timeout: 10000 }).should('be.visible').click();

    // 5. Verifica que está na página ALL PRODUCTS
    cy.contains('All Products', { timeout: 10000 }).should('be.visible');

    // 6. Verifica que a lista de produtos está visível
    cy.get('.features_items .col-sm-4', { timeout: 10000 }).should('have.length.greaterThan', 0);

    // 7. Clica em 'View Product' do primeiro produto
    cy.get('.features_items .col-sm-4').first().contains('View Product').click();

    // 8. Verifica que está na página de detalhes do produto
    cy.url().should('include', '/product_details');

    // 9. Verifica os detalhes do produto
    cy.get('.product-information').within(() => {
      cy.get('h2').should('be.visible'); // Nome do produto
      cy.contains('Category').should('be.visible');
      cy.contains('Rs.').should('be.visible'); // Preço
      cy.contains('Availability').should('be.visible');
      cy.contains('Condition').should('be.visible');
      cy.contains('Brand').should('be.visible');
    });
  });
});