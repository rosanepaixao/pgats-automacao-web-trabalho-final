class EnterAccountInformationPage {
    selectTitle(title) {
        if (title === 'Mr') {
            cy.get('#id_gender1').click();
        } else {
            cy.get('#id_gender2').click();
        }
    }

    getPasswordField() {
        return cy.get('[data-qa="password"]');
    }

    selectDateOfBirth(day, month, year) {
        cy.get('[data-qa="days"]').select(day);
        cy.get('[data-qa="months"]').select(month);
        cy.get('[data-qa="years"]').select(year);
    }

    clickNewsletterCheckbox() {
        cy.get('#newsletter').click();
    }

    clickOptinCheckbox() {
        return cy.get('#optin').click();
    }

    getFirstNameField() {
        return cy.get('[data-qa="first_name"]');
    }

    getLastNameField() {
        return cy.get('[data-qa="last_name"]');
    }

    getAddressField() {
        return cy.get('[data-qa="address"]');
    }

    selectCountry(country) {
        cy.get('[data-qa="country"]').select(country);
    }

    getStateField() {
        return cy.get('[data-qa="state"]');
    }

    getCityField() {
        return cy.get('[data-qa="city"]');
    }

    getZipcodeField() {
        return cy.get('[data-qa="zipcode"]');
    }

    getMobileNumberField() {
        return cy.get('[data-qa="mobile_number"]');
    }

    clickCreateAccountButton() {
        cy.get('[data-qa="create-account"]').click();
    }

    fillAddress(userData) {
        this.getFirstNameField().type(userData.firstName);
        this.getLastNameField().type(userData.lastName);
        this.getAddressField().type(userData.address);
        this.selectCountry(userData.country);
        this.getStateField().type(userData.state);
        this.getCityField().type(userData.city);
        this.getZipcodeField().type(userData.zipcode);
        this.getMobileNumberField().type(userData.mobile);
    }

    clickCreateAccount() {
        cy.get('[data-qa="create-account"]').click();
    }
}
export default EnterAccountInformationPage;
