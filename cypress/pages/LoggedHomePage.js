class LoggedHomePage {
    getLoggedUsername() {
        return cy.get('.navbar-text');
    }

    clickDeleteAccount() {
        cy.get('a[href="/delete_account"]').click();
    }
}
export default LoggedHomePage;
