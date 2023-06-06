const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch( {headless: false} );
    const page = await browser.newPage();
    await page.goto('https://www.linkedin.com');
    await page.waitForTimeout(5000);
    await page.fill('#session_key', 'oscar.boutarfa@proton.me');
    await page.fill('#session_password', 'oscoBtf75018!');
    await page.click('[data-id="sign-in-form__submit-btn"]');
    await page.waitForNavigation();
    const linkOffersJob = await page.$eval('ul.global-nav__primary-items > li:nth-child(3) > a', (element) => element.href);
    await page.goto(linkOffersJob);
    await page.waitForNavigation();
    const jobOffers =  await page.$eval('ul.jobs-home-vertical-list__entity-list > li:nth-child(2) > search > ember1044 > ember1047 > ember1048', (element) => element)
    console.log(jobOffers);
    await browser.close();


})();