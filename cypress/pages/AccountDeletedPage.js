class AccountDeletedPage {
    getSuccessMessage() {
        return cy.get('[data-qa="account-deleted"]');
    }

    clickContinue() {
        cy.get('[data-qa="continue-button"]').click();
    }
}
export default AccountDeletedPage;
