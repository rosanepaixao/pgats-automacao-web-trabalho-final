/// <reference types="cypress" />

describe('Test Case 9 - Buscar produto e verificar resultados', () => {
  beforeEach(() => {
    // 1 e 2. Acessa o site
    cy.visit('https://automationexercise.com');
  });

  it('Deve buscar um produto e verificar os resultados', () => {
    // 3. Verifica se a home page está visível
    cy.get('.carousel-inner', { timeout: 10000 }).should('be.visible');

    // 4. Clica em 'Products'
    cy.get('a[href="/products"]', { timeout: 10000 }).should('be.visible').click();

    // 5. Verifica que está na página ALL PRODUCTS
    cy.contains('All Products', { timeout: 10000 }).should('be.visible');

    // 6. Digita o nome do produto e clica em 'Search'
    cy.get('#search_product').type('Tshirt');
    cy.get('#submit_search').click();

    // 7. Verifica que 'SEARCHED PRODUCTS' está visível
    cy.contains('Searched Products', { timeout: 10000 }).should('be.visible');

    // 8. Verifica que os produtos relacionados à busca estão visíveis
    cy.get('.productinfo.text-center', { timeout: 10000 }).should('have.length.greaterThan', 0);
  });
});