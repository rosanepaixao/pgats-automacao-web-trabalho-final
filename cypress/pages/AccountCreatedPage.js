class AccountCreatedPage {
    getSuccessMessage() {
        return cy.get('[data-qa="account-created"]');
    }

    clickContinue() {
        cy.get('[data-qa="continue-button"]').click();
    }
}
export default AccountCreatedPage;
