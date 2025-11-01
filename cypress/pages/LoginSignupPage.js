class LoginSignupPage {
    getSignUpNameField() {
        return cy.get('[data-qa="signup-name"]');
    }

    getSignUpEmailField() {
        return cy.get('[data-qa="signup-email"]');
    }

    clickSignupButton() {
        cy.get('[data-qa="signup-button"]').click();
    }
}
export default LoginSignupPage;
