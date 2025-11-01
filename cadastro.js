const fs = require('fs');
const puppeteer = require('puppeteer');

(async () => {
  const timestamp = Date.now();
  const email = `rosanepaixao_${timestamp}@example.com`;
  const password = '123456';
  const name = 'Rosa Paixão';

  try {
    fs.writeFileSync('email.txt', email);

    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.goto('https://automationexercise.com', { waitUntil: 'networkidle2', timeout: 60000 });

    await page.click('a[href="/login"]');
    await page.waitForSelector('input[data-qa="signup-name"]', { timeout: 20000 });

    await page.type('input[data-qa="signup-name"]', name);
    await page.type('input[data-qa="signup-email"]', email);
    await page.click('button[data-qa="signup-button"]');

    await page.waitForSelector('#id_gender2', { timeout: 20000 });
    await page.click('#id_gender2');
    await page.type('#password', password);
    await page.select('#days', '10');
    await page.select('#months', '5');
    await page.select('#years', '1990');
    await page.type('#last_name', 'Paixão');
    await page.type('#address1', 'Rua das Flores, 123');
    await page.select('#country', 'Canada');
    await page.type('#state', 'SP');
    await page.type('#city', 'São Paulo');
    await page.type('#zipcode', '123456');
    await page.type('#mobile_number', '11999999999');
    await page.click('button[data-qa="create-account"]');

    // Aumenta o tempo de espera para o elemento de confirmação
    await page.waitForSelector('h2[data-qa="account-created"]', { timeout: 30000 });

    await page.click('a[data-qa="continue-button"]');

    await page.waitForFunction(() => {
      return [...document.querySelectorAll('a')].some(el => el.textContent.includes('Logged in as'));
    }, { timeout: 20000 });

    await page.click('a[href="/logout"]');

    await browser.close();
    process.exit(0);
  } catch (error) {
    console.error('Erro durante o cadastro:', error);
    process.exit(1);
  }
})();
