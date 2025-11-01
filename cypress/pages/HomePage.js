class HomePage {
    isHomePageVisible() {
        return cy.get('.carousel-inner');
    }

    signupLoginClick() {
        cy.get('a[href="/login"]').click();
    }
}
export default HomePage;
