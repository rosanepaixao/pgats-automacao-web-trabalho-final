// cypress/support/commands.js

// ***********************************************
// Comandos Personalizados para o Projeto Automation Exercise
// ***********************************************

// Comando para fazer o cadastro inicial via API (pulando a interface da Tela 1)
Cypress.Commands.add('requestSignup', (name, email) => {
    // Faz a requisição POST para simular o clique no botão 'Signup'
    return cy.request({
        method: 'POST',
        url: '/signup',
        form: true, // Indica que a requisição é um envio de formulário
        body: {
            name: name,
            email: email,
            // O parâmetro 'signup' precisa ser enviado para que o servidor processe
            signup: 'Signup' 
        },
        // Espera que o status de redirecionamento seja 200 (Sucesso)
        failOnStatusCode: true, 
    });
});

// ***********************************************
// O restante dos comandos customizados pode vir aqui
// ***********************************************

// Exemplo: Cypress.Commands.add('login', (email, password) => { ... })