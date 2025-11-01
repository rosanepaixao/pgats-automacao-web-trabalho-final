function loadUser() {
    const timestamp = Date.now();
    return {
        name: "Felipe",
        email: `felipe2.teste@exemplo.com`,
        password: "123",
        title: "Mr",
        dob_day: "10",
        dob_month: "May",
        dob_year: "1990",
        firstName: "Felipe",
        lastName: "Silva",
        company: "Empresa Teste",
        address: "Rua Exemplo, 123",
        address2: "Apto 45",
        country: "Canada",
        state: "British Columbia",
        city: "Vancouver",
        zipcode: "V5K0A1",
        mobile: "+1 604 123 4567"
    };
}

module.exports = { loadUser };