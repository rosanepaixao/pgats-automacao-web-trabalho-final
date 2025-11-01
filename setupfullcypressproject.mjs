// =====================================================================
// === SETUP FULL CYPRESS PROJECT ===
// Este script cria a estrutura de arquivos e testes para o projeto.
// =====================================================================

import * as fs from 'fs';
import * as path from 'path';

// Diretório base onde a automação está sendo executada (ex: automationexercise)
const BASE_DIR = process.cwd();

// =====================================================================
// 1. FUNÇÕES DE UTILIDADE
// =====================================================================

/**
 * Cria uma nova pasta (diretório) se ela não existir.
 * @param {string} dirPath - O caminho completo da pasta a ser criada.
 */
function createDir(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
        // CORREÇÃO: Usando Template Literal (crases ` `)
        console.log(`✅ [SUCESSO] Pasta criada: ${dirPath}`); 
    } else {
        // CORREÇÃO: Usando Template Literal (crases ` `)
        console.log(`ℹ️ [INFO] Pasta já existe: ${dirPath}`);
    }
}

/**
 * Cria um novo arquivo com o conteúdo especificado.
 * Cria a pasta do arquivo se ela não existir.
 * @param {string} filePath - O caminho completo do arquivo a ser criado.
 * @param {string} content - O conteúdo do arquivo (código, texto, etc.).
 */
function createFile(filePath, content) {
    const dir = path.dirname(filePath);
    createDir(dir); // Garante que o diretório existe

    fs.writeFileSync(filePath, content);
    // CORREÇÃO: Usando Template Literal (crases ` `)
    console.log(`📄 [SUCESSO] Arquivo criado: ${filePath}`);
}


// =====================================================================
// 2. CONFIGURAÇÃO DE ESTRUTURA E CONTEÚDO
// =====================================================================

// Definição dos Arquivos Page Object (POM)
const pages = {
    'HomePage': `
class HomePage {
    isHomePageVisible() {
        return cy.get('#slider');
    }

    signupLoginClick() {
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    }
}
export default HomePage;`,
    'LoginSignupPage': `
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
export default LoginSignupPage;`,
    'EnterAccountInformationPage': `
class EnterAccountInformationPage {
    // Adicionar métodos aqui
}
export default EnterAccountInformationPage;`,
    'AccountCreatedPage': `
class AccountCreatedPage {
    // Adicionar métodos aqui
}
export default AccountCreatedPage;`,
    'LoggedHomePage': `
class LoggedHomePage {
    // Adicionar métodos aqui
}
export default LoggedHomePage;`,
    'AccountDeletedPage': `
class AccountDeletedPage {
    // Adicionar métodos aqui
}
export default AccountDeletedPage;`,
};


// Conteúdo do Arquivo de Utilidade (util.js)
const utilContent = `
/**
 * Simula o carregamento de um objeto de usuário para testes.
 * @returns {object} Um objeto de usuário com credenciais e dados.
 */
function loadUser() {
    // Retorna um usuário de exemplo. Na vida real, viria de um fixture.
    return {
        name: 'Teste User',
        email: \`teste\${Date.now()}@teste.com\`, // Email dinâmico
        password: 'senha123',
        title: 'Mr',
        dob_day: '1',
        dob_month: 'January',
        dob_year: '1990',
        firstName: 'Test',
        lastName: 'User',
        company: 'QA Company',
        address: '123 Test Street',
        country: 'United States',
        state: 'Texas',
        city: 'Houston',
        zipcode: '77001',
        mobile_number: '5551234567'
    };
}

export default { loadUser };
`;


// =====================================================================
// 3. EXECUÇÃO DA CRIAÇÃO DOS ARQUIVOS
// =====================================================================

// 3.1. Criar pastas de estrutura
createDir(path.join(BASE_DIR, 'cypress', 'pages'));
createDir(path.join(BASE_DIR, 'cypress', 'utils'));
createDir(path.join(BASE_DIR, 'cypress', 'e2e', 'tests')); // Para os testes

// 3.2. Criar Arquivo de Utilidade (util.js)
createFile(path.join(BASE_DIR, 'cypress', 'utils', 'util.js'), utilContent);

// 3.3. Criar arquivos POM
for (const [name, content] of Object.entries(pages)) {
    // CORREÇÃO: Usando Template Literal (crases ` `) para ${name}.js
    createFile(path.join(BASE_DIR, 'cypress', 'pages', `${name}.js`), content);
}

// 3.4. Criar 15 testes
for (let i = 1; i <= 15; i++) {
    // Usando Template Literal (crases ` `) para criar o nome do arquivo dinamicamente
    createFile(path.join(BASE_DIR, 'cypress', 'e2e', 'tests', `TestCase${i}.cy.js`), `
/// <reference types="cypress" />

import homePage from '../../pages/HomePage';
import loginSignupPage from '../../pages/LoginSignupPage';
import enterAccountInformationPage from '../../pages/EnterAccountInformationPage';
import accountCreatedPage from '../../pages/AccountCreatedPage';
import loggedHomePage from '../../pages/LoggedHomePage';
import accountDeletedPage from '../../pages/AccountDeletedPage';
import util from '../../utils/util';

describe('Test Case ${i}', () => {
    // Este teste agora tem a sintaxe correta e a chamada a util.loadUser
    it('should run test case ${i}', () => {
        let user = util.loadUser();

        const home = new homePage();
        home.isHomePageVisible().should('be.visible');
        home.signupLoginClick();

        // * Sua lógica de teste continua aqui *
        // const loginSignup = new loginSignupPage();
        // loginSignup.getSignUpNameField().type(user.name);
        // loginSignup.getSignUpEmailField().type(user.email);
        // loginSignup.clickSignupButton();

        // Adicione aqui o fluxo completo de testes...
        
    });
});
`); 
}

console.log('\n✅ Execução do setup finalizada com sucesso!');