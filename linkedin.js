const { chromium } = require('playwright');
require('dotenv').config();

async function  toJobOffersPage()  {
    const browser = await chromium.launch( {headless: false} );
    const page = await browser.newPage();
    await page.goto('https://www.linkedin.com');
    await page.waitForTimeout(5000);
    await page.fill('#session_key', process.env.LKDN_USRNM);
    await page.fill('#session_password', process.env.LKDN_PSSWD);
    await page.click('[data-id="sign-in-form__submit-btn"]');
    await page.waitForNavigation();
    const linkOffersJob = await page.$eval('ul.global-nav__primary-items > li:nth-child(3) > a', (element) => element.href);
    await page.goto(linkOffersJob);
    await page.waitForNavigation();
    await browser.close();
}

toJobOffersPage();